import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

function App(props) {
  return (
    <div>
      {/* <h1>This is a {props.title}</h1> */}
      <Header name="anna" color="purple"/>
    </div>
  )
}

export default App;
