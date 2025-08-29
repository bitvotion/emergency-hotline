1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: getElementById, getElementsByClassName, and querySelector / querySelectorAll these are the DOM method of javascript

getElementById is used to select or access the element of html by ID. It returns the element object

getElementsByClassName is used to select or access the all elements with the class name and it return HTML Collection.

querySelector and querySelectorAll both are css selecetor queryselector select the first element that matches and uerySelectorAll select all matched elements


2. How do you create and insert a new element into the DOM?

ans: Create and insert a new element into the DOM needs only 3 steps. 
    1. create element using document.createElement()
    2. add content using .innerText, .innerHTML, setAttribute() etc. 
    3. insert the content or attributes using appendChiled(), .prepend(), .insertBefor, etc.


3. What is Event Bubbling and how does it work?

ans:   When an event happens on an element , it first runs the event on that element and then it bubbles up through its parent elements, one by one until it reaches the top (document) it calls Event Bubbling

4. What is Event Delegation in JavaScript? Why is it useful?

ans: 