import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './GeneralComments.css';

export const GeneralComments = () => {
  return (<div className={'GeneralComments'} dir={'rtl'}>
    <div>8. הערות כלליות</div>
    <div className={'with-border'}>
      <TextareaAutosize rows={2}/>
    </div>
  </div>);
}