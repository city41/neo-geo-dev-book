---
chapterNumber: appendix-2
title: Fixed Point Numbers
status: stub
version: 0.0.0
---

The Neo Geo's 68k processor does not have a floating point unit. This means using numerical types like `float` and `double` will not quite do what you expect. They will actually work

<< confirm this is true for double too >>

but this is because the compiler, gcc, will notice you are using floating point and add support for it with additional code. This means floating point calculations are _extremely_ slow. So slow it is very unlikely you could actually use them in your game.

An alternative approach to fractional numbers is fixed point. With fixed point, we simulate floating point using integer types. It's not as accurate, but it's significantly faster. Using fixed point calculations in your main game loop is doable.
