---
title: Consider the Calculator
tags: ['react', 'nextjs']
author: Noah Cairns
description: React Components and Seeing Design 
---

## [Consider the Simple Calculator](https://nacairns1.github.io/calculator-react/)
The first thing we see is the background, a simple diagonal repeating pattern. 
Though not the focus of the page, the background passively draws the eye at first glance.
Then the calculator animates with a smooth bounce from off screen to its final resting location in the center – full focus lies now on the calculator.
An ellipsis shows on the screen, imploring the user to input a value. Next, the user sees two grids: An operator grid and a number grid.
The distinct aspects of these grids are these different buttons, the red buttons.
“C”, “Sqrt”, and “=” are the values of these buttons. Behind the scenes, they are the buttons that give a final answer to the user.

These buttons clear the calculator, give the square root of the current value, and display the final equals value on screen, respectively. 
These red buttons’ operations are innately different from the rest of the operator grid and the number grid. Each other button on the screen 
stores a value behind the scenes. These blue buttons either continue an inputted number or store an operator with which we later calculate a new value 
using the operator and a stored value. The red buttons clear these values, display a final value, and finally each red button allows for a new calculation
to begin. The user spends no time thinking about what to do. They get it: input a number, input an operator, get an answer. Silent, simple design goes far
. Further, elegant design can be used to mask an inelegant codebase. 

My codebase for this project in its current iteration certainly reads like (spoiler alert) someone just taught themselves React with the help of some amazing
YouTube videos.  Monolithic calculator class, weak asynchronous/promise structure, intermediate understanding of the event loop, CSS that would make a 
collaborator cry repeating values – you name it, the project’s got it. Check out the logic to choose which number to display: 

```javascript
<Answer value={
        parseFloat(Math.abs(valueToShow)) < .00001 && parseFloat(Math.abs(valueToShow)) !== 0 ?
          parseFloat(valueToShow).toExponential(5) :
        valueToShow.toString().length > 8 && valueToShow !== '. . .' ?
            parseFloat(Math.abs(valueToShow)) <= 999999999 ?
              parseFloat(Math.abs(valueToShow)) < .00001 ?
                parseFloat(valueToShow).toExponential(5) :
            displayedNumber(valueToShow) :
          parseFloat(valueToShow).toExponential(5)
            : parseFloat(valueToShow) > 99999999>} />
```



Notice the missing values from 99999999 to .00001? No? Well, those actually get a whole other ugly special logic tree to decide how many decimal places to slice.
This frankly hideous code serves an elegant visual design purpose: normalize the user’s output. Ultimately, most users don’t particularly care about the data
structures, or data storage, or buffering inputs, concatenating strings which represent numbers, or how long a number is before you change it to exponential, 
etc. What people care about is simple: 

Does it work?
Does it feel good?


My goals were to learn more about how to work with React, to create a functional calculator, and have the calculator feel good to use. I’ll call this a win. 
Did I mention the button animations? 


