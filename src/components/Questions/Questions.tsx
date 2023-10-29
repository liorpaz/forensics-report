import React from 'react';
import './Questions.css';
import {CauseOfDeath} from './CauseOfDeath';
import {Examinations} from './Examinations';
import {Armor} from '../Armor/Armor';
import {Procedures} from './Procedures';



export const Questions = () => {
  return (
    <div className="Questions">
      <Procedures />
      <Armor />
      <CauseOfDeath />
      <Examinations />
    </div>




  )
}


const questionsData = [
  ['פרוצדורות', 'האם בעת הטיפול בנפגע בוצעו פרוצדורות בשטח?', 'לרבות אינטובציה/קוניטומיה/נקז חזה/נידל/עירוי תוך גרמי/חסם עורקים מסוג CAT או מסוג אחר)']
]