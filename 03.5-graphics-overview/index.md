# Graphics Overview

In the 80s and 90s, memory, integrated circuits and other components of game hardware was quite expensive. This expense forced hardware designers to make do with less, and they got creative with how they enabled games to display graphics on the screen.

Graphics were almost always defined using tiles, which were typically 8x8 or 16x16 chunks of graphics. A scene on the screen was built up using these tiles rather than specifying each and every pixel. If a game console has a screen resolution of 320x224 and each pixel's color can be chosen using a 16 bit color space, the system would need at least 140 kilobytes of video RAM to store a screen 

<<320 x 224 yields 71,680 pixels, each pixel taking up two bytes (5 bits each for red, green and blue)>>

That might not sound like a lot today, but in the 80s it was significant. To put it in perspective, the Neo Geo has 68 kilobytes of video RAM[^1]. To make matters worse, even if a system opted for the 140kb to enable each pixel be defined, it'd be quite challenging to update 71 thousand pixels 60 times per second with the processor and bandwidth speeds that were available.

## Tiles

Rather than specifying each individual pixel on the screen, early gaming hardware often used graphic tiles to build the screen. These tiles were typically 8x8 or 16x16 pixels in size. Coupled with the tiles is a tile map, which specifies which tiles go where to build up a scene on the screen.

<< graphic of tiles and a corresponding tilemap >>

Each tile only needs to be defined once in RAM (or ROM), and then it only takes one byte to specify which tile is to be used in at a specific spot in the tile map.

## Palettes

Rather than allowing tiles to specify exactly which color each of their pixels are, tiles are normally indexed. That means each pixel in the tile is usually stored as a number from 0 to 15. Then a corresponding 16 color palette is used to specify what each color index is. 

<< graphic showing a palette, an indexed tile, and the final result >>

Palettes and tiles behave similarly to tiles and tile maps. You can think of the tiles being the "palette" for the tile map.

<div class="callout">
<< callout how palettes can accomplish neat graphical effects and enable "palette swaps" >>
</div>

## Graphical hardware architecture

Most early game systems like the Sega Megadrive have very specific ways that tiles and palettes must be used. The Megadrive has two background planes and 80 sprites. Each background plane can be filled with a tile map, and each sprite is defined with tiles. The planes and sprites all share four 16 color palettes

<< blown out graphic of Sonic the Hedgehog showing the planes and sprites >>

When defining a background on the Megadrive, the developer must setup the two background planes to accomplish this. This sounds limiting, and it is, but there are advantages too. For example, each plane can be scrolled in any direction quite easily. It's even possible to scroll individual rows of a plane to accomplish 3D-type effects 

<< bathhouse scene in SF2 to show line scroll effect >>

## The Neo Geo's graphics

Unsurprisingly, the Neo Geo uses tiles and palettes to save memory. But unlike the Megadrive, it does not have any background planes. Instead, the Neo Geo offers the developer 381 sprites to work with to build their scene. All backgrounds, bullets, characters, enemies, etc on the screen are formed from these sprites.

This approach enables the Neo Geo to be more flexible than other systems, but the tradeoff is it is up to the developer to hand roll their own background scrolling system for example. As you get to know the Neo through programming it, you will likely come to find its sprites are both flexible and frustrating. Hopefully this book will help minimize the frustration at least.

## A sprite on the Neo Geo

A sprite on the Neo Geo is a single column of tiles. Sprites can be up to 32 tiles tall, and you are free to place them anywhere on the screen you would like. Building larger objects such as a screen filling boss is done by placing several sprites next to each other, forming a matrix of tiles out of their columns. The hardware offers aid here, by enabling you to "chain" sprites together and treat them as a single unit (this is also called "sticky" sprites).

A sprite can be scaled horizontally and vertically, and each individual tile specifies its palette and whether it is flipped horizontally or vertically. The graphics hardware even offers simple "auto animations" with sprite tiles where a sequence of tiles will be displayed one at a time, forming a simple animation. Whenever you see people in the backgrounds of Neo Geo fighters doing the same small movement over and over, almost certainly tile auto animations were used

<< gif of real bout fatal fury background with auto animations >>
 
## Sprites and VRAM

To define a sprite such that it will show up on the screen, you set attributes about the sprite in video RAM. We will do this quite a bit throughout this book, so we'll ignore the details for now. The attributes about sprites are stored in VRAM one after the other, and so each sprite is assigned an index. If two sprites are positioned such that they overlap, the one with the higher index is drawn last. The sprite's index is the only way to control this z-ordering. If you need a sprite to be drawn above all other sprites, it must be located later in VRAM.

<< graphic demo'ing sprite index defining z-order >>



[^1] There is also 8kb of palette data stored in the 68k's main memory, so you could say the Neo Geo needs 76kb of memory to handle graphics