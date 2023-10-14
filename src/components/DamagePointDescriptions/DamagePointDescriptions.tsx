import React, {SyntheticEvent, useCallback} from 'react';
import './DamagePointDescriptions.css';
import {useStore} from '../../store/StoreContext';
import {observer} from 'mobx-react-lite';

export const DamagePointDescriptions = observer(()=> {
  const {damagePoints, addDamagePointDescription, deleteDamagePoint} = useStore()

  const onInput = useCallback((e:SyntheticEvent, index:number) => {
    const target = e.target as HTMLInputElement;
    addDamagePointDescription(index, target.innerText);
  }, []);

  return (
    <div className={'DamagePointDescriptions'}>
      <table >
        <thead>
          <tr>
            <th ></th>
            <th>תאור</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {damagePoints?.map((dp, index) => {
            return (
              <tr key={index}>
                <td className={'index'}>{index+1}</td>
                <td contentEditable onBlur={e=>onInput(e, index)}>{dp.description}</td>
                <td className={'delete'} onClick={()=>deleteDamagePoint(index)}>🗑</td>
              </tr>
            );
          }
          )}
        </tbody>
      </table>

    </div>
  )
});