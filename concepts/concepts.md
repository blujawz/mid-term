## NOTE: there is no READme or javascript file for this prompt. Just answer each question below in your own words and be as thorough as possible.

1. When would you use a for loop and when would you use a for-in loop? A for loop would be more conmmenly used to loop through an array, or a string. A for in loop would be be used to loop through objects. Reason being, becuase they have key value pairs that may need to be accessed individually, or key values pairs added to the object. For in loop makes this possible.

2. What is an anonymous function? Why would we want to use one? An anonymous function is a callback within a fucntion. Basically a one and done funcion that only exists within its parent function. We would want to do this becuase you don't want to have a bunch functions that you would only be used once clogging up the work space.

3. What is an IIFE, and how is it written? IIFE means that a function is created and called in one step. There is no variable stored to call one. For example our sprint codes linked to our index.html files. All that code is wrapped and once the page is loaded we see it run everything we work on inside that IIFE function.
( function(){...} )();   // define and invoke IIFE
vs
var variable = function(){...}   // define
variable();                      // call (invoke)


4. Why do we write tests for our code? To make sure that your code is running correctly and that you are returning/logging your desired result.

5. What does it mean to clone a repo? Basically to make your own copy of the repo to make changes and add to as you wish. This becomes in a sense your master copy of a repo.

6. What is a higher order function? What is a callback? A higher order function is a function that takes a function as an argument and/or returns a function to be used later. A callback is a perameter which coresponds to the anonymous function.