import React from 'react';
import './RadioButton.css';

interface IRadioButtonProps {
  options: string[] 
  key: string
}

export const RadioButton = ({options,key}: IRadioButtonProps) => {
  return (<div className={'RadioButton'}>
    {options.map(o=>(<label  >
      <input type="radio" name={key} />
      {o}
    </label>))}
  </div>)
}