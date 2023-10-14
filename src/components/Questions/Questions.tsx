import React from 'react';
import './Questions.css';

export const Questions = () => {
  return (
    <div className="Questions" dir={'rtl'}>
      <div className={'questions-section'}>
        <div className={'title'}>פרוצדורות</div>
        <div className={'question'}>האם בעת הטיפול בנפגע בוצעו פרוצדורות בשטח?</div>
        <div className={'subQuestion'}>לרבות אינטובציה/קוניטומיה/נקז חזה/נידל/עירוי תוך גרמי/חסם עורקים מסוג CAT או מסוג אחר)</div>
        <div className={'answer'}>
          <ol>
            <li>סוג הפרוצדורה <input type={'text'}/> </li>
            <li>האם הפרוצדורות האלה בוצעו בהצלחה? (כן/לא) <input type={'text'} placeholder={'אנא פרט'}/> </li>
            <li> האם היו סיבוכים כלשהם בעת ביצוע הפרוצדורה? (כן/לא) <input type={'text'} placeholder={'אנא פרט'}/>  </li>
          </ol>
          <div className={'question'}>
              האם בוצעו פרוצדורות או ניתוחים למיניהם בבית החולים? (כן/לא) <input type={'text'} placeholder={'אנא פרט'}/>
          </div>
        </div>
      </div>
      <div className={'questions-section'}>
        <div className={'title'}>מיגון אישי</div>
        <div className={'question'}>האם בעת הפגיעה, החלל השתמש באמצעי מיגון? (לציין האם היה שימוש באחד מאמצעי המיגון הבאים)</div>
        <div className={'answer'}>
          <table>
            <tbody>
              <tr>
                <td>קסדה (כולל ג׳נטקס)</td>
                <td><input type={'checkbox'}/></td>
              </tr>
              <tr>
                <td>מיגון קרמי</td>
                <td><input type={'checkbox'}/></td>
              </tr>
              <tr>
                <td>קסדה מיגון שחפ״צ</td>
                <td><input type={'checkbox'}/></td>
              </tr>
              <tr>
                <td>משקפי מגן מכל סוג</td>
                <td><input type={'checkbox'}/></td>
              </tr>
              <tr>
                <td>כפפות מכל סוג</td>
                <td><input type={'checkbox'}/></td>
              </tr>
              <tr>
                <td>מסיכת פנים</td>
                <td><input type={'checkbox'}/></td>
              </tr>
              <tr>
                <td>ברכיות</td>
                <td><input type={'checkbox'}/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


const questionsData = [
  ['פרוצדורות', 'האם בעת הטיפול בנפגע בוצעו פרוצדורות בשטח?', 'לרבות אינטובציה/קוניטומיה/נקז חזה/נידל/עירוי תוך גרמי/חסם עורקים מסוג CAT או מסוג אחר)']
]