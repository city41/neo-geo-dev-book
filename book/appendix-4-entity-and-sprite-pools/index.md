---
chapterNumber: appendix-4
title: Entity and Sprite Pools
status: stub
version: 0.0.0
---

Things like bullets are often implemented using pools. When the player fires their weapon, you grab an available entity out of the entity pool, set it up to be a bullet, and have it travel across the screen. Once it leaves the screen or hits something, you will "despawn" it and return it back to the entity pool.

This approach allows the player to fire their gun continuously with a seemingly infinite supply of bullets. As long as the pool is large enough to handle the demand, there will always be bullets flying across the screen. If you are playing an old video game and notice that your bullets tend to come out in "spurts", it's probably because the entity pool is too small, a common limitation of really old games.

<<< diagram showing how a pool works >>>

Dynamic entities need to use some of the Neo Geo's 381 sprites in order to show up on the screen just like any other entity. When they spawn, they need to grab the sprites they need, use them, then give them back after the entity dies. In other words, the sprites for dynamic entities also need to come from a pool.

The entity pool is pretty straightforward to implement, but the sprite pool can be tricky if you want to take advantage of sticky sprites. If your game doesn't use sticky sprites, then the sprite pool's implementation is just like the entity pool. But if you do want sticky sprites, you need to make sure you give entities a chunk of sprites that are contiguous in VRAM, otherwise the stickiness won't work correctly.

## An entity pool

## A non-sticky sprite pool

- decide on pool size, weighing dynamic vs static needs

## A sticky sprite pool

- similar to malloc
  - keep track of available blocks
  - split blocks apart as needed
  - merge blocks back together while freeing
