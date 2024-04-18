
# Branches
```
list_in_js - Transforming lists in JavaScript
```

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
