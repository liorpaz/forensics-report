import React from 'react';
import './Findings.css';

export const Findings = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr className={'bg-light-gray'}>
            <td colSpan={2}>Non-survivable</td></tr>
          <tr>
            <td><input type={'checkbox'}/></td>
            <td >Non-survivable</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}