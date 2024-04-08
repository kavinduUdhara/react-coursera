# Event handling and embedded expressions

In this reading, you’ll learn the different ways to embed expressions in event handlers in React:

- With an inline anonymous ES5 function 
- With an inline, anonymous ES6 function (an arrow function) 
- Using a separate function declaration 
- Using a separate function expression 

You may find this reading useful as a reference sheet.

For clarity and simplicity: a function will simply console log some words. This will allow you to compare the difference in syntax between these four approaches, while the result of the event handling will always be the same: just some words output to the console.

## Handling events using inline anonymous ES5 functions

This approach allows you to directly pass in an ES5 function declaration as the onClick event-handling attribute’s value:

```javascript
<button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
</button>
```

Although it's possible to write your click handlers using this syntax, it's not a common approach and you will not find such code very often in React apps.

## Handling events using inline anonymous ES6 functions (arrow functions)

With this approach, you can directly pass in an ES6 function declaration as the onClick event-handling attribute’s value:

```javascript
<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>
```

This approach is much more common then the previous one. If you want to keep all your logic inside the JSX expression assigned to the onClick attribute, use this syntax.

## Handling events using separate function declarations

With this approach, you declare a separate ES5 function declaration, and then you reference its name in the event-handling onClick attribute, as follows:

```javascript
function App() {
    function thirdExample() {
        console.log('third example');
    };
    return (
        <div className="thirdExample">
            <button onClick={thirdExample}>
                using a separate function declaration
            </button>
        </div>
    );
};
export default App;
```

This syntax makes sense to be used when your onClick logic is too complex to easily fit into an anonymous function. While this example is not really showing this scenario, imagine a function that has, for example, 20 lines of code, and that needs to be ran when the click event is triggered. This is a perfect use-case for a separate function declaration.

## Handling events using separate function expressions

Tip: A way to determine if a function is defined as an expression or a declaration is: if it does not start the line with the keyword function, then it’s an expression.

In the following example, you’re assigning an anonymous ES6 arrow function to a const variable – hence, this is a function expression.

You’re then using this const variable’s name to handle the onClick event, so this is an example of handling events using a separate function expression.

```javascript
function App() {
    const fourthExample = () => console.log('fourth example');

    return (
        <div className="fourthExample">
            <button onClick={fourthExample}>
                using a separate function expression
            </button>
        </div>
  );
};
export default App;
```

The syntax in this example is very common in React. It uses arrow functions, but also allows us to handle situations where our separate function expression spans multiple lines of code.

In this reading lesson item, you’ve learned the several types of functions you can use to handle events in React. Some of those are more common than others, but now that you know all the different ways of doing this, you can understand other people’s code more easily, as well as choose the syntax that best suits your given use case, such as a specific company coding style guide.

[Redirect to the resourse](https://www.coursera.org/learn/react-basics/supplement/0KEyU/event-handling-and-embedded-expressions)

# Data flow in React
You’ve just learned how the parent-child relationship can be set up so that data flows from parent to child. 

In this reading, you’ll learn how to detail the flow of data from parent to child. You will then learn why code samples need to be clear and concise. Finally, you will explore data flow in greater detail by looking at more examples. This should act as a refresher to knowledge gained in previous courses.

Parent-child data flow
In React, data flow is a one-way street. Sometimes it's said that the data flow is unidirectional. Put differently, the data in React flows from a parent component to a child component. The data flow starts at the root and can flow to multiple levels of nesting, from the root component (parent component) to the child component, then the grandchild component, and further down the hierarchy.

A React app consists of many components, organized as a component tree. The data flows from the root component to all the  components in the tree structure that require this data, using props.

Props are immutable (cannot be changed).

The two main benefits of this unidirectional data flow are that it allows developers to:

1. comprehend the logic of React apps more quickly and 
2. simplify the data flow. 

Here’s a practical example of this:

Imagine that the parent component passes a prop (name) to the child component. The child component then uses this prop to render the name in the UI.

Parent component:
```javascript
function Dog() {
    return (
        <Puppy name="Max" bowlShape="square" bowlStatus="full" />
    );
};
```

Child component:
```javascript
function Puppy(props) {
    return (
        <div>
            {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
        </div>
    );
};
```

Grandchild component:
```javascript
function Bowl(props) {
    return (
        <span>
            {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
        </span>
    );
};
```

Having data move through props in only one direction makes it simpler to understand the logic of how the components interact. If data were moving everywhere, all the time, then it would be much harder to comprehend its logical flow. Any optimization you tried to implement would likely not be as efficient as it could be, especially in modern React.

[Redirect to the resourse](https://www.coursera.org/learn/react-basics/supplement/1kwFf/data-flow-in-react)

# prop data and state data

prop data is data outside the component that recive and work with but cannot mutate.

State data is data inside the component that it controls and can mutate.

![prop and state data](https://github.com/kavinduUdhara/react-coursera/tree/data-and-events/app2/src/components/props-and-state.png)