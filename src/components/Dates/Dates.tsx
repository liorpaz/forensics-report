import React from 'react';

export const Dates = () => {
  return (
    <table style={{margin: 20}}>
      <tbody>
        <tr className={'bg-light-gray'}>
          <td colSpan={3}><b>יש למלא במידה וידוע:</b></td>
        </tr>
        <tr>
          <td>תאריך הפגיעה:<input type={'text'}/></td>
          <td>שעת הפגיעה:<input type={'text'}/></td>
          <td>שעת קביעת המוות:<input type={'text'}/></td>
        </tr>
      </tbody>
    </table>
  )
}