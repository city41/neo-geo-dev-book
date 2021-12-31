# Intro

The Neo Geo was designed by SNK with a lot of help from the Alpha Denshi corporation (later known as ADK) in the late 80s. It launched in Japan in 1990 and proved to be a smash hit throughout most of the world's arcades. It's final official game, Samurai Shodown V Special, was released in 2004, capping off an impressive 14 year run.

The Neo Geo is quite famous for being released both in arcades as the Neo Geo MVS and in homes as the Neo Geo AES[^1]. It is the only console to bring exact arcade hardware into the home[^2]. Virtually all Neo Geo games can run on either the MVS or AES without requiring any changes. While the MVS was a great success for SNK, the AES remained niche due to its very high price tag. SNK did an admirable job supporting the home system despite this, releasing most MVS games on AES as well.

In 1994 SNK released the Neo Geo CD, which also sports virtually identical hardware as the MVS. The main difference is the ROMs on the cartridges were replaced with onboard RAM that gets loaded from the contents on the CD. Thus the Neo Geo CD can suffer from long loading times and struggles to fit large games into its available RAM. Due to this, the CD system did not get any of the later Neo Geo games released for it. The CD system did get some exclusive games and also has the nice bonus of red book music, which keeps it from being totally obsolete these days.

The Neo Geo had great lasting power in the arcade most likely due to its flexible sprite architecture and its ability to address a very large amount of graphic data. 

Most systems at the time displayed graphics on specific layers, with dedicated background and sprite layers. The Neo Geo instead simply offers 381 sprites and it is up to the developer to decide what they do. It's easier to dedicate a lot of sprites to enemies and bullets in a hectic game such as a shooter or allocate more of the sprites to intricate backgrounds for example. This flexibility gave developers more freedom in their game design.

The hardware can access 1,048,576 unique graphic tiles at once, which equates to 128 megabytes of graphic data. If needed, games could go even larger by bank switching different graphic sets in and out. For the time this was an absolutely astonishing amount of graphics data, in comparison Capcom's CPS 1 system can only handle up to 1.5 megabytes of graphic data[^3]. Neo Geo games were free to have many cut scenes, frames of animation, environments, the sky was practically the limit as far as graphical variety was concerned. As the developers became more familiar with the hardware, and as the size of games grew, the library of games really blossomed from relatively standard arcade game fair to truly epic masterpieces as the years went on.

<< screenshots comparing Fatal Fury 1 and Garou >>

## Why write this book

Despite the Neo Geo being such a neat system, its homebrew scene is quite sparse compared to most other consoles. Over the decades a lot of research, documentation and tools have been created. But discovering all of this and bringing it all together has been challenging. Most tools are written for Windows and are closed source. I want to see open source, cross platform tools. This can enable better tools to be created, and for more people to participate and ultimately create more homebrew.

I also wanted a cohesive guide that takes the reader from no knowledge of Neo Geo programming to being able to create any game they want. The Neo Geo Dev wiki is an amazing resource, but it's a bit difficult to know where to start and how to piece all of the information together. It is structured more as a reference, where this book serves as a guide. Once you've read through this book and gotten your feet wet, you should find the Neo Geo Dev wiki more useful.

At first, programming the Neo Geo seems pretty simple. But the hardware has many caveats and odd cases, which can be quite surprising at times. A primary goal of this book is to shed light on these oddities and show how to work with them when writing a game.

## Who is this book for

I am assuming the reader has experience coding in C and using Make. You don't need embedded experience or experience with other retro consoles, having experience coding C in a modern PC environment is perfectly fine. You should be comfortable with pointers, arrays, the preprocessor, etc. If you are brand new to programming this book is not a good starting point. If you have experience programming in other languages but haven't done much C, I recommend brushing up with a quick crash course on the language first. You do not need any previous assembly experience.

<< link to a good C crash course >>


[^1]: The arcade version of the Neo Geo was officially coined the "Multi Video System", and thus the acronym "MVS" can be seen as official. But the home acronym, "AES" was coined by the fan community. The home console has the phrase "Advanced Entertainment System" written on it.

[^2]: Capcom released the CP Sytem Changer, commonly called the "CPS 1.5", as a home system that ran identical games to the arcade CPS1. So the Neo Geo being the only system to do this is not technically true. However the CPS 1.5 only had 11 games released and is merely a footnote these days. Many people have never heard of it, while virtually any gamer from the 90s is familiar with the Neo Geo.

[^3]: During the Neo Geo's lifetime, Capcom released the CPS 2 which also sported the ability to address a lot of graphic data. 
<<< wikipedia says the ROM limit is 40.25 MB, but how much of that is graphics? >>>