import React, {useState} from 'react';
import './App.css';
import {DamagePointsCanvas} from './components/DamagePointsCanvas/DamagePointsCanvas';
import {DamagePointDescriptions} from './components/DamagePointDescriptions/DamagePointDescriptions';
import {StoreContext} from './store/StoreContext';
import {Store} from './store/store';
import {Header} from './components/Header/Header';
import {Circumstances} from './components/Cֹircumstances/Circumstances';
import {Questions} from './components/Questions/Questions';

function App() {

  const [store] = useState(new Store());

  // @ts-ignore
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Header/>
        <Circumstances/>
        <DamagePointsCanvas/>
        <DamagePointDescriptions/>
        <Questions/>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
