---
chapterNumber: supplemental-9
title: The Eye Catcher
status: rough-draft
version: 0.0.1
---

You may not know it by name, but if you're a Neo Geo fan, you've seen the Eye Catcher many times. This is the opening logo animation that runs when a game first boots up and is also part of the game's rotation when not being played in an arcade.

<div class="callout">
This chapter covers the details on how the Eye Catcher works. Sromcrom handles all the details automatically, so if you just want to set up your own Eye Catcher, jump to "Setting up an Eye Catcher with Sromcrom"
</div>

<figure>
    <img src="/eyeCatcher.gif">
    <figcaption>The Eye Catcher as seen on earlier Neo Geo games. Taken from the Neo Geo Dev Wiki.
    </figcaption>
</figure>

Running the Eye Catcher is a joint effort between the BIOS and the game cart. The BIOS orchestrates the animation and its palettes, and the cart provides the graphic tiles. The main Neo Geo logo is store in the CROM, and everything else can be found in the SROM. The jingle that plays is done by the game itself, but the BIOS tells it when to start.

## The Palette

The Eye-Catcher uses a single palette located at index 15. It has 6 colors in it, and the first color is blank, just like most palettes. As the animation progresses, the palette's colors will change. This is how the Eye Catcher does things like fade in the SNK logo towards the end.

Here is the palette in its final form (ie, when the animation has completed)

<figure>
    <img src="/eyeCatcherPalette.svg">
    <figcaption>The Eye Catcher's palette
    </figcaption>
</figure>

The rest of the palette is `$0000`. The last color is the blue used by the SNK logo. It's important that the graphic tiles match this palette, otherwise they won't do what you expect during the animation.

## The Graphic Tiles

### The Empty Tiles "eyecatcher": {

    	"mainLogoImageFile": "./eyecatcher_mainLogo.png",
    	"max330MegaImageFile": "./eyecatcher_max330.png",
    	"proGearSpecImageFile": "./eyecatcher_progear.png",
    	"snkLogoImageFile": "./eyecatcher_companyLogo.png",
    	"copyrightCharacterImageFile": "./eyecatcher_copyright.png"
    },to

The Eye Catcher needs a blank tile in both CROM and SROM. In both cases, that tile is found at index 255. It uses these tiles to ensure the black parts of the screen remain black throughout the animation. In general these blank tiles end up being used by the BIOS and game. It's pretty safe to assume that the tile at 0xff will be blank when needed in your game's logic.

### The Main Neo Geo Logo

This is stored in CROM starting at index 0. When looking at a CROM pair in the Tile Viewer, almost always you will see the Neo Geo logo at the very beginning

<figure>
    <img src="/neoGeoLogoInTileViewer.png">
    <figcaption>The Neo Geo logo at the start of Fatal Fury 3's first CROM pair.
    </figcaption>
</figure>

In some games the logo is found in a different CROM. You can tell the BIOS which CROM the logo will be in.

<<< details on how this is done >>>

But in most games, including commercial releases, it's just found in the first CROM.

It is 15x4 tiles in size, or 240x64px. But the upper right corner and lower right corner tiles are not used nor should they be present in the CROM. The Eye Catcher will lay the tiles out like this

<figure>
    <img src="/eyeCatcherLogoTilesLayout.png">
    <figcaption>How the logo tiles are laid out on the screen. Taken from the Neo Geo Dev Wiki.
    </figcaption>
</figure>
### The Empty Tiles "eyecatcher": {

    	"mainLogoImageFile": "./eyecatcher_mainLogo.png",
    	"max330MegaImageFile": "./eyecatcher_max330.png",
    	"proGearSpecImageFile": "./eyecatcher_progear.png",
    	"snkLogoImageFile": "./eyecatcher_companyLogo.png",
    	"copyrightCharacterImageFile": "./eyecatcher_copyright.png"
    },to

### The "Pro Gear Spec" Text

These images are stored in the SROM and use colors 1 through 4 in the palette. The text in the official eye catcher is anti-aliased.

### The SNK Logo

This is also stored in SROM and only uses the 5th color in the palette (the blue). These tiles must only use that color or otherwise they will show up prematurely in the animation.

## Setting Up an Eye Catcher with Sromcrom

To set up an Eye Catcher using Sromcrom, add an `eyecatcher` section to your resource.json file

```json
"eyecatcher": {
    "mainLogoImageFile": "./eyecatcher_mainLogo.png",
    "max330MegaImageFile": "./eyecatcher_max330.png",
    "proGearSpecImageFile": "./eyecatcher_progear.png",
    "snkLogoImageFile": "./eyecatcher_companyLogo.png",
    "copyrightCharacterImageFile": "./eyecatcher_copyright.png"
}
```

The images need to use the Eye Catcher palette, and must be the right size. If not, Sromcrom will error.

<<< add the 24 bit rgb values to the pallete >>>

Sromcrom will automatically add these into the game's CROM and SROM files and ensure the tiles at 0xff are blank. That's all there is to it.

### A Custom Eye Catcher

As long as your images are the correct size and use the correct palette, they can contain anything. So it is possible to customize the Eye Catcher a bit. For example, here is an Eye Catcher I created for a YouTube video series:

<figure>
    <img src="/customEyeCatcher.gif">
    <figcaption>A customized Eye Catcher
    </figcaption>
</figure>

<<< TODO: make this gif smoother and much smaller >>>
