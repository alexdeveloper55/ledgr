import { useState } from 'react';
import './ClassRow.css';
import DropIcon from '../../assets/DropIcon.svg';
import { Icon } from '@iconify/react';
import AssetRow from '../AssetRow/AssetRow';

function ClassRow ({cLass}:{cLass:string}) {
  const [expanded, setExpanded] = useState(false)

  function toggleExpanded() {setExpanded(!expanded)}
  
  return (
    <div className="FullClass">
      <div className="ClassRow">
        <div className="asset_class_col">
          <button className="ClassButton" onClick={toggleExpanded}>
            <div className="ClassButtonText">{cLass.toUpperCase()}</div>
            <img src={DropIcon} alt="Drop Icon" className={expanded ? "rotated" : "normal"}/>
          </button>

          <div className="ClassSpacer"></div>
        </div>

        <div className="breakdown_col_1_class">$1,200.00</div>
        <div className="breakdown_col_2_class"></div>
        <div className="breakdown_col_3_class"></div>

        <div className="day_change_column">
          <div className="day_7_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 1.4%</div>
          <div className="day_30_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 1.4%</div>
          <div className="day_90_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 12.4%</div>
        </div>

        <div className="edit"></div>
      </div>
      {expanded ? ['transferwise', 'becu'].map((asset, index) => (<AssetRow key={index} asset={asset}/>)) : null}
    </div>
  )
}

export default ClassRow;