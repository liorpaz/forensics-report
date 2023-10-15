import React from 'react';
import {injuries} from './questionsData';

export const CauseOfDeath = () => {
  return (<div className={'questions-section'}>
    <div className={'title'}>סיבת המוות</div>
    <div className={'question'}>האם ניתן לשער את סיבת המוות? במידה וכן אנא סמן את סיבה המוות</div>
    <div className={'answer'}>
      <table>
        <tbody>
        <tr>
          <th>איבר</th>
          <th>איבר פגוע</th>
          <th>קוד</th>
        </tr>
        {injuries.map((injury, index) => (
          <tr key={index}>
            <td className='organ-column'><label><input type={'checkbox'} />{injury.organ}</label></td>
            <td>{injury.injury}</td>
            <td className='code-column'>{injury.icdCode}</td>
          </tr>))}
        <tr>
          <td><input type={'text'} placeholder='אחר' /></td>
          <td><input type={'text'} /></td>
          <td><input type={'text'} /></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>);
}