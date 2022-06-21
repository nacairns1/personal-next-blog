---
title: Overengineered Tic-Tac-Toe
tags:
- javascript
- typescript
- node.js
- docker
- cloud
- next.js
author: Noah Cairns
description: Fun, Frustration, and Self-Inflicted Complication

---
Developing a game website using react as a primitive game engine is an interesting idea. Depending on how you feel about React, that sentence might read, “Dropping a brick on your foot is an interesting idea.” While I am not an enjoyer of bricks on my feet, I was eager to learn more about developing with React and communicating with simultaneous users. A game of tic-tac-toe with concurrent users is a perfect case of managing states across a network and delivering updates based on user inputs. Thus, tic-tac-zachy was born. 

First order of business - creating the user interface. I chose to use tailwind css and nextjs for the frontend. TailwindCSS and a component library, DaisyUI in this case, makes developing a user interface significantly more enjoyable and easily customizable than vanilla CSS. The actual game itself is not too bad to create. A grid, some buttons, and an active piece display later, the game page is alive. State management was done through reducing the current board state in a global context. What this means is that when a board is loaded or altered on a given game page, the context provider will receive information based on that game. It will then properly update the global state to a current game state, which will be visible to the specific user loading the page. Frontend game setup is off to a successful start. 

For my backend, I developed it at the start using JavaScript via Node.js and using Mongoose and MongoDB for my database. I eventually switched to Typescript and Prisma for my database interface simply for the better developer tools.