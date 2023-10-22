import React from 'react';
import './DamagePanel.css';
import { DamagePointDescriptions } from '../DamagePointDescriptions/DamagePointDescriptions';
import { DamagePointsCanvas } from '../DamagePointsCanvas/DamagePointsCanvas';



export const DamagePanel = () => {
  return (
    <div dir={'rtl'}>
      <div>
        3. אזורי גוף פגועים
      </div>
      <div className="damage-panel">
        <div className='column'>
          <DamagePointDescriptions />
        </div>
        <div className='column'>
          <DamagePointsCanvas />
        </div>
      </div>
    </div>
  )
}

