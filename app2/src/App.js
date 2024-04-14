import React, {useState} from 'react';
import './App.css';
import MealsProvider from './providers/MealsProvider';
import Counter from './components/counter';
import MealsList from './components/MealsList';

//const [state, setState] = useState(initialState);
//const [showMenu, setShowMenu] = useState(false);


function App() {

  return (
    <div>
      <MealsProvider>
        <Counter/>
        <MealsList/>
      </MealsProvider>
    </div>
  );
}

export default App;
