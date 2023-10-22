import React, {useState} from 'react';
import {Store} from '../../store/store';
import './Controls.css';
import {observer} from 'mobx-react-lite';

export const Controls = observer(() => {
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
});