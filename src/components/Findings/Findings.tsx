import React from 'react';
import './Findings.css';

export const Findings = () => {
  return (
    <div className={'Findings'}>
      <table>
        <tbody>
          <tr className={'bg-light-gray'}>
            <td colSpan={2}><b>Non-survivable</b></td>
          </tr>
          <tr>
            <td><input type={'checkbox'}/></td>
            <td>התפרקות פיזית / שריפה טוטאלית</td>
          </tr>
          <tr>
            <td><input type={'checkbox'}/></td>
            <td>פגיעה מוחית הרסנית</td>
          </tr>
          <tr>
            <td><input type={'checkbox'}/></td>
            <td>דימום מסיבי (פגיעה בלב / כל״ד גדולים / כבד)</td>
          </tr>
          <tr>
            <td><input type={'checkbox'}/></td>
            <td>פגיעות עמ״ש גבוהה (מעל c3)</td>
          </tr>
          <tr>
            <td><input type={'checkbox'}/></td>
            <td>פגיעת בטן / אגן נרחבת</td>
          </tr>
          <tr className={'bg-light-gray'}>
            <td colSpan={2}><b>Potentially survivable / Survivable</b></td>
          </tr>
          <tr>
            <td><input type={'checkbox'}/></td>
            <td>דימומים נשלטים</td>
          </tr>
          <tr>
            <td><input type={'checkbox'}/></td>
            <td>פגיעה בנתיב אוויר</td>
          </tr>
          <tr>
            <td><input type={'checkbox'}/></td>
            <td>טמפונדה</td>
          </tr>
          <tr>
            <td><input type={'checkbox'}/></td>
            <td>המו / פניאומוטורקס</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}