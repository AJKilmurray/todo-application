# Introduction & Overview
The purpose of this application is to display a list of tasks set by the user with a deadline. Each task is input by the user, with a deadline of their choice. 

To add a task to your todo list, find the input field located to the _left_ of the **green** `+` button. 

From there, the user will be asked for a deadline (`date` and `time`), which will be displayed on the list item when created. 

The final list item will display **5** individual attributes. 

1. Task Name
2. Deadline (Date)
3. Deadline (Time of day)
4. Complete Task Button
5. Delete Task Button

For _now_, these will be the only attributes of each task. In the future, more features like leaving notes will be implemented.

The **red** button will delete all items on the todo list. The user will be confronted with a confirmation upon clicking the button, to ensure the user does not accidentally lose all items on their todo list from a miss-click. The `No` option, will return to the home screen. The `Yes` option will delete all list items.

## Design Sketch (Adobe XD)
![Sketch](https://i.imgur.com/FYtDnhL.png)

## Technology Stack
* HTML5
* Bootstrap 
* SCSS
* JavaScript

## How to run this application
This application does not need any dependencies, or packages. Just download the files in a folder and you can open up `index.html`. If you would like to see the project without having to download the files, you can head on over [here](https://ajkilmurray.github.io/todo-application). If you find any issues or bugs, please feel free to open an issue, or even a pull request. 

## Responsive Design
The application will remain functional and operational on all device screens. For the best experiences, desktop/laptop will have the best results. More optimal changes will be made in the future, for specific devices. However, for now each device has its own responsive layout.

## What I've learned from this project
This is my _"biggest"_ project so far, in terms of Javascript (~500 lines). I've managed to both expand upon and learn new things. It's also been a great experience getting even more familiar with CSS, as there are so many different ways to do things, and it just comes down to personal preference. The same can be said about Javascript, but there are generally "best practices" that you conclude to using upon research and trial and error. What i've specifically been able to learn is the following:

### Javascript
* Using function parameters with HTML elements
* Using event listeners on more than just clicks. Specific user inputs.
* Manipulation of styles.
* Working with arrays.
* Date constructors. (Very interesting stff, will be learning more about this.)
* Dynamically adding, removing and manipulating HTML elements.
* Stronger understanding of arrow functions & functional programming.
* Seperation of functions. Spread out, purpose dedicated functions are much better than clustering functions with a dozen different purposes.
* Using some methods. Most memorable are .split() & .concat. Very useful. I also experimented with a number of array methods. Not for the first time, but to understand them more in depth. I feel very comfortable with string & array methods. Would like to learn more about objects.

### SCSS (& CSS)
* How effective using variables is compared to set values. Saves time and keeps values stored with ease of access.
* Experimented with some advanced animations, decided to stick with some basic opacity animations, to learn more about it later.
* First proper time using !important. Very useful for overriding values when needing to adjust them for responsiveness.
* The ability to read & work with SCSS is much easier than CSS. Mainly due to the indentation feature.
* I now understand mixin's, but they were not needed for a project like this. I will definitely be using them in the future, for larger projects for sure.
* Working with media queries. Spent some hours on just writing responsive values.

### HTML 
* Found out about some new elements and element types. Some memorable ones were `<object>` & `<svg>`. 
* Better understanding of parenting elements better for style/design. As well as when dynamically adding elements. Adding too many, or too little are both bad. Too many = too much code, too little = limited elements to work with.
* How useful input fields are. Forms in general are extremely useful, I'll definitely be diving deeper into the usage of forms, especially when using javascript, and possibly even back-end languages when I start learning them shortly.
* 

### SVG's
* How amazing SVG's truly are. I had heard about the customisation and flexibility with SVG's, but only started to get experimental with them on this project. I will be using SVG's for all future projects.
* How to change the properties of SVG files. (It's extremely simple)
* Load times. SVG's are super fast.
* Lossless quality.

### Bootstrap
* I actually hardly used bootstrap during this project, except for one purpose. I used the container classes, just to get a better understanding of the different between each of them. Prior to this project, I didn't entirely understand the difference between each different class. However, I now have a strong understanding, especially after looking through the bootstrap CSS code locally. The fact that I purely used vanilla features for HTML, SCSS/CSS, JS, is what made this such a great learning opportunity. Learning the fundamentals and having an advanced understanding of vanilla features is extremely important before relying on libraries/frameworks.