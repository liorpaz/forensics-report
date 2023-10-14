import React, { useState } from 'react';
import './App.css';
import { StoreContext } from './store/StoreContext';
import { Store } from './store/store';
import { Header } from './components/Header/Header';
import { Questions } from './components/Questions/Questions';
import { DamagePanel } from './components/DamagePointDescriptions/DamagePanel';
import { Circumstances } from './components/Cֹircumstances/Circumstances';

function App() {

  const [store] = useState(new Store());

  // @ts-ignore
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <div className='left-panel'>
          <Header />
          <Circumstances />
          <DamagePanel/>
        </div>
        <div className='right-panel'>
          <Questions />
        </div>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
