# The Hardware

Programming the Neo Geo requires understanding its hardware well. The various CPUs and chips on the motherboard work with the various ROMs in the game cart to make the game happen. 

In this short chapter we'll take a quick tour of the major chips and ROM types. Don't worry about remembering all of this, as you dig into Neo dev you'll get to know this stuff quite well.

## Motorola 68k CPU

The 68000 is the main central processing unit and responsible for executing the primary game code. It runs at 12mhz, has 32 bit registers and has no native floating point support. 

## Zilog Z80 CPU

The Z80 is a secondary CPU which is responsible for running the game's audio driver. It accepts commands from the 68k and works with the Yamaha YM2610 to play sound effects and music. Since a second CPU handles the audio, there is no worry of audio related functions bogging down the main CPU. Essentially the Neo Geo runs two programs in parallel while a game is running.

## The LSPC, the Neo's "GPU"

Several chips work together to form the Neo Geo's proprietary graphics system commonly called the LSPC (named after the line sprite controller, the primary chip of this system). The LSPC plays a similar role as modern GPUs do today. When programming your game, you will come to find sprites are very flexible and powerful in some regards, and limiting and frustrating to work with in others. In this book, getting the most out of the LSPC is something we will talk about a lot.

# Different types of ROMs

If you were to open a Neo Geo cartridge, you'd find two PCBs inside with many different chips installed. These chips come in several flavors and each plays a different role.

<<image of MVS cart pcbs>>

### P1 and P2 ROMs

The "P" ROMs store the game's code and data. The 68k executes this code to run the game. The P ROMs are also where you will find things like level and entity (enemies, vehicles, etc) definitions. A P ROM can be 2 megabytes in size, but if more space is needed, it is possible to bank switch in a different ROM.

<div class="callout">
You've really got to create a giant game to need P ROM bank switching, so we will not cover how it works in this book.
</div>

Think of "P" meaning "program" to help remember what this ROM is for.

<< TODO: what is up with P2? >>

### M ROM

The M ROM stores the Z80's code. This is the audio driver. It's really just a program written for the Z80 CPU who's only focus is starting and stopping sound effects and music. Fancier audio drivers will also take on fading and even mixing of audio.

Think of "M" meaning "music" to help remember what this ROM is for.

### V ROMs

V ROMs store the audio data. This can either be audio samples (similar to WAV and MP3 files) or the track information for the YM2610 (similar to MIDI).

You can think of "V" meaning "voice".

### C ROMs

C ROMs store the main graphic tiles. They are sometimes called character tiles, hence the "C". All sprites in a game are built out of C tiles. C ROMs come in pairs, and every game has at least two C ROMs. Every graphic tile is split in half and stored across both ROMs. This enables the Neo Geo to load each half of a tile in parallel and get the graphics onto the screen faster.

In order to take full advantage of the graphic system, the tiles need to be stored in a certain order and following various restrictions. Building C ROMs out of your graphic assets that meet these requirements is a challenging part of Neo Geo programming. But thankfully tools such as sromcrom (which we will use in this book) do most of the heavy lifting for you.

### S ROM

The S ROM also contains graphic tiles, but of a different kind. The Neo Geo has a separate graphic layer called the fix layer. This layer is always drawn on top of everything else, and it cannot be scrolled or repositioned. Games typicaly use this layer for the score, health bars, credits display, etc. The fix layer is also commonly used to display text on the screen.

The MVS has a built in S ROM that is used to draw the service screen. 

<< screenshot of the service screen >>







