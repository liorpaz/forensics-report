import React from 'react';
import {injuries} from './questionsData';
import './CauseOfDeath.css';

export const CauseOfDeath = () => {
  return (<div className={'CauseOfDeath'}>
      <table className={'alternating'}>
        <tbody>
        <tr>
          <th colSpan={2}>סיבת המוות</th>
        </tr>
        <tr>
          <th>איבר</th>
          <th>קוד</th>
        </tr>
        {injuries.map((injury, index) => (
          <tr key={index}>
            <td><label><input type={'checkbox'} />{injury.organ}</label></td>
            <td className='code-column'>{injury.icdCode}</td>
          </tr>))}
        </tbody>
      </table>
  </div>);
}