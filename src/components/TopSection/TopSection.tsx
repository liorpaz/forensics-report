import React, {SyntheticEvent, useCallback} from 'react';
import './TopSection.css';
import {observer} from 'mobx-react-lite';

export const TopSection = observer(({showCTSection}: {showCTSection: boolean}) => {
  // const {info, setInfo} = useStore();
  // const onChange = useCallback((e:SyntheticEvent, field:string) => {
  //   const target = e.target as HTMLInputElement;
  //   setInfo(field, target.value);
  // }, []);

  return (<div className={'TopSection'}>
    {showCTSection && <CTSection/>}
    <div className={'title'}>
      <div>
        סקר חללים בחירום
      </div>
      <div className={'sub-title'}>
        -סודי רפואי לאחר מילוי-
      </div>
    </div>
    <div className={'sticker'}>
      מדבקת חלל
    </div>
    <div className={'logo'}/>
  </div>);

})

const CTSection = observer(() => {
    return  <div className={'CTSection'}>
      <table>
        <tbody>
          <tr>
            <td className={'bg-light-gray'}><b>קדימות CT</b></td>
            <td><input type={'checkbox'}/>גבוהה</td>
            <td><input type={'checkbox'}/>נמוכה</td>
          </tr>
          <tr className={'no-border'}>
            <td className={'bg-light-gray'}><b>האם בוצע CT?</b></td>
            <td><input type={'checkbox'}/>כן </td>
            <td><input type={'checkbox'}/>לא </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <div style={{display: 'flex'}}>
                <span>בדיקות נוספות?</span>
                <input type={'text'} style={{width: '100%'}}/>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
});