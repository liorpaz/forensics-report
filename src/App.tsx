import React, { useState } from 'react';
import './App.css';
import { StoreContext } from './store/StoreContext';
import { Store } from './store/store';
import { Controls } from './components/Controls/Controls';
import { Questions } from './components/Questions/Questions';
import {GeneralComments} from './components/GeneralComments/GeneralComments';

import {TopSection} from './components/TopSection/TopSection';
import {CrewDetails} from './components/CrewDetails/CrewDetails';
import {Flex} from './components/UIComponents/UIComponents';
import {CheckList} from './components/CheckList/CheckList';
import {Dates} from './components/Dates/Dates';
import {BodyInfo} from './components/BodyInfo/BodyInfo';
import {DamageCause} from './components/DamageCause/DamageCause';
import {Armor} from './components/Armor/Armor';
import {Procedures} from './components/Questions/Procedures';
import {DamagePointsCanvas} from './components/DamagePointsCanvas/DamagePointsCanvas';
import {CauseOfDeath} from './components/Questions/CauseOfDeath';
import {Findings} from './components/Findings/Findings';
import {DamagePointDescriptions} from './components/DamagePointDescriptions/DamagePointDescriptions';

const _store = new Store();
function App() {

  const [store] = useState(_store);

  // @ts-ignore
  return (
    <StoreContext.Provider value={store}>
      <div className="App" >
        <div className='left-panel'>
          <Controls />
          <TopSection showCTSection={true}/>
          <Flex style={{justifyContent: 'space-between'}}>
            <CrewDetails/>
            <CheckList/>
          </Flex>
          <Dates/>
          <BodyInfo/>
          <Flex style={{justifyContent: 'space-between'}}>
            <DamageCause/>
            <Armor/>
          </Flex>
        </div>
        <div className='right-panel'>
          <TopSection showCTSection={false}/>
          <Flex style={{justifyContent: 'space-between'}}>
            <div style={{width: '54%'}}>
              <Procedures/>
              <Flex style={{marginTop: 20}}>
                <CauseOfDeath/>
                <Findings/>
                <div></div>
              </Flex>
            </div>
            <DamagePointsCanvas/>
          </Flex>
          <DamagePointDescriptions/>
        </div>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
