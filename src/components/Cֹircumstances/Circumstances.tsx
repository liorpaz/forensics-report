import React from 'react';
import './Circumstances.css';

export const Circumstances = () => {
  // todo: connect check state to store.
  return (
    <div className="Circumstances">
      <div dir={'rtl'}>
         2. האם ידועה נסיבת הפגיעה?
      </div>
      <table dir={'rtl'} className={'alternating'}>
        <thead>
          <tr>
            <th></th>
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
    ['פיצוץ מכל סוג', 'E993.9', 'Unspecified explosion'],
    ['תאונת דרכים', 'E829', 'Other road vehicle accident'],
    ['נפילה', 'E888.9', 'Unspecified fall'],
    ['נשיכת חיה', 'E906.5', 'Bite of unspecified animal'],
    ['פגיעת בעל חיים אחרת', 'E906.8', 'Other specified injury caused by animal'],
    ['שריפה/חום משמעותי', 'E900', 'Excessive heat'],
    ['טביעה', 'E910', 'Accidental drowning and submersion'],
    ['התחשמלות', 'E958.4', 'Electricution'],

  ]