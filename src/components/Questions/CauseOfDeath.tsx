import React from 'react';
import {injuries} from './questionsData';
import TextareaAutosize from 'react-textarea-autosize';
import './CauseOfDeath.css';

export const CauseOfDeath = () => {
  return (<div className={'CauseOfDeath'}>
      <table className={'alternating'}>
        <tbody>
        <tr>
          <th colSpan={3}>סיבת המוות</th>
        </tr>
        <tr>
          <th>איבר</th>
          <th>איבר פגוע</th>
          <th>קוד</th>
        </tr>
        {injuries.map((injury, index) => (
          <tr key={index}>
            <td className='shrink'><label><input type={'checkbox'} />{injury.organ}</label></td>
            <td>{injury.injury}</td>
            <td className='code-column'>{injury.icdCode}</td>
          </tr>))}
        <tr>
          <td><input type={'checkbox'} />אחר</td>
          <td><TextareaAutosize /></td>
          <td><TextareaAutosize /></td>
        </tr>
        </tbody>
      </table>
  </div>);
}