import './App.css';
import { Children, cloneElement } from 'react';

function Raw({children, spacing, classNme}){
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return(
    <div className={classNme}>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          
        });
      })}
    </div>
  )
}

function App() {
  return (
    <div className='app'>
      <Raw spacing={33} classNme="raw">
        <p>Pizza</p>
        <p>2</p>
        <p>305</p>
        <p>10:38</p>
      </Raw>
    </div>
  );
}

export default App;
