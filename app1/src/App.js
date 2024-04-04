// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Apples from './components/Apples';
import Pears from './components/Pears';
import Bag from './components/Bag';
import Nav from './components/Nav';
import run from './run.png';

function logo(props){
  const userPic = <img src={run} width={50}/>;
  return userPic;
}

function App(props) {
  console.log(logo);
  return (
    <div>
      <logo />
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
