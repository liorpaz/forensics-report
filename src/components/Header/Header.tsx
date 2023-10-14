import React, {useState} from 'react';
import {Store} from '../../store/store';
import './Header.css';

export const Header = () => {
  const [store] = useState(new Store());

  const print = ()=>{
    window.print();
  }

  return (
    <div className="Header no-print">
      <div>
        <button onClick={store?.clear}>reset</button>
        <button onClick={print}>print</button>
      </div>
    </div>
  );
}