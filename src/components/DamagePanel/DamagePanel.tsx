import React from 'react';
import './DamagePanel.css';
import { DamagePointDescriptions } from '../DamagePointDescriptions/DamagePointDescriptions';
import { DamagePointsCanvas } from '../DamagePointsCanvas/DamagePointsCanvas';



export const DamagePanel = () => {
  return (
    <div className="damage-panel" dir={'rtl'}>
      <div className='column'>
        <DamagePointDescriptions />
      </div>
      <div className='column'>
        <DamagePointsCanvas />
      </div>
    </div>




  )
}

