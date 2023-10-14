import React from 'react';

export const Examinations = () => {
  return (<div className={'questions-section'}>
    <div className={'title'}>בדיקות שבוצעו לגופת החלל</div>
    <div className={'answer'}>
      <ol>
        <li>האם בוצעה בדיקה חיצונית? (כן/לא) <input type={'checkbox'} /> </li>
        <li>האם בוצעה נתיחה? (כן/לא) <input type={'checkbox'} /> </li>
        <li>האם בוצע CT? (כן/לא) <input type={'checkbox'} /> </li>
        <li>האם בוצעו בדיקות נוספות לגופת החלל?<input type={'text'} /> </li>

      </ol>
    </div>
  </div>);
}