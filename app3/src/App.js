import './App.css';
import Home from './components/Home';
import AnotherPage from './components/AnotherPage';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Homepage</Link><br/>
        <Link to="/another">another</Link>
      </nav>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/another' element={<AnotherPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
