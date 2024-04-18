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
