import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {RadioButton} from '../RadioButton/RadioButton';

export const Examinations = () => {
  return (<div className={'questions-section'}>
    <div className={'title'}>בדיקות שבוצעו לגופת החלל</div>
    <div className={'answer'}>
      <table>
        <tbody>
          <tr>
            <td>האם בוצעה בדיקה חיצונית?</td>
            <td><RadioButton nm={'externalCheck'} options={['כן', 'לא']} /></td>
          </tr>
          <tr>
            <td>האם בוצעה נתיחה? </td>
            <td><RadioButton nm={'postmortem'} options={['כן', 'לא']} /></td>
          </tr>
          <tr>
            <td>האם בוצע CT?</td>
            <td><RadioButton nm={'ct'} options={['כן', 'לא']} /></td>
          </tr>
          <tr>
            <td>האם בוצעו בדיקות נוספות לגופת החלל?</td>
            <td><TextareaAutosize /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>);
}