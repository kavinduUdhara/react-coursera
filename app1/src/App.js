import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Apples from './components/Apples';
import Pears from './components/Pears';
import Bag from './components/Bag';
import Nav from './components/Nav';


function App(props) {
  return (
    <div>
      {/* <h1>This is a {props.title}</h1> */}
      <Header name="anna" color="purple"/>
      <Bag>
        <Apples color="red" number="5"/>
        <Pears friend="Joe"/>
      </Bag>
      <Bag children={<Apples color="red" number="5"/>}/>
      <Nav first="Hello"/>
    </div>
  )
}

export default App;
