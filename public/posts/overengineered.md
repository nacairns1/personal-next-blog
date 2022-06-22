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
date: '2022-06-21'
description: Fun, Frustration, and Self-Inflicted Complication

---
Developing a game website using react as a primitive game engine is an interesting idea. Depending on how you feel about React, that sentence might read, “Willfully dropping a brick on your foot is an interesting idea.” While I am not an enjoyer of bricks on my feet, I was eager to learn more about developing with React and communicating with simultaneous users. A game of tic-tac-toe with concurrent users is a perfect case of managing states across a network and delivering updates based on user inputs. Thus, tic-tac-zachy was born. 

First order of business - creating the user interface. I chose to use tailwind css and nextjs for the frontend. With some react components, a few contexts, and a after sprinkle of debugging my useEffects, the local game was now up and running. Then came some instant, miraculous recollection of proper html elements from my completely google isolated development environment. These fell beautifully into the login and register forms I created. The basic website structure is now up, let's move on to the backend and REST API. 

For the backend, I developed it at the start using JavaScript via Node.js and using Mongoose and MongoDB for my database. My initial API was suboptimal. I eventually switched to Typescript and started using Prisma for my ORM. These two decisions were some of the best decisions I have ever made. The ease of TypeScript's integration makes JavaScript development an absolute joy. Gone are the days of returning a `{dateOfCreation}` in one function and thinking I properly remembered it as a `{creationDate}` when referencing it. While I often joke about the excessive boilerplates of some statically typed languages, TypeScript really does feel like a remarkable improvement to development speed and quality. Once I made that switch, development flew along. API up, User-Authentication active, MongoDB fully integrated, board states are persisting, time for deployment.

A friend gave me a good comparison for the feeling of development. He compared developing a project to a Dark Souls boss. It's hard, it's frustrating, and you'll post on forums complaining about the awful balance and implications of certain design choices. Docker and the Google Cloud Platform were my opponents for this round. There is no worse feeling than having an error on a new platform, googling it, and the first result isn't even in the same ballpark as what you were searching. 

Throughout all of the suprisingly minimal online forum discussions about my particular Cloud Run problems, my frustration steadily built. As is always the case, it was time for some documentation diving. I learned much more about Docker's images and container system and Google's Cloud Platform. Cloud Run was the pesky overhead swing that kept obliterating me post spam roll. Yet once I made my first api call to that deployed API and my browser displayed `CANNOT GET /` instead of a placeholder, I knew there was hope. Now the problem was only the wrong url. I put in the right path and I have never been happier to see `GAME ACTIVE: FALSE`. That feeling of conquering a task which had given you countless fits, that sweet relaxation upon knowing you can finally rest, that feeling is all too sweet. Successfully deploying a brand new fullstack app is pretty cool too. Check it out [here](https://tic-tac-zachy.vercel.app/)