import React from 'react';

export const Procedures = () => {
  return (<div className={'questions-section'}>
    <div className={'title'}>פרוצדורות</div>
    <div className={'question'}>האם בעת הטיפול בנפגע בוצעו פרוצדורות בשטח?</div>
    <div className={'subQuestion'}>לרבות אינטובציה/קוניטומיה/נקז חזה/נידל/עירוי תוך גרמי/חסם עורקים מסוג CAT או מסוג אחר)</div>
    <div className={'answer'}>
      <table>
        <thead>
          <tr>
            <th>מס״ד</th>
            <th>סוג הפרוצדורה</th>
            <th>האם בוצע בהצלחה</th>
            <th> האם היו סיבוכים כלשהם בעת ביצוע הפרוצדורה?</th>
          </tr>
        </thead>
        <tbody>
          {[1,2,3,4].map((index) => (
          <tr key={index}>
            <td>{index}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>))}

        </tbody>
      </table>
      <div className={'question'}>
        האם בוצעו פרוצדורות או ניתוחים למיניהם בבית החולים? (כן/לא) <input type={'text'} placeholder={'אנא פרט'} />
      </div>
    </div>
  </div>);
}