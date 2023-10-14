import React from 'react';
import {protectionGear} from './questionsData';

export const Armor = () => {
  return (<div className={'questions-section'}>
    <div className={'title'}>מיגון אישי</div>
    <div className={'question'}>האם בעת הפגיעה, החלל השתמש באמצעי מיגון? (לציין האם היה שימוש באחד מאמצעי המיגון הבאים)</div>
    <div className={'answer'}>
      <table>
        <tbody>
        <tr>
          <th>אמצעי מיגון</th>
          <th>האם השתמש באמצעי מיגון?</th>
          <th>האם המיגון נפגע</th>
          <th>תיאור הפגיעה במיגון</th>
        </tr>
        {protectionGear.map((gear, index) => (
          <tr key={gear}>
            <td>{gear}</td>
            <td><input type={'checkbox'} /></td>
            <td><input type={'checkbox'} /></td>
            <td><input type={'text'} /></td>
          </tr>))}
        </tbody>
      </table>
    </div>
  </div>);
}