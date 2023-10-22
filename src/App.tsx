import React, { useState } from 'react';
import './App.css';
import { StoreContext } from './store/StoreContext';
import { Store } from './store/store';
import { Controls } from './components/Controls/Controls';
import { Questions } from './components/Questions/Questions';
import { DamagePanel } from './components/DamagePanel/DamagePanel';
import { Circumstances } from './components/Cֹircumstances/Circumstances';
import { TopSection } from './components/TopSection/TopSection';
import {GeneralComments} from './components/GeneralComments/GeneralComments';
import {GeneralDescription} from './components/GeneralDescription/GeneralDescription';

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
          <GeneralDescription/>
          <Circumstances />
          <DamagePanel/>
        </div>
        <div className='right-panel'>
          <Questions />
          <GeneralComments/>
        </div>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
