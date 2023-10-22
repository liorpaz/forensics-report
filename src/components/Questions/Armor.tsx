import React from 'react';
import {protectionGear} from './questionsData';
import TextareaAutosize from 'react-textarea-autosize';
import {RadioButton} from '../RadioButton/RadioButton';

export const Armor = () => {
  return (<div className={'questions-section'}>
    <div className={'title'}>5. מיגון אישי</div>
    <div className={'question'}>האם בעת הפגיעה, החלל השתמש באמצעי מיגון? (לציין האם היה שימוש באחד מאמצעי המיגון הבאים)</div>
    <div className={'answer'}>
      <table className={'alternating'}>
        <tbody>
        <tr>
          <th>אמצעי מיגון</th>
          <th className={'shrink'}>האם המיגון נפגע</th>
          <th>תיאור הפגיעה במיגון</th>
        </tr>
        {protectionGear.map((gear, index) => (
          <tr key={gear}>
            <td className={'shrink'}><input type={'checkbox'}/> {gear}</td>
            <td><RadioButton options={['כן', 'לא']} nm={gear}/></td>
            <td><TextareaAutosize rows={1} /></td>
          </tr>))}
        </tbody>
      </table>
    </div>
  </div>);
}