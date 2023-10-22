import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {RadioButton} from '../RadioButton/RadioButton';

export const Procedures = () => {
  return (<div className={'questions-section'}>
    <div className={'title'}>4. פרוצדורות</div>
    <div className={'question'}>האם בעת הטיפול בנפגע בוצעו פרוצדורות בשטח?</div>
    <div className={'subQuestion'}>לרבות אינטובציה/קוניטומיה/נקז חזה/נידל/עירוי תוך גרמי/חסם עורקים מסוג CAT או מסוג אחר)</div>
    <div className={'answer'}>
      <table className={'alternating'}>
        <thead>
          <tr>
            <th>מס״ד</th>
            <th>סוג הפרוצדורה</th>
            <th>האם בוצעה בהצלחה</th>
            <th> האם היו סיבוכים כלשהם בעת ביצוע הפרוצדורה?</th>
          </tr>
        </thead>
        <tbody>
          {[1,2,3,4].map((index) => (
          <tr key={index}>
            <td>{index}</td>
            <td><TextareaAutosize /></td>
            <td><RadioButton options={['כן', 'לא']} nm={`procedure${index}`}/></td>
            <td><TextareaAutosize /></td>
          </tr>))}

        </tbody>
      </table>
      <div className={'question'}>
        האם בוצעו פרוצדורות או ניתוחים למיניהם בבית החולים? (כן/לא) <TextareaAutosize />
      </div>
    </div>
  </div>);
}