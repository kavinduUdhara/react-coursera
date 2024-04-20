# Branches
```
list_in_js - Transforming lists in JavaScript
```

# Bookmarks
1. [Transforming lists in JavaScript](#Transforming-lists-in-JavaScript)

# Transforming lists in JavaScript

list example:
```javascript
const data = [
  {
  id: "1",
  title: "Tiramisu",
  description: "The best tiramisu in town",
  image: "https://picsum.photos/200/300/?random",
  price: "$5.00",
  },
  ...
];
```

first way we can render a list:
```javascript
      {data.map(e =>{
        return(
            <li key={e.id}>{`${e.title} - ${e.description}`}</li>
        )
      })}
```

second way we can reder a list:
```javascript
  const listItems = data.map(e => {
    return(
      <li>{`${e.id}. ${e.title} - ${e.price}`}</li>
    )
  })
  ...
      <ul>
        {listItems}
      </ul>
```

## Create a basic List component

```javascript
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}

```

### Filtering

The first requirement is to display desserts that have less than 500 calories. That means Cheesecake, which has 600 cal, should be omitted. When you need to eliminate elements from your lists based on a certain condition or set of conditions, you need to use the filter() method.

The filter method creates a copy of the array, filtered down to just the elements from the original array that pass the test. In order words, it will return a new list with just the elements that fulfil the condition.

Each dessert from the list has a property called calories, which is an integer representing the number of calories. Therefore, the condition to be implemented should be as follows:

```javascript
const lowCaloriesDesserts = props.data 
 .filter((dessert) => { 
   return dessert.calories < 500; 
 }) 
```

lowCaloriesDessert variable will then hold a list of three desserts, without Cheesecake.

### Sorting

The second requirement you have to implement is sorting the list by calories, from low to high or in ascending order. For that, arrays in JavaScript offer the sort() method, which sorts the elements of an array based on a comparison function provided. The return value from that comparison function determines how the sorting is performed:

<table>
  <tr>
    <th>compareFn(a, b) return value</th>
    <th>sort order</th>
  </tr>
  <tr>
    <td>> 0</td>
    <td>sort a after b</td>
  </tr>
  <tr>
    <td>< 0</td>
    <td>sort a  before b </td>
  </tr>
  <tr>
    <td>=== 0</td>
    <td>keep original order of a and b </td>
  </tr>
</table>


You can chain one operation after another. Recall that filter returns the new array with the filtered down elements, so sort can be chained right after that, as below:

```javascript
const lowCaloriesDesserts = props.data 
 .filter((dessert) => { 
   return dessert.calories < 500; 
 }) 
 .sort((a, b) => { 
   return a.calories - b.calories; 
 }) 
```

The compare function makes sure the sorting occurs in ascending order, according to the table above.

### Mapping

Finally, to apply the desired projection and display the information as requested, you can chain the map operator at the end and return a <li> item with the dessert name and its calories, both separated by a dash character, and the word “cal” at the end.

The final code should look like below:

```javascript
const lowCaloriesDesserts = props.data 
 .filter((dessert) => { 
   return dessert.calories < 500; 
 }) 
 .sort((a, b) => { 
   return a.calories - b.calories; 
 }) 
 .map((dessert) => { 
   return ( 
     <li> 
       {dessert.name} - {dessert.calories} cal 
     </li> 
   ); 
 }); 
```

And the full implementation of the DessertsList component:   

```javascript
const DessertsList = (props) => {
 const lowCaloriesDesserts = props.data
   .filter((dessert) => {
     return dessert.calories < 500;
   })
   .sort((a, b) => { 
     return a.calories - b.calories; 
   })
   .map((dessert) => { 
     return ( 
       <li>
         {dessert.name} - {dessert.calories} cal 
       </li> 
     ); 
   }); 
 return <ul>{lowCaloriesDesserts}</ul>; 

}
export default DessertsList; 
```

Final result

This is what should be displayed in your browser:
![image](https://github.com/kavinduUdhara/react-coursera/assets/88233364/04268570-37f7-4938-ab92-cbbfc1c32e66)


# Controlled components vs. Uncontrolled components
This reading will teach you how to work with uncontrolled inputs in React and the advantages of controlled inputs via state design. You will also learn when to choose controlled or uncontrolled inputs and the features each option supports.

Introduction
In most cases, React recommends using controlled components to implement forms. While this approach aligns with the React declarative model, uncontrolled form fields are still a valid option and have their merit. Let's break them down to see the differences between the two approaches and when you should use each method.

## Uncontrolled Inputs
Uncontrolled inputs are like standard HTML form inputs:
```javascript
const Form = () => { 
 return ( 
   <div> 
     <input type="text" /> 
   </div> 
 ); 
}; 
```

They remember exactly what you typed, being the DOM itself that maintains that internal state. How can you then get their value? The answer is by using a React ref.

In the code below, you can see how a ref is used to access the value of the input whenever the form is submitted.

```javascript
const Form = () => { 
 const inputRef = useRef(null); 

 const handleSubmit = () => { 
   const inputValue = inputRef.current.value; 
   // Do something with the value 
 } 
 return ( 
   <form onSubmit={handleSubmit}> 
     <input ref={inputRef} type="text" /> 
   </form> 
 ); 
}; 
```

In other words, you must pull the value from the field when needed.

Uncontrolled components are the simplest way to implement form inputs. There are certainly valued cases for them, especially when your form is straightforward. Unfortunately, they are not as powerful as their counterpart, so let's look at controlled inputs next.

## Controlled Inputs
Controlled inputs accept their current value as a prop and a callback to change that value. That implies that the value of the input has to live in the React state somewhere. Typically, the component that renders the input (like a form component) saves that in its state:
```javascript
const Form = () => { 
 const [value, setValue] = useState(""); 

 const handleChange = (e) => { 
   setValue(e.target.value) 
 } 

 return ( 
   <form> 
     <input 
       value={value} 
       onChange={handleChange} 
       type="text" 
     /> 
   </form> 
 ); 
}; 
```

Every time you type a new character, the handleChange function is executed. It receives the new value of the input, and then it sets it in the state. In the code example above, the flow would be as follows:

- The input starts out with an empty string: “”

- You type “a” and handleChange gets an “a” attached in the event object, as e.target.value, and subsequently calls setValue with it. The input is then updated to have the value of “a”. 

- You type “b” and handleChange gets called with e.target.value being “ab”.and sets that to the state. That gets set into the state. The input is then re-rendered once more, now with value = "ab" .

This flow pushes the value changes to the form component instead of pulling like the ref example from the uncontrolled version. Therefore, the Form component always has the input's current value without needing to ask for it explicitly.

As a result, your data (React state) and UI (input tags) are always in sync. Another implication is that forms can respond to input changes immediately, for example, by:

- Instant validation per field 

- Disabling the submit button unless all fields have valid data 

- Enforcing a specific input format, like phone or credit card numbers 

Sometimes you will find yourself not needing any of that. In that case uncontrolled could be a more straightforward choice.

### The file input type
There are some specific form inputs that are always uncontrolled, like the file input tag. 

In React, an <input type="file" /> is always an uncontrolled component because its value is read-only and can't be set programmatically. 

The following example illustrates how to create a ref to the DOM node to access any files selected in the form submit handler:

```javascript
const Form = () => { 
 const fileInput = useRef(null); 

 const handleSubmit = (e) => { 
   e.preventDefault(); 
   const files = fileInput.current.files; 
   // Do something with the files here 
 } 

 return ( 
   <form onSubmit={handleSubmit}> 
     <input 
       ref={fileInput} 
       type="file" 
     /> 
   </form> 
 ); 
}; 
```

Conclusion 

Uncontrolled components with refs are fine if your form is incredibly simple regarding UI feedback. However, controlled input fields are the way to go if you need more features in your forms. 

Evaluate your specific situation and pick the option that works best for you.

The below table summarizes the features that each one supports:

<table>
  <tr>
    <th>Feature</th>
    <th>Uncontrolled</th>
    <th>Controlled</th>
  </tr>
  <tr>
    <td>One-time value retrieval (e.g. on submit)</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Validating on submit</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Instant field validation</td>
    <td>No</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Conditionally disabling a submit button</td>
    <td>No</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Enforcing a specific input format</td>
    <td>No</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Several inputs for one piece of data</td>
    <td>No</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Dynamic inputs</td>
    <td>No</td>
    <td>Yes</td>
  </tr>
</table>
