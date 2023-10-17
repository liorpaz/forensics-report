import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export const Examinations = () => {
  return (<div className={'questions-section'}>
    <div className={'title'}>בדיקות שבוצעו לגופת החלל</div>
    <div className={'answer'}>
      <ol>
        <li><label>האם בוצעה בדיקה חיצונית? (כן/לא) <input type={'checkbox'} /> </label></li>
        <li><label>האם בוצעה נתיחה? (כן/לא) <input type={'checkbox'} /> </label></li>
        <li><label>האם בוצע CT? (כן/לא) <input type={'checkbox'} /></label></li>
        <li>האם בוצעו בדיקות נוספות לגופת החלל?<TextareaAutosize /> </li>

      </ol>
    </div>
  </div>);
}