import React from 'react';
import './Circumstances.css';

export const Circumstances = () => {
  // todo: connect check state to store.
  return (
    <div className="Circumstances">
      <table dir={'rtl'}>
        <thead>
          <tr>
            <th>נסיבות</th>
            <th>קוד ICD</th>
            <th>הגדרה מהרשימה</th>
          </tr>
        </thead>
        <tbody>
        {tableData.map((row, index) => (
              <tr key={index}>
                <td><input type={'checkbox'} /></td>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

const tableData = [
    ['ירי', 'E995.4','Other and unspecified firearm'],
    ['חדה שאינה ירי (למשל סכין)', 'E995.2', 'Piercing object'],
    ['קהה (כגון חבלה מגורם זר / ידויי אבנים)', 'E9952', 'Struck by blunt object'],
  ]