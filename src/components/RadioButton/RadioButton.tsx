import React from 'react';
import './RadioButton.css';

interface IRadioButtonProps {
  options: string[] 
  nm: string
}

export const RadioButton = ({options,nm}: IRadioButtonProps) => {
  return (<div className={'RadioButton'}>
    {options.map(o=>(<label>
      <input type="radio" name={nm} ></input>
      {o}
    </label>))}
  </div>)
}