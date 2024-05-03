import React, { Children, cloneElement } from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const num = Children.count(children)
  const RadioOptions = Children.map(children, child => {
    return cloneElement(child,
      {checked: false}
    )
  });

  return (
    <div>
      <h1>{num}</h1>
      <div className="RadioGroup">{RadioOptions}</div>
    </div>
  );
};

const handelChange = (e) => {
  const newVarSelected = e.target.value;
}

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
  return (
    <div className="RadioOption">
      <input id={value} type="radio" name="radio" onChange={handelChange}/>
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
