import React, {useState} from 'react';
import './App.css';
import {CanvasSection} from './components/CanvasSection/CanvasSection';
import {DataSection} from './components/DataSection';
import {StoreContext} from './store/StoreContext';
import {Store} from './store/store';

function App() {

  const [store] = useState(new Store());

  const print = ()=>{
    window.print();
  }

  // @ts-ignore
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <CanvasSection/>
        <DataSection/>
        <button onClick={store?.clear}>reset</button>
        <button onClick={print}>print</button>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
