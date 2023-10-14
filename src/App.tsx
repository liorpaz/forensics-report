import React, { useState } from 'react';
import './App.css';
import { DamagePointsCanvas } from './components/DamagePointsCanvas/DamagePointsCanvas';
import { DamagePointDescriptions } from './components/DamagePointDescriptions/DamagePointDescriptions';
import { StoreContext } from './store/StoreContext';
import { Store } from './store/store';
import { Header } from './components/Header/Header';
import { Circumstances } from './components/circumstances/Circumstances';
import { Questions } from './components/Questions/Questions';
import { DamagePanel } from './components/DamagePointDescriptions/DamagePanel';

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
