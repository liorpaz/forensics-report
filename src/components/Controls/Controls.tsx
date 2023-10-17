import React, {useState} from 'react';
import {Store} from '../../store/store';
import './Controls.css';

export const Controls = () => {
  const [store] = useState(new Store());

  const print = ()=>{
    window.print();
  }

  return (
    <div className="Controls no-print">
      <div>
        <button onClick={store?.clear}>reset</button>
        <button onClick={print}>print</button>
      </div>
    </div>
  );
}