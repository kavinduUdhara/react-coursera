import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Apples from './components/Apples';
import Pears from './components/Pears';
import Bag from './components/Bag';
import Nav from './components/Nav';

const bool = false;
const str1 = "just";

function Example(props) {
  return (
      <div>
          <h2>
              The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
          </h2>
          <p>The value of the math prop is: <em>{props.math}</em></p>
          <p>The value of the str prop is: <em>{props.str}</em></p>
      </div>
  );
};

function App(props) {
  console.log(logo);
    return ( 
      <div className="App">
        <Example
            toggleBoolean={!bool}
            math={(10 + 20) / 3}
            str={str1 + ' another ' + 'string'}
        />
      </div>
    ); 
}

export default App;