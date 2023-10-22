import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './GeneralDescription.css';

export const GeneralDescription = () => {
  return (<div className={'GeneralDescription'} dir={'rtl'}>
    <div>1. הערות כלליות</div>
    <table>
      <tbody>
        <tr>
          <td style={{width: 100}}>
            תיאור כללי )גיל משוער, צבע עור, לבוש וציוד אישי, מצב גופה, מצב הריקבון)
          </td>
          <td>
            <TextareaAutosize rows={3}/>
          </td>
        </tr>
        <tr>
          <td>
            חפצים אישיים
          </td>
          <td>
            <TextareaAutosize rows={2}/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>);
}