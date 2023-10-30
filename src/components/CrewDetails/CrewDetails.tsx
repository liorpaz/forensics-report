import React from 'react';
import './CrewDetails.css';
import {Flex} from '../UIComponents/UIComponents';

export const CrewDetails = () => {
  return  (<div className={'CrewDetails'}>
    <Flex className={'above-table'} style={{width: '100%'}} inline={true}>
      <Flex><span>תאריך מילוי:  </span><input type={'text'}/></Flex>
      <Flex><span>שעת מילוי:  </span><input type={'text'}/></Flex>
    </Flex>
    <table>
      <tbody>
        <tr>
          <td colSpan={3} className={'bg-light-gray'} style={{textAlign: 'center'}}>פרטי אנשי הצוות</td>
        </tr>
        <tr>
          <td><b>תפקיד</b></td>
          <td><b>שם מלא</b></td>
          <td><b>מ״א</b></td>
        </tr>
        <tr>
          <td>ע. רופא משפטי</td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>צלם</td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>רופא שיניים</td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>רופא שיניים</td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>רופא שיניים</td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>נציג רבנות</td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>נציג רבנות</td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
      </tbody>
      </table>
  </div>);
}

/*
ע. רופא משפטי
צלם
רופא שיניים
נציג רבנות
 */