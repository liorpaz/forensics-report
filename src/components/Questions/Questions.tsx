import React from 'react';
import './Questions.css';

const injuries = [
  { organ: 'כללי פגיעות מרובות', injury: 'contusion of multuiple sites, not elsware classified', icdCode: '924.8' },
  { organ: 'ראש', injury: 'other and unspecified open wound of head, complicated', icdCode: '873.9' },
  { organ: 'צוואר', injury: 'Open wound of other and unspecificd pats of neck, complicated', icdCode: '874.9' },
  { organ: 'עמוד שדרה וחוט שדרה', injury: 'Open fracture of unspecified vertebral column with spinal cord injury', icdCode: '806.9' },
  { organ: 'לב', injury: 'Heart injury with mention of open wound into thorax', icdCode: '861.1' },
  { organ: 'צלעות', injury: 'Open fracture of rib(s) unspecified', icdCode: '807.1' },
  { organ: 'סטרנם', injury: 'Open fracture of sternum', icdCode: '807.3' },
  { organ: 'חלל בטן ומערכת העיכול', injury: 'Injury to other and unspecificed gastrointestinal sites with open wound into cavity', icdCode: '863.9' },
  { organ: 'אגן', injury: 'Open unspecified fracture of pelvis', icdCode: '808.9' },
  { organ: 'גפיים עליונות', injury: 'Multiple and unspecified open wound of upper limb, complicated', icdCode: '884.1' },
  { organ: 'גפיים תחתונות', injury: 'Multiple and unspecified open wound of lower limb, complicated', icdCode: '894.1' },
  { organ: 'גניטליה', injury: 'Open wound of other and unspecified parts of genital organs external, complicated', icdCode: '878.9' },
  { organ: 'עכוז', injury: 'Open wound of buttock, complicated', icdCode: '877.1' },
  { organ: 'גב', injury: 'Open wound of back, complicated', icdCode: '876.1' },
  { organ: 'בית חזה', injury: 'Open wound of chest (wall), complicated', icdCode: '875.1' },
]

const protectionGear = [
  "קסדה (כולל ג׳נטקס)",
  "מיגון קרמי",
  "קסדה מיגון שחפ״צ",
  "משקפי מגן מכל סוג",
  "כפפות מכל סוג",
  "מסיכת פנים",
  "ברכיות",
]


export const Questions = () => {
  return (
    <div className="Questions" dir={'rtl'}>
      <div className={'questions-section'}>
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
      </div>
      <div className={'questions-section'}>
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
              <tr>
                <td>{gear}</td>
                <td><input type={'checkbox'} /></td>
                <td><input type={'checkbox'} /></td>
                <td><input type={'text'} style={{width:"100%"}}/></td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={'questions-section'}>
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
                  <td><label style={{width:"100%"}}><input type={'checkbox'} />{injury.organ}</label></td>
                  <td>{injury.injury}</td>
                  <td>{injury.icdCode}</td>
                </tr>))}
              <tr>
                <td><label><input type={'text'} placeholder='אחר'  style={{width:"100%"}} /></label></td>
                <td><input type={'text'} style={{width:"100%"}} /></td>
                <td><input type={'text'} style={{width:"100%"}}/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div className={'questions-section'}>
        <div className={'title'}>בדיקות שבוצעו לגופת החלל</div>
        <div className={'answer'}>
          <ol>
            <li>האם בוצעה בדיקה חיצונית? (כן/לא) <input type={'checkbox'} /> </li>
            <li>האם בוצעה נתיחה? (כן/לא) <input type={'checkbox'} /> </li>
            <li>האם בוצע CT? (כן/לא) <input type={'checkbox'} /> </li>
            <li>האם בוצעו בדיקות נוספות לגופת החלל?<input type={'text'} /> </li>
            </ol>
        </div>
      </div>

      <div className={'questions-section'}>
        <div className={'title'}></div>
        <div className={'answer'}>
        <table>
            <tbody>
              <tr>
                <th>Potentially Survivable/Survivable</th>
                <th>Non-survivable</th>
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