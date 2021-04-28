## Welcome to the Labyrinth

:skull:

This application is designed for RPG Game Masters to run a specific type of encounter for their players.  It features a maze that moves around the players as they move around it.  

Besides the maze there are two tokens; a Blue Shield and a Red Skull.
These tokens are moved independently by arrow buttons.
There are no rules to Langston’s Labyrinth.  As the GM you set the pace as you see fit.


## Project Status

This project is still a work in progress.  Although it is very close to 1.0.  


## Installation

To install dependancies:
npm install

To load application:
Dual terminal boot required.
npm run server / npm run client.


## Users Manual

Langston's Labyrinth will require you to log in to keep track of your labyrinths.  Once logged in you will be able to make a new labyrinth by giving it a name.  Labyrinths you have made previously are listed by name and turn number on the top of the user page.  Clicking on the “load” button will take you to the Game-board.  Here you will see the labyrinth and two tokens; a blue shield and a red bull’s head.  The shield represents your player’s party and starts in the top left corner.  The bull’s head is meant to represent the boss of the labyrinth and it starts in the center.  

The rules of play are very simple and, as with all RPGs, are totally up to the GM.  As the Gm explain to your players what adjacent rooms are available for the players to move into.  Tokens are intended to move wherever an open hallway exists between two tiles.  This includes allowing tokens to move “off the grid” if an open pathway exists.  Once your players have made their choice move the shield token by clicking the appropriate arrow button beneath the Blue Shield icon on the top of the screen.  Next choose where (if anywhere) you would want the boss to move to and enter that selection with the arrow buttons under the Red Bull’s head. 

Clicking on the “Move Maze” button will select an entire row and column to be moved one position in a random direction.  It will also add to the turn counter at the top of the page but feel free to move the labyrinth as often as you see fit to keep an interesting pace for your players.

When your game session is at an end clicking “Exit the Labyrinth” button will save the labyrinth in its current state and take you back to your user page.

As it stands it is up to the GM to populate the labyrinth with encounters and treasure as you see fit.  A future version might include tools an options to help and inspire you with this task.



## Dependancies/ Built With

Langston's Labyrinth is a [React.js](https://reactjs.org/) app built with [React-Redux](https://react-redux.js.org/).  The [Node.js](https://nodejs.org/en/) and [Axios](https://github.com/axios/axios) libraries were used as well.  [Passport.js](http://www.passportjs.org/) provides authentication.


## Thanks

Thanks to [Emerging Digital Academy](https://www.emergingacademy.org/) for equipping me with the knowledge to tackle this project.


## License

This app is not intended for sale, but it is intended for use.  User experience may vary.  You are free to use this app as you see fit.  Have Fun!

But also, MIT License

Copyright 2021 Jon Kranzler

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
