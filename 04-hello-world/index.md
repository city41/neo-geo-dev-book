# Hello World

Finally in chapter four we begin actually coding. We are going to start small, with our only goal being to show "HELLO NEO GEO" on the screen.

If you remember from chapter 2, a Neo Geo game has many different types of ROMs. All of these ROMs must be present in order for a game to work, which imposes a significant burden on getting started. To make matters worse, the Neo Geo has no built in way to display text! To overcome these obstacles and get up and running more quickly, we won't be starting from scratch. Instead we will use an existing game as our basis, and swap in our own P ROM.

## What we will be building

Saying "Hello world" is the classic way to start out any programming endeavour. So to kick off Neo Geo programming, we will write a program that displays "Hello Neo Geo!" on the screen

<< screenshot of running app >>

## Download the sample game ROMs

You can download a zip file of the sample game here

<< repo of the sample game, releases >>

You can try out the game in gngeo with `gngeo snake.zip`. It is the simple snake game popular on mobile phones in the early 2000s. It is actually the game we will build in this book.

## Set up your project directory

Create a directory named `helloNeo` and set up its contents like this

```
sampleRom/
  202-c1.c1
  202-c2.c2
  ...
src/
```

The contents of the `sampleRom` folder is the contents of the sample rom zip file.

## Create the Makefile

We need a Makefile to drive building and testing the game. Thankfully for this simple app the Makefile is also quite simple. Create a file in the root of your project directory named `Makefile` with these contents:

```
makefile goes here
```

This makefile does three things:

1. Copies the ROMs from the sample game we will be "borrowing" to bootstrap our hello world app. Our hello world app will only need to create its own P1 ROM, so the rest of the ROMs get copied in from the sample game.

2. Creates the P ROM file by compiling the c source code and converting the resulting binary into the format the Neo Geo expects.

3. Sets up a gngeo task that allows us to easily launch our hello world app by simply typing `make gngeo`.

## The sample game's S ROM

As you may remember from chapter 2, the S ROM contains the tiles for the fix layer. Almost all Neo Geo games use some of the tiles in this ROM to serve as characters for displaying words and numbers on the screen. There is no requirement for this, of course, but it's very commonly done. The sample game is no different, and has character tiles starting at index 0 going up to index <<END INDEX>>

<< screenshot of the sample S rom in neospriteview >>

You can check out the S ROM yourself by loading it into the sprite viewer at https://city41,github.io/neospriteviewer

### Translating ASCII to tiles

In our C program, when we create a string such as `"Hello Neo Geo!`, it will encode those characters into ASCII

<< TODO: is it really UTF? >>

<< screenshot of ASCII table >>

In ASCII, the letter 'A' is encoded as the value `65`. In the S ROM, 'A' is located at index 33. So when we encounter `'A'` in code, to find the corresponding tile, we need to subtract `32`. This is true of all ASCII characters, because the tiles in the S ROM are stored in the same order as ASCII. The beginning of the ASCII table is a bunch of stuff we don't need in a Neo Geo game. So the first tile is space. Since space's ASCII value is `32`, to find the corresponding tile from an ASCII value we need to subtract `32`.

## How to set tiles on the fix layer

Now that we have a rough idea of which tiles we need to place on the screen to spell out "Hello Neo Geo!", we need to know how to tell the Neo Geo to display them.


## Create the main source code



Finally