# branches
```
manage-state - Exercise: Managing state within a component
useEffect - Using the useEffect hook
useReducer - What is useReducer and how it differs from useState
```

# Bookmarks
1. [Working with complex data in useState](#working-with-complex-data-in-usestate)
2. [What is the useEffect hook?](#what-is-the-useeffect-hook)
3. [Data fetching using hooks](#data-fetching-using-hooks)
4. [When to choose useReducer vs useState](#when-to-choose-usereducer-vs-usestate)
5. [Build a Radio Group Component (component composition with children.)](#)


# Working with complex data in useState
In this reading, you will learn how to use objects as state variables when using `useState`. You will also discover the proper way to only update specific properties, such as state objects and why this is done. This will be demonstrated by exploring what happens when changing the string data type to an object.

An example of holding state in an object and updating it based on user-generated events

When you need to hold state in an object and update it, initially, you might try something like this:

```javascript
import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    setGreeting({ greet: "Hello, World-Wide Web" }); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 
```

While this works, it's not the recommended way of working with state objects in React, this is because the state object usually has more than a single property, and it is costly to update the entire object just for the sake of updating only a small part of it.

The correct way to update the state object in React when using useState

he suggested approach for updating the state object in React when using useState is to copy the state object and then update the copy.

This usually involves using the spread operator (`...`).

Keeping this in mind, here's the updated code:
```javascript
import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    const newGreeting = {...greeting}; 
    newGreeting.greet = "Hello, World-Wide Web"; 
    setGreeting(newGreeting); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 
```

Incorrect ways of trying to update the state object

To prove that a copy of the old state object is needed to update state, let’s explore what happens when you try to update the old state object directly:

```javascript
import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    greeting = {greet: "Hello, World-Wide Web}; 
    setGreeting(greeting); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 
```

The above code does not work because it has a TypeError hiding inside of it.

Specifically, the TypeError is: "Assignment to constant variable".

In other words, you cannot reassign a variable declared using const, such as in the case of the useState hook's array destructuring:
```javascript
const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
```

Another approach you might attempt to use to work around the suggested way of updating state when working with a state object might be the following: 

```javascript
import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    greeting.greet = "Hello, World-Wide Web; 
    setGreeting(greeting); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 
```

The above code is problematic because it doesn't throw any errors; however, it also doesn't update the heading, so it is not working correctly. This means that, regardless of how many times you click the "Update greeting" button, it will still be "Hello, World".

To reiterate, the proper way of working with state when it's saved as an object is to:

1. Copy the old state object using the spread (...) operator and save it into a new variable and
2. Pass the new variable to the state-updating function

Updating the state object using arrow functions
Now, let’s use a more complex object to update state.

The state object now has two properties: greet and location.

The intention of this update is to demonstrate what to do when only a specific property of the state object is changing, while keeping the remaining properties unchanged:

```javascript
import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState( 
    { 
        greet: "Hello", 
        place: "World" 
    } 
  ); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    setGreeting(prevState => { 
        return {...prevState, place: "World-Wide Web"} 
    }); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}, {greeting.place}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 
```

The reason this works is because it uses the previous state, which is named prevState, and this is the previous value of the greeting variable. In other words, it makes a copy of the prevState object, and updates only the place property on the copied object. It then returns a brand-new object: 

```javascript
return {...prevState, place: "World-Wide Web"} 
```

Everything is wrapped in curly braces so that this new object is built correctly, and it is returned from the call to setGreeting.

Conclusion

You have learned what happens when changing the string data type to an object, with examples of holding state in an object and updating it based on user-generated events. You also learned about correct and incorrect ways to update the state object in React when using useState, and about updating the state object using arrow functions.

# What is the useEffect hook?

You have been introduced to the primary usage of the useEffect hook, a built-in React hook best suited to perform side effects in your React components.

In this reading you will be introduced to the correct usage of the dependency array and the different useEffect calls that can be used to separate different concerns. You will also learn how you can clean up resources and free up memory in your useEffect logic by returning a function.

The code you place inside the useEffect hook always runs after your component mounts or, in other words, after React has updated the DOM.

In addition, depending on your configuration via the dependencies array, your effects can also run when certain state variables or props change. 

By default, if no second argument is provided to the useEffect function, the effect will run after every render.

```javascript
useEffect(() => { 
   document.title = 'Little Lemon';
 }); 
```

However, that may cause performance issues, especially if your side effects are computationally intensive. A way to instruct React to skip applying an effect is passing an array as a second parameter to useEffect.

In the below example, the integer variable version is passed as the second parameter. That means that the effect will only be re-run if the version number changes between renders.

```javascript
useEffect(() => { 
  document.title = `Little Lemon, v${version}`;
}, [version]); // Only re-run the effect if version changes 
```

If version is 2 and the component re-renders and version still equals 2, React will compare [2] from the previous render and [2] from the next render. Since all items inside the array are the same, React would skip running the effect.

## Use multiple Effects to Separate Concerns

React doesn’t limit you in the number of effects your component can have. In fact, it encourages you to group related logic together in the same effect and break up unrelated logic into different effects.

```javascript
function MenuPage(props) { 
  const [data, setData] = useState([]); 

  useEffect(() => { 
    document.title = 'Little Lemon'; 
  }, []); 

  useEffect(() => { 
    fetch(`https://littlelemon/menu/${id}`) 
      .then(response => response.json()) 
      .then(json => setData(json)); 
  }, [props.id]); 

  // ... 
} 
```

Multiple hooks allow you to split the code based on what it is doing, improving code readability and modularity.

## Effects with Cleanup
Some side effects may need to clean up resources or memory that is not required anymore, avoiding any memory leaks that could slow down your applications.

For example, you may want to set up a subscription to an external data source. In that scenario, it is vital to perform a cleanup after the effect finishes its execution.

How can you achieve that? In line with the previous point of splitting the code based on what it is doing, the useEffect hook has been designed to keep the code for adding and removing a subscription together, since it’s tightly related. 

If your effect returns a function, React will run it when it’s time to clean up resources and free unused memory.

```javascript
function LittleLemonChat(props) { 
  const [status, chatStatus] = useState('offline'); 

  useEffect(() => { 
    LemonChat.subscribeToMessages(props.chatId, () => setStatus('online')) 

    return () => { 
      setStatus('offline'); 
      LemonChat.unsubscribeFromMessages(props.chatId); 
    }; 
  }, []); 

  // ... 
} 
```

Returning a function is optional and it’s the mechanism React provides in case you need to perform additional cleanup in your components.

React will make sure to run the cleanup logic when it’s needed. The execution will always happen when the component unmounts. However, in effects that run after every render and not just once, React will also clean up the effect from the previous render before running the new effect next time.

Conclusion

In this lesson, you learned some practical tips for using the built-in Effect hook. In particular, you were presented with how to use the dependency array properly, how to separate different concerns in different effects, and finally how to clean up unused resources by returning an optional function inside the effect.

# Data fetching using hooks

You learned more about fetching data using hooks and that fetching data from a third-party API is considered a side-effect that requires the use of the useEffect hook to deal with the Fetch API calls in React.

You also explored how the response from fetching third-party data might fail, or be delayed, and that it can be useful to provide different renders, based on whether or not the data has been received.

In this reading, you will explore the different approaches to setting up the useEffect hook when fetching JSON data from the web. You will also learn why it can be useful to provide different renders, based on whether or not the data has been received.

You have previously learned about using the Fetch API to get some JSON data from a third-party website in plain JavaScript.

You'll be glad to learn that data fetching is not that different in React.

There is only one more ingredient that you need to keep in mind when working with React, namely, that fetching data from a third-party API is considered a side-effect.

Being a side-effect, you need to use the useEffect hook to deal with using the Fetch API calls in React.

To understand what that entails, let me illustrate it with a code example where a component is fetching some data from an external API to display information about a cryptocurrency.

```javascript
import { useState, useEffect } from "react"; 
 
export default function App() { 
  const [btcData, setBtcData] = useState({}); 
  useEffect(() => { 
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
      .then((response) => response.json()) 
      .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
      .catch((error) => console.log(error)); 
  }, []); 
 
  return ( 
    <> 
      <h1>Current BTC/USD data</h1> 
      <p>Code: {btcData.code}</p> 
      <p>Symbol: {btcData.symbol}</p> 
      <p>Rate: {btcData.rate}</p> 
      <p>Description: {btcData.description}</p> 
      <p>Rate Float: {btcData.rate_float}</p> 
    </> 
  ); 
} 
```
This example shows that in order to fetch data from a third party API, you need to pass an anonymous function as a call to the useEffect hook. 
```javascript
useEffect( 
    () => { 
        // ... data fetching code goes here 
    }, 
    [] 
); 
```

The code above emphasizes the fact that the useEffect hook takes two arguments, and that the first argument holds the anonymous function, which, inside its body, holds the data fetching code.

Alternatively, you might extract this anonymous function into a separate function expression or function declaration, and then just reference it.

Using the above example, that code could be presented as follows:

```javascript
import { useState, useEffect } from "react"; 
 
export default function App() { 
  const [btcData, setBtcData] = useState({}); 
 
  const fetchData = () => { 
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
      .then((response) => response.json()) 
      .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
      .catch((error) => console.log(error)); 
  }; 
 
  useEffect(() => { 
    fetchData(); 
  }, []); 
 
  return ( 
    <> 
      <h1>Current BTC/USD data</h1> 
      <p>Code: {btcData.code}</p> 
      <p>Symbol: {btcData.symbol}</p> 
      <p>Rate: {btcData.rate}</p> 
      <p>Description: {btcData.description}</p> 
      <p>Rate Float: {btcData.rate_float}</p> 
    </> 
  ); 
} 
```
The code essentially does the same thing, but this second example is cleaner and better organized.

One additional thing that can be discussed here is the return statement of the above example.

Very often, the response from fetching third-party data might fail, or be delayed. That's why it can be useful to provide different renders, based on whether or not the data has been received.

The simplest conditional rendering might involve setting up two renders, based on whether or not the data has been successfully fetched.

For example:
```javascript
 return someStateVariable.length > 0 ? ( 
    <div> 
      <h1>Data returned:</h1> 
      <h2>{someStateVariable.results[0].price}</h2> 
    </div> 
  ) : ( 
    <h1>Data pending...</h1> 
  ); 
```

In this example, I'm conditionally returning an h1 and h2, if the length of the someStateVariable binding's length is longer than 0.

This approach would work if the someStateVariable holds an array.

If the someStateVariable is initialized as an empty array, passed to the call to the useState hook, then it would be possible to update this state variable with an array item that might get returned from a fetch() call to a third-party JSON data provider.

If this works out as described above, the length of the someStateVariable would increase from the starting length of zero - because an empty array's length is zero.

Let's inspect the conditional return again:
```javascript
 return someStateVariable.length > 0 ? ( 
    <div> 
      <h1>Data returned:</h1> 
      <h2>{someStateVariable.results[0].price}</h2> 
    </div> 
  ) : ( 
    <h1>Data pending...</h1> 
  ); 
```

If the data fetching fails, the text of "Data pending..." will render on the screen, since the length of the someStateVariable will remain being zero.

Conclusion

You learned more about fetching data using hooks and that fetching data from a third-party API is considered a side-effect that requires the use of the useEffect hook to deal with the Fetch API calls in React.

You also explored how the response from fetching third-party data might fail, or be delayed, and that it can be useful to provide different renders, based on whether or not the data has been received.

# When to choose useReducer vs useState

The useState hook is best used on less complex data.

While it's possible to use any kind of a data structure when working with useState, it's better to use it with primitive data types, such as strings, numbers, or booleans.

The useReducer hook is best used on more complex data, specifically, arrays or objects.

While this rule is simple enough, there are situations where you might be working with a simple object and still decide to use the useState hook.

Such a decision might stem from the simple fact that working with useState can sometimes feel easier than thinking about how the state is controlled when working with useReducer.

It might help conceptualizing this dilemma as a gradual scale, on the left side of which, there is the useState hook with primitive data types and simple use cases, such as toggling a variable on or off.

At the end of this spectrum, there is the useReducer hook used to control state of large state-holding objects.

There's no clear-cut point on this spectrum, at which point you would decide: "If my state object has three or more properties, I'll use the useReducer hook".

Sometimes such a statement might make sense, and other times it might not.

What's important to remember is to keep your code simple to understand, collaborate on, contribute to, and build from.

One negative characteristic of useState is that it often gets hard to maintain as the state gets more complex.

On the flip side, a negative characteristic of useReducer is that it requires more prep work to begin with. There's more setup involved. However, once this setup is completed, it gets easier to extend the code based on new requirements.

Conclusion

You learned about the decision-making process when choosing between useReducer and useState for working with different types of data.


# Build a Radio Group Component

Here is the completed solution code for the `Radio/index.js` file:

```javascript
import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => { 
 const RadioOptions = React.Children.map(children, (child) => { 
   return React.cloneElement(child, { 
     onChange, 
     checked: child.props.value === selected, 
   }); 
 }); 
 return <div className="RadioGroup">{RadioOptions}</div>; 
}; 
 
export const RadioOption = ({ value, checked, onChange, children }) => { 
 return ( 
   <div className="RadioOption"> 
     <input 
       id={value} 
       type="radio" 
       name={value} 
       value={value} 
       checked={checked} 
       onChange={(e) => { 
         onChange(e.target.value); 
       }} 
     /> 
     <label htmlFor={value}>{children}</label> 
   </div> 
 ); 
}; 
```

Step 1

The API for the RadioGroup component is defined as two props: selected, which is a string that matches one of the RadioOption values and onChange, which is the event that gets called whenever a selection changes, providing the new value as an argument.

```javascript
<RadioGroup onChange={setSelected} selected={selected}> 
 <RadioOption value="social_media">Social Media</RadioOption> 
 <RadioOption value="friends">Friends</RadioOption> 
 <RadioOption value="advertising">Advertising</RadioOption> 
 <RadioOption value="other">Other</RadioOption>
</RadioGroup> 
```

Step 2

The RadioOptions variable should be assigned to the return value of React.Children.map, which will be a new React element. The first argument passed to the map function should be the children prop, and the second is a function that gets invoked in every child contained within the children property. Recall that a children prop is a special prop all React components have and that it presents a special data structure, similar to arrays, where you can perform iterations. However, they are not exactly instances of JavaScript arrays. That’s why to iterate over all siblings you should use the special React.children.map API provided by React.

Inside the map projection function, you should first clone the element using React.cloneElement, passing as first argument the target child element and as a second argument a configuration with all new props. The resulting element will have the original element’s props with the new props merged in.

onChange can be passed to each child (RadioOption) as it is and checked is the property the RadioOption uses to determine if the underlying radio input is selected. Since RadioGroup receives a selected property, which is a string pointing to the value of the option that has been selected, checked will be only true for one of the options at any point in time. This is guaranteed by performing an equality check, comparing the RadioOption value prop with the selected value.

Finally, the RadioGroup component returns the new RadioOptions elements by wrapping them in curly braces.

```javascript
import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => { 
 const RadioOptions = React.Children.map(children, (child) => { 
   return React.cloneElement(child, { 
     onChange, 
     checked: child.props.value === selected, 
   }); 
 }); 
 return <div className="RadioGroup">{RadioOptions}</div>; 
};
```

Step 3

The RadioOption component now receives two new props implicitly, onChange and checked, that RadioGroup is injecting via children manipulation, as seen in the previous section.

The value prop is already provided explicitly inside the App.js component and children represents the label text for the radio input. 

You have to connect the props value, checked and onChange correctly. First, both value and checked props should be passed to the radio input as is. Then, you should use the onChange event from the radio input, retrieve the value property from the event target object and pass it to the onChange prop as the argument as seen below. That completes the implementation of the RadioOption component.

```javascript
export const RadioOption = ({ value, checked, onChange, children }) => { 
 return ( 
   <div className="RadioOption"> 
     <input 
       id={value} 
       type="radio" 
       name={value} 
       value={value} 
       checked={checked} 
       onChange={(e) => { 
         onChange(e.target.value); 
       }} 
     /> 
     <label htmlFor={value}>{children}</label> 
   </div> 
 ); 
}; 
```

Step 4

Once you run the application in the browser, you should see something similar to the screenshot below.

The important thing is that the button should be enabled as soon as a selection is made. Don't worry if nothing happens when you click it, it's intended. In this exercise, the button click event has no action bound to it.

![image](https://github.com/kavinduUdhara/react-coursera/assets/88233364/8de807cb-96ca-4bd9-8a3d-b6a0ca88b43a)
