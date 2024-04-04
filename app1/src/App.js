import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Apples from './components/Apples';
import Pears from './components/Pears';
import Bag from './components/Bag';
import Nav from './components/Nav';

const bool = false; 

function Example(props) {
    return (
        <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
    );
};

function App(props) {
  console.log(logo);
    return ( 
        <div className="App"> 
            <Example toggleBoolean={!bool} /> 
        </div> 
    ); 
}

export default App;