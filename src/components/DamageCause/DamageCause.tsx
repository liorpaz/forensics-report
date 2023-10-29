import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './DamageCause.css';

export const DamageCause = () => {
  return (
    <div className="DamageCause">
      <table className={'alternating'}>
        <thead>
        <tr>
          <th></th>
          <th><b>נסיבת הפגיעה</b> )אם ידועה סמנו בתיבה)</th>
          <th>קוד ICD</th>
        </tr>
        </thead>
        <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td><input type={'checkbox'} /></td>
            <td>{row[0]}</td>
            <td>{row[1]}</td>
          </tr>
        ))}
        <tr>
          <td><input type={'checkbox'} /></td>
          <td colSpan={2}>אחר (פרטו) <TextareaAutosize style={{width: 220}}/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

const tableData = [
  ['ירי', 'E995.4'],
  ['חדה שאינה ירי (למשל רסיס או דקירה)', 'E995.2'],
  ['קהה (כגון חבלה מגורם זר / ידויי אבנים)', 'E9952', ],
  ['פיצוץ מכל סוג', 'E993.9'],
  ['שריפה/חום משמעותי', 'E900']
]