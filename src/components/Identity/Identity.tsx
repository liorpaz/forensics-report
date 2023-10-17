import React from 'react';


export const Identity = () => {
  return (
    <div className="Identity" dir={'rtl'}>
        <table>
            <tbody>
            <tr>
                <th colSpan={2} className='accent'>פרטי ממלא הטופס</th>
                <th></th>        
                </tr>
                <tr>
                <th className='accent'>שם</th>
                <th className='accent'>מ.א.</th>
                <th>תאריך מילוי</th>    
                <th>תאריך הפגיעה</th>    
                <th>שעת קביעת המוות?<br/>האם ישנה הערכה למשך הזמן בו החלל ללא סימני חיים</th>      
                </tr>
               <tr>
                <td className='accent'><input type='text'></input></td>
                <td className='accent'><input type='text'></input></td>
                <td><input type='text'></input></td>
                <td><input type='text'></input></td>
                <td><input type='text'></input></td>
               </tr>
            </tbody>
        </table>
    </div>




  )
}


