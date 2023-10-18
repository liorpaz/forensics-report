import React, { useState } from 'react';
import './App.css';
import { StoreContext } from './store/StoreContext';
import { Store } from './store/store';
import { Controls } from './components/Controls/Controls';
import { Questions } from './components/Questions/Questions';
import { DamagePanel } from './components/DamagePanel/DamagePanel';
import { Circumstances } from './components/Cֹircumstances/Circumstances';
import { TopSection } from './components/TopSection/TopSection';

const _store = new Store();
function App() {

  const [store] = useState(_store);

  // @ts-ignore
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <div className='left-panel'>
          <Controls />
          <TopSection/>
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
