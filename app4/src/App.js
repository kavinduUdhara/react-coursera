import logo from './logo.svg';
import './App.css';

const data = [
  {
  id: "1",
  title: "Tiramisu",
  description: "The best tiramisu in town",
  image: "https://picsum.photos/200/300/?random",
  price: "$5.00",
  },
  {
  id: "2",
  title: "Lemon Ice Cream",
  description: "Mind blowing taste",
  image: "https://picsum.photos/200/300/?random",
  price: "$4.50",
  },
  {
  id: "3",
  title: "Chocolate mousse",
  description: "Unexplored flavour",
  image: "https://picsum.photos/200/300/7random",
  price: "$6.00",
  },
];

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

const topDessert = data.map(dessert =>{
  return{
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price,
  }
})

function App() {
  const listItems = data.map(e => {
    return(
      <li>{`${e.id}. ${e.title} - ${e.price}`}</li>
    )
  })

  const dataList = desserts
  .filter((e) =>{
    return e.calories < 500;
  })
  console.log(dataList);
  return (
    <div>
      <h1>Basic List component</h1>
      <ul>
      {data.map(e =>{
        return(
            <li key={e.id}>{`${e.title} - ${e.description}`}</li>
        )
      })}
      </ul>
      {/*following is same as above but with extra function */}
      <ul>
        {listItems}
      </ul>
      <ul>
        {/*sorted list */}
        {dataList.map(e =>{
          return(<li>{e.name} is created at {e.createdAt} with {e.calories} calories!</li>)
        })}
        <dd>This is a sorted list</dd>
        {desserts
          .filter(e=>{
            return e.calories < 500
          })
          .sort((a,b) =>{
            return a.calories - b.calories
          })
          .map(e => {
            return(
              <li>{e.name} is created at {e.createdAt} with {e.calories} calories!</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
