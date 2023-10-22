import React, {SyntheticEvent, useCallback} from 'react';
import './TopSection.css';
import TextareaAutosize from 'react-textarea-autosize';
import {useStore} from '../../store/StoreContext';
import {observer} from 'mobx-react-lite';

export const TopSection = observer(() => {
  const {info, setInfo} = useStore();
  const onChange = useCallback((e:SyntheticEvent, field:string) => {
    const target = e.target as HTMLInputElement;
    setInfo(field, target.value);
  }, []);

  return (<div className={'TopSection'}>
    <div className={'top'}>
      <div className={'logo'}/>
      <div className={'title'}>
        סקר חללים בחירום
      </div>
      <div>
-סודי רפואי לאחר מילוי-
      </div>
      <div className={'sticker'}>
        מדבקת חלל
      </div>
    </div>
    <table dir={'rtl'}>
      <tbody>
        <tr className={'no-border'}>
          <td className={'form-filler'} colSpan={2}>פרטי ממלא הטופס</td>
          <td></td>
          <td></td>
          <td></td>
          <td width={350}></td>
        </tr>
        <tr>
          <td className={'bg-light-gray'}><TextareaAutosize
            value={info.reporterName}
            onChange={(e)=>onChange(e, 'reporterName')}/></td>
          <td className={'bg-light-gray'}><TextareaAutosize
            value={info.reporterID}
            onChange={(e)=>onChange(e, 'reporterID')}/></td>
          <td><TextareaAutosize  value={info.formDate}
                                 onChange={(e)=>onChange(e, 'formDate')}/></td>
          <td><TextareaAutosize  value={info.dateOfInjury}
            onChange={(e)=>onChange(e, 'dateOfInjury')}/></td>
          <td><TextareaAutosize value={info.timeOfInjury}
            onChange={(e)=>onChange(e, 'timeOfInjury')}/></td>
          <td><TextareaAutosize value={info.timeOfDeclaration}
            onChange={(e)=>onChange(e, 'timeOfDeclaration')}/></td>
        </tr>
        <tr>
          <td className={'bg-light-gray'}>שם</td>
          <td className={'bg-light-gray'}>מ.א</td>
          <td>תאריך מילוי הטופס</td>
          <td>תאריך הפגיעה</td>
          <td>שעת הפגיעה</td>
          <td>
            <div>שעת קביעת המוות</div>
            <div>האם ישנה הערכה למשך הזמן בו החלל ללא סימני חיים</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>);

})