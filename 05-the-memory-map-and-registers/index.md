# The Memory Map and Registers

A typical modern computer will have gigabytes of memory and many different processes all running at the same time, each using a slice of that available memory. The kernel will fib a bit and present a virtual memory space to the program that makes the program feel as though it is the only one using memory. It is free to read to and write from memory in this virtual space whenver it needs, and the kernel will intercept and ensure the program gets what it needs from the real physical memory of the computer.

## The 68k's memory map

The Neo Geo does not work like this at all, it's all much simpler. Essentially, your game is the only thing running[^1], so it has free reign on the entire actual physical memory. There is 64kb of work RAM available, of which 32 kilobytes is intended for the BIOS, and the other 32kb is for use by the running game. 

Every byte in memory is given an address, starting at zero and going up by one for each successive byte. When the 68k wants to read to or write from memory, it will send the needed address out on the address bus. The 68k's address bus is 24 bits wide, which means it can ask for addresses from 0 to 16,777,215. So in other words, the 68k can work with up to 16 megabytes of memory.

The 32kb of memory your game can use starts at address 1,048,576, which is 0x100000 in hexidecimal. If you wanted to, you could write this in your game and it'd work perfectly fine

```C
*(u8*(0x100000)) = 12;
```

Using a little bit of C pointer magic, we have literally written the value 12 to the first byte of work RAM. This is of course pretty silly. Instead the compiler is told which addresses are valid memory and it will compile your game to use this address space for you.

But out of the 16mb of address space, only about 0.4% of it is used for the work RAM. There are a lot of left over addresses that could be used for other things, and that is exactly what systems like the Neo Geo do.

For example, the palette RAM is mapped into the 68k's memory map at addresses 0x400000 through 0x401fff. In our hello world program, when we initialized the palettes, we were sending bytes to these very addresses. To do this we used the constant `MMAP_PAL_BANK1` which is defined in ngdevkit. If you find its definition in ngdevkit's source code, you will see it's quite similar to the line of code above

```C
#define MMAP_PALBANK1	((volatile u16*)0x400000)
```

There are other things mapped into the 68k's memory map, such as the contents of the memory card if it is plugged into the system. The full map can be viewed [here at the neogeodev wiki](https://wiki.neogeodev.org/index.php?title=68k_memory_map).

## Memory mapped registers

In the 68k's memory map from address 0x300000 to 0x3fffff you will find registers. As far as the CPU is concerned, you write to or read from a register just like any other memory address. But when you do this, the register will perform some functionality. They almost act as primitive function calls.

In the hello world program, we needed to specify how the tiles on the fix layer should be arranged. The fix layer is located in video RAM, which is a completely separate address space and not found in the 68k's memory map at all. The LSPC is the only thing that can directly access this RAM, our program cannot read or write it. Instead, several registers were established to coordinate sending data over to video RAM.

We already used the main video RAM registers in our hello world program. Here they are again

| Address  | Name         | Description                                                        |
|----------|--------------|--------------------------------------------------------------------|
| 0x3c0000 | REG_VRAMADDR | Sets the current video RAM address we want to either read or write | 
| 0x3c0002 | REG_VRAMRW   | Read or write to the address that was set in REG_VRAMADDR          |
| 0x3c0004 | REG_VRAMMOD  | After writing to REG_VRAMRW, REG_VRAMADDR will jump ahead by the amount specified in this regiser 

We now understand what "address" in the table means. That address is located in the 68k's memory map.

There are quite a few registers, each enabling us to learn various things about the state of the hardware, or even cause the hardware to perform actions for us. For example, the register `REG_P1CNT` located at address 0x300000 tells us the current state of player one's joystick and buttons. Or `REG_SOUND` at address 0x320000 allows us to send commands over to the Z80 so it can play a sound effect for us, for example.

## A word of caution

We are free to read to and write from any address in the 68k's memory map at any time. It is entirely up to us. If you do something stupid, the Neo Geo will rarely safeguard you, it will just let you be stupid. For example, the RAM located at 0x10f300 to 0x10ffff is intended for the BIOS, but nothing will stop you from writing to it. There is nothing like the kernel in a modern OS offering protection.

Similarly, you are free to send data over to video RAM whenever you want, but as you will see when we get further into creating a real game, you want to be careful when you change video RAM values, as sometimes that change can be seen by the player right away, causing graphical glitches.

[^1] The system ROM (aka the BIOS) is also running on the hardware at various times. Your game and the system ROM take turns using the CPU. As we will see later on, the system ROM will expect our program to respond and behave in certain ways in order for our game to operate properly.


