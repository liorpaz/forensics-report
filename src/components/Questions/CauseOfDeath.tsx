import React from 'react';
import {injuries} from './questionsData';
import TextareaAutosize from 'react-textarea-autosize';

export const CauseOfDeath = () => {
  return (<div className={'questions-section'}>
    <div className={'title'}>6. סיבת המוות</div>
    <div className={'question'}>האם ניתן לשער את סיבת המוות? במידה וכן אנא סמן את סיבה המוות</div>
    <div className={'question'}>במידה ונסיבת המוות אינה כלולה בנסיבות מעלה ניתן לסמן אחר ולהוסיף מלל חופשי אך זאת באישור ובהתיעצות עם גורמי הענף</div>
    <div className={'answer'}>
      <table className={'alternating'}>
        <tbody>
        <tr>
          <th>איבר</th>
          <th>איבר פגוע</th>
          <th>קוד</th>
        </tr>
        {injuries.map((injury, index) => (
          <tr key={index}>
            <td className='shrink'><label><input type={'checkbox'} />{injury.organ}</label></td>
            <td>{injury.injury}</td>
            <td className='code-column'>{injury.icdCode}</td>
          </tr>))}
        <tr>
          <td><input type={'checkbox'} />אחר</td>
          <td><TextareaAutosize /></td>
          <td><TextareaAutosize /></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>);
}