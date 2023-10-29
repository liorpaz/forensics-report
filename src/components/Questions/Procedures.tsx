import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {YesNoButton} from '../RadioButton/RadioButton';

export const Procedures = () => {
  return (<div className={'Procedures'}>
      <table className={'alternating'}>
        <tbody>
          <tr className={'bg-light-gray'}>
            <td colSpan={2}>האם בוצעו פרוצדורות?</td>
            <td><YesNoButton nm={'proceduresMade'}/></td>
          </tr>
          <tr>
            <th>מס״ד</th>
            <th>סוג הפרוצדורה</th>
            <th>בשטח / בבי״ח?</th>
          </tr>
          {[1,2,3,4].map((index) => (
          <tr key={index}>
            <td>{index}</td>
            <td><TextareaAutosize /></td>
            <td><TextareaAutosize /></td>
          </tr>))}

        </tbody>
      </table>
  </div>);
}