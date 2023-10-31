import React from 'react';
import './CheckList.css';
import {YesNoButton} from '../RadioButton/RadioButton';

export const CheckList = () => {
  return (<div>
    <table>
      <thead>
      <tr className={'bg-light-gray'}>
        <th>צ׳קליסט תחילת עבודה</th>
        <th>האם בוצע?</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>וידוא מח״ל ע״ג שקית החלל</td>
        <td><RadioButton nm={'externalCheck'} options={['כן', 'לא']}/></td>
      </tr>
      <tr>
        <td>ביצוע צילום אצדעה וסרגל עם מח״ל</td>
        <td><RadioButton nm={'externalCheck'} options={['כן', 'לא']}/></td>
      </tr>
      <tr>
        <td>בדיקת התמונה שצולמה</td>
        <td><RadioButton nm={'externalCheck'} options={['כן', 'לא']}/></td>
      </tr>
      <tr>
        <td>וידוא כרטיס זיכרון תקין</td>
        <td><RadioButton nm={'externalCheck'} options={['כן', 'לא']}/></td>
      </tr>
      <tr>
        <td>וידוא התאמה בין מח״ל על הסרגל למח״ל ע״ג האצדעה</td>
        <td><RadioButton nm={'externalCheck'} options={['כן', 'לא']}/></td>
      </tr>
      <tr>
        <td>מח״ל ע״ג אצדעת החלל</td>
        <td><RadioButton nm={'externalCheck'} options={['כן', 'לא']}/></td>
      </tr>
      <tr>
        <td>ודוא יציבות האצדעה</td>
        <td><RadioButton nm={'externalCheck'} options={['כן', 'לא']}/></td>
      </tr>
      <tr>
        <td>השוואת מח״ל באצדעה ע״ג השקית למח״ל ע״ג החלל</td>
        <td><RadioButton nm={'externalCheck'} options={['כן', 'לא']}/></td>
      </tr>
      <tr className={'bg-light-gray'}>
        <td>במקרה של אי-התאמה - עוצרים הכל וקוראים למ״פ זיהוי!</td>
        <td><RadioButton nm={'externalCheck'} options={['כן', 'לא']}/></td>
      </tr>
      </tbody>
    </table>
  </div>);
}
