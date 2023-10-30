import React from 'react';
import {RadioButton, YesNoButton} from '../RadioButton/RadioButton';
import TextareaAutosize from 'react-textarea-autosize';
import './BodyInfo.css';

export const BodyInfo = () => {
  return (
    <div className={'BodyInfo'}>
      <table>
        <tbody>
        <tr>
          <td><b>גופת</b></td>
          <td>
            <span><input type={'checkbox'}/>גבר | </span>
            <span><input type={'checkbox'}/>אשה | </span>
            <span><input type={'checkbox'}/>לא ניתן להעריך </span>
          </td>
        </tr>
        <tr>
          <td><b>מצב כללי</b></td>
          <td>
            <span><input type={'checkbox'}/>גופה נפוחה | </span>
            <span><input type={'checkbox'}/>מפרישה מפתחי גוף טבעיים | </span>
            <span><input type={'checkbox'}/>מפרישה מפצעים </span>
          </td>
        </tr>
        <tr>
          <td><b>נוכחות רימות</b></td>
          <td>
            <span><YesNoButton nm={'rimot'}/> | אם כן, גודל הרימה הגדולה הנו : <input type={'number'}/> מ״מ </span>
          </td>
        </tr>
        <tr>
          <td><b>שלמות הגופה</b><br/>
          האם קיים</td>
          <td>
            <table>
              <tbody>
                <tr className={'bg-light-gray'}>
                  <td>ראש</td>
                  <td>צוואר</td>
                  <td>גו (torso)</td>
                  <td>יד ימין</td>
                  <td>יד שמאל</td>
                  <td>רגל ימין</td>
                  <td>רגל שמאל</td>
                </tr>
                <tr>
                  <td><YesNoButton nm={'head'}/></td>
                  <td><YesNoButton nm={'neck'}/></td>
                  <td><YesNoButton nm={'torso'}/></td>
                  <td><YesNoButton nm={'rightHand'}/></td>
                  <td><YesNoButton nm={'leftHand'}/></td>
                  <td><YesNoButton nm={'rightLeg'}/></td>
                  <td><YesNoButton nm={'leftLeg'}/></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td><b>טווח גילאים משוער</b></td>
          <td>בין <input type={'number'}/> ל <input type={'number'}/> שנים</td>
        </tr>
        <tr>
          <td><b>הערכת גובה</b></td>
          <td><input type={'number'}/> סמטרים</td>
        </tr>
        <tr>
          <td><b>מבנה גוף</b></td>
          <td>
            <span><input type={'checkbox'}/>תקין | </span>
            <span><input type={'checkbox'}/>קבקטי | </span>
            <span><input type={'checkbox'}/>רזה | </span>
            <span><input type={'checkbox'}/>שמן  </span>
          </td>
        </tr>
        <tr>
          <td><b>כתמי מוות</b></td>
          <td>
            <RadioButton options={['קיימים', 'חסרים']} nm={'spots'}/> |
            <RadioButton options={['קבועים', 'נעלמים בלחיצה']} nm={'spots'}/> |
            <span> פיזור <input type={'text'}/>  </span>
          </td>
        </tr>
        <tr>
          <td><b>צמידת המוות</b></td>
          <td>
            <table>
              <tbody>
              <tr className={'bg-light-gray'}>
                <td>שרירי הלסת</td>
                <td>שרירי הידיים</td>
                <td>שרירי הרגליים</td>
              </tr>
              <tr>
                <td><RadioButton options={['מפותחת', 'חסרה']} nm={'jaw'}/></td>
                <td><RadioButton options={['מפותחת', 'חסרה']} nm={'hands'}/></td>
                <td><RadioButton options={['מפותחת', 'חסרה']} nm={'legs'}/></td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td className={'shrink'}><b>פריטי לבוש והנעלה</b><br/>
            כולל ציון כל פרט ייחודי</td>
          <td><TextareaAutosize/></td>
        </tr>
        <tr>
          <td><b>פרטים יחודיים</b><br/>
            כמו קעקועים וצלקות</td>
          <td><TextareaAutosize/></td>
        </tr>
        <tr>
          <td><b>חפצים שנמצאו</b><br/>
            ארנק, טלפון, דיסקית, תעודות, תכשיטים, שעון, פירסינג)</td>
          <td><TextareaAutosize/></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}