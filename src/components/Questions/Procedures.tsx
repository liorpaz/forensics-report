import React from 'react';

export const Procedures = () => {
  return (<div className={'questions-section'}>
    <div className={'title'}>פרוצדורות</div>
    <div className={'question'}>האם בעת הטיפול בנפגע בוצעו פרוצדורות בשטח?</div>
    <div className={'subQuestion'}>לרבות אינטובציה/קוניטומיה/נקז חזה/נידל/עירוי תוך גרמי/חסם עורקים מסוג CAT או מסוג אחר)</div>
    <div className={'answer'}>
      <ol>
        <li>סוג הפרוצדורה <input type={'text'} /> </li>
        <li>האם הפרוצדורות האלה בוצעו בהצלחה? (כן/לא) <input type={'text'} placeholder={'אנא פרט'} /> </li>
        <li> האם היו סיבוכים כלשהם בעת ביצוע הפרוצדורה? (כן/לא) <input type={'text'} placeholder={'אנא פרט'} />  </li>
      </ol>
      <div className={'question'}>
        האם בוצעו פרוצדורות או ניתוחים למיניהם בבית החולים? (כן/לא) <input type={'text'} placeholder={'אנא פרט'} />
      </div>
    </div>
  </div>);
}