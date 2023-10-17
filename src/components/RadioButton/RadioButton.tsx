import React from 'react';
import './RadioButton.css';

interface IRadioButtonProps {
  options: string[]
}

export const RadioButton = ({options}: IRadioButtonProps) => {
  return (<div className={'RadioButton'}>
    {options.map(o=>(<label key={o}>
      <input type="radio" name={o} />
      {o}
    </label>))}
  </div>)
}