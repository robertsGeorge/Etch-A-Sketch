# Etch-A-Sketch

This is my version of a project from The Odin Project's curriculum. 

The task was to create a digital Etch-A-Sketch, using plain JavaScript to manipulate the DOM.

[Guidance](https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project) given by The Odin Project was intentionally light, to encourage students to conduct independent research to discover possible methods to use.

To generate the sketching grid, I researched how to use CSS Flexbox and applied that method in conjunction with JavaScript.

<br>

## To Do:

* Implement foreach where appropriate instead of for loops - check this resource: https://davidtang.io/2016/07/30/javascript-for-loop-vs-array-foreach.html
* break up the resetGrid function 
    - clicking reset should simply reset the grid and not ask for how large a user wants the grid to be
    - The grid size functionality would work better as a separate 'change grid size' button and when that's clicked it can ask for the user input for the grid size
