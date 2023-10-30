import React, {SyntheticEvent, useCallback} from 'react';
import './DamagePointDescriptions.css';
import {useStore} from '../../store/StoreContext';
import {observer} from 'mobx-react-lite';
import {DamagePoint} from '../../types';

export const DamagePointDescriptions = observer(()=> {
  const {damagePoints, numDamagePoints, addDamagePointDescriptionField, deleteDamagePoint} = useStore()

  const onInput = useCallback((e:SyntheticEvent, index:number, fieldName: keyof DamagePoint) => {
    const target = e.target as HTMLInputElement;
    addDamagePointDescriptionField(index, fieldName,  target.innerText);
  }, []);

  return (
    <div className={'DamagePointDescriptions'}>
      <table className={'alternating'} >
        <thead>
          <tr>
            <th>מס״ד</th>
            <th>איבר</th>
            <th className={'shrink'}>צד</th>
            <th className={'shrink'}>ייחוס למבנה אנטומי סמוך</th>
            <th className={'shrink'}>סוג הפגיעה</th>
            <th>תאור הפגיעה</th>
            <th className={'no-print'}>d</th>
          </tr>
        </thead>
        <tbody>
          {damagePoints?.map((dp, index) => {
            return (
              <tr key={index}>
                <td className={'index'}>{index+1}</td>
                <td contentEditable onBlur={e=>onInput(e, index, 'limb')}>{dp.limb}</td>
                <td contentEditable onBlur={e=>onInput(e, index, 'side')}>{dp.side}</td>
                <td contentEditable onBlur={e=>onInput(e, index, 'anatomicRelation')}>{dp.anatomicRelation}</td>
                <td contentEditable onBlur={e=>onInput(e, index, 'damageType')}>{dp.damageType}</td>
                <td contentEditable onBlur={e=>onInput(e, index, 'description')}>{dp.description}</td>
                <td className={'no-print delete'} onClick={()=>deleteDamagePoint(index)}>🗑</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {numDamagePoints === 0 && <div className={'enter-damage-msg'}>נא להזין פגיעות עי לחיצה על הציור</div>}
    </div>
  )
});