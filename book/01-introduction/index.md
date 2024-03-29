---
chapterNumber: 1
title: Introduction
status: rough-draft
version: 0.0.1
---

The Neo Geo was designed by SNK with a lot of help from the Alpha Denshi corporation (later known as ADK) in the late 80s. It launched in Japan in 1990 and proved to be a smash hit throughout most of the world's arcades. Its final official game, Samurai Shodown V Special, was released in 2004, capping off an impressive 14 year run.

The Neo Geo is quite famous for being released both in arcades as the Neo Geo MVS and in homes as the Neo Geo AES[^1]. It is the only console to bring exact arcade hardware into the home[^2]. Virtually all Neo Geo games can run on either the MVS or AES without requiring any changes[^3]. While the MVS was a great success for SNK, the AES remained niche due to its very high price tag. SNK did an admirable job supporting the home system despite this, releasing most MVS games on AES as well.

In 1994 SNK released the Neo Geo CD, which also sports virtually identical hardware as the MVS. The main difference is the ROMs on the cartridges were replaced with onboard RAM that gets loaded from the contents on the CD. Thus the Neo Geo CD can suffer from long loading times and struggles to fit large games into its available RAM. Due to this, the CD system did not get any of the later Neo Geo games released for it. The CD system did get some exclusive games and also has the nice bonus of red book music, which keeps it from being totally obsolete these days.

The Neo Geo had great lasting power in the arcade most likely due to its flexible sprite architecture and its ability to address a very large amount of graphic data.

Most systems at the time displayed graphics on specific layers, with dedicated background and sprite layers. The Neo Geo instead simply offers 381 sprites and it is up to the developer to decide what they do. It's easier to dedicate a lot of sprites to enemies and bullets in a hectic game such as a shooter or allocate more of the sprites to intricate backgrounds for example. This flexibility gave developers more freedom in their game design.

The hardware can access 1,048,576 unique graphic tiles at once, which equates to 128 megabytes of graphic data. If needed, games could go even larger by bank switching different graphic sets in and out. For the time this was an absolutely astonishing amount of graphics data, in comparison Capcom's CPS 1 system can only handle up to 1.5 megabytes of graphic data[^4]. Neo Geo games were free to have many cut scenes, frames of animation, environments, the sky was practically the limit as far as graphical variety was concerned. As the developers became more familiar with the hardware, and as the size of games grew, the library of games really blossomed from relatively standard arcade game fair to truly epic masterpieces as the years went on.

<figure>
    <img src="/ff1_vs_rbs.png" />
    <figcaption>
    Graphical comparison between Sound Beach in Fatal Fury (1991) and Real Bout Fatal Fury Special (1997)
</figure>

## Why write this book

Despite the Neo Geo being such a neat system, its homebrew scene is quite sparse compared to most other consoles. Over the decades a lot of research, documentation and tools have been created. But discovering all of this and bringing it all together has been challenging. Most tools are written for Windows and are closed source. I want to see open source, cross platform tools. This can enable better tools to be created, and for more people to participate and ultimately create more homebrew.

I also wanted a cohesive guide that takes the reader from no knowledge of Neo Geo programming to being able to create any game they want. The Neo Geo Dev wiki is an amazing resource, but it's a bit difficult to know where to start and how to piece all of the information together. It is structured more as a reference, where this book serves as a guide. Once you've read through this book and gotten your feet wet, you should find the Neo Geo Dev wiki more useful.

At first, programming the Neo Geo seems pretty simple. But the hardware has many caveats and odd cases, which can be quite surprising at times. A primary goal of this book is to shed light on these oddities and show how to work with them when writing a game.

## Who is this book for?

I am assuming the reader has experience coding in C and using Make. You don't need embedded experience or experience with other retro consoles, having experience coding C in a modern PC environment is perfectly fine. You should be comfortable with pointers, arrays, the preprocessor, etc. If you are brand new to programming this book is not a good starting point. If you have experience programming in other languages but haven't done much C, I recommend brushing up with a quick crash course on the language first. You do not need any previous assembly experience.

<< link to a good C crash course >>

Some of the tools this book uses are written in JavaScript (actually, TypeScript) and run in Node. It is assumed the reader has some basic understanding of how to use NodeJS, but in depth knowledge is not necessary.

## What is this book's scope?

The main focus of this book is creating cartridge based Neo Geo games for the AES. The game that this book builds is a simple breakout clone. Some of the minor intricacies of the MVS (such as inserting coins and the attract mode) will be touched upon but not necessarily in detail.

The CD system is completely out of scope for this book. Hopefully one day I'll touch upon how to port a game from cartridge to CD, but that is a long ways off.

## Who am I?

I first got a Neo Geo in 1997. It came with King of Fighters '94 and World Heroes 2. I absolutely fell in love with KOF94 and have been a huge Neo Geo fan ever since. I have dabbled in Neo Geo development here and there with things like [a gif maker](https://mattgreer.dev/blog/extracting-neo-geo-emulator-graphics-data-to-create-animated-gifs/), a [tile viewer](https://neospriteviewer.mattgreer.dev/), and [a tool for the NeoSD](https://github.com/city41/neosdconv). I am now writing a Neo Geo game and building [sromcrom](https://github.com/city41/sromcrom), a tool we will use throughout this book for handling graphics.

I have worked professionally as a software developer my entire career, but I am not an expert on Neo Geo development. So why am I writing this book? For one, I am writing the book I wish existed when I first got into this stuff. But also this book is [open source](https://github.com/city41/neo-geo-dev-book), free, and a living document. My hope is this book continually improves as I learn more, as people contribute, and as people give feedback.

## Thank you and acknowledgements

Over the decades, many people have contributed to understanding how the Neo Geo works and writing programs for it. The contributors to the Neo Geo Dev wiki, especially Furrtek, are the true MVPs making all of this possible. Also want to thank Damien Ciabrin for creating ngdevkit. He has done an excellent job understanding how the Neo Geo works and what is expected of a game, and distilling that into an easy to use framework. With ngdevkit you can really focus on building your game rather than worry about many intricacies the hardware demands. Also many thanks to the people who have made tools, written tutorials and blog posts, and released homebrew titles over the years.

[^1]: The arcade version of the Neo Geo was officially coined the "Multi Video System", and thus the acronym "MVS" can be seen as official. But the home acronym, "AES" was coined by the fan community. The home console has the phrase "Advanced Entertainment System" written on it.
[^2]: Capcom released the CP Sytem Changer, commonly called the "CPS 1.5", as a home system that ran identical games to the arcade CPS1. So the Neo Geo being the only system to do this is not technically true. However the CPS 1.5 only had 11 games released and is merely a footnote these days. Many people have never heard of it, while virtually any gamer from the 90s is familiar with the Neo Geo.
[^3]: Technically this is not true in some very minor ways. The MVS has some minor additional hardware and ROMs that the AES does not. This is why for example there are MVS to AES cartridge converters but not the other way around. But for sure, "porting" a game from the MVS to AES is very easy in almost all cases, and the end result plays and looks identical in every way.
[^4]:
    During the Neo Geo's lifetime, Capcom released the CPS 2 which also sported the ability to address a lot of graphic data.
    <<< wikipedia says the ROM limit is 40.25 MB, but how much of that is graphics? >>>
