import React from 'react';
import './TopSection.css';
import TextareaAutosize from 'react-textarea-autosize';

export const TopSection = () => {
  return (<div className={'TopSection'}>
    <div className={'top'}>
      <div className={'logo'}/>
      <div className={'title'}>
        סקר חללים בחירום
      </div>
      <div>
-סודי רפואי לאחר מילוי-
      </div>
      <div className={'sticker'}>
        מדבקת חלל
      </div>
    </div>
    <table dir={'rtl'}>
      <tbody>
        <tr className={'no-border'}>
          <td className={'form-filler'} colSpan={2}>פרטי ממלא הטופס</td>
          <td></td>
          <td></td>
          <td></td>
          <td width={350}></td>
        </tr>
        <tr>
          <td className={'bg-light-gray'}><TextareaAutosize/></td>
          <td className={'bg-light-gray'}><TextareaAutosize/></td>
          <td><TextareaAutosize/></td>
          <td><TextareaAutosize/></td>
          <td><TextareaAutosize/></td>
          <td><TextareaAutosize/></td>
        </tr>
        <tr>
          <td className={'bg-light-gray'}>שם</td>
          <td className={'bg-light-gray'}>מ.א</td>
          <td>תאריך מילוי הטופס</td>
          <td>תאריך הפגיעה</td>
          <td>שעת הפגיעה</td>
          <td>
            <div>שעת קביעת המוות</div>
            <div>האם ישנה הערכה למשך הזמן בו החלל ללא סימני חיים</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>);

}