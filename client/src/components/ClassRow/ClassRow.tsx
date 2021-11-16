import { useState } from 'react';
import './ClassRow.css';
import DropIcon from '../../assets/DropIcon.svg';
// import { Icon } from '@iconify/react';
import AssetRow from '../AssetRow/AssetRow';

function ClassRow (props: {assetClass: string, userDetails: object[], setUserDetails: any, userId:number}) {
  const {assetClass, userDetails, setUserDetails, userId} = props
  const [expanded, setExpanded] = useState(false)


  function toggleExpanded() {
    setExpanded(!expanded);
  }

  function getAssetArrayFromRawData(rawData:any) {
    const assetArray = [];
    for (let i = 0; i < rawData.length; i++) {
      if (assetClass === rawData[i].class) {
        assetArray.push(rawData[i].name);
      }
    }
    return assetArray;
  }

  function calculateClassTotal(rawData:any) {
    let classTotal = 0;
    for (let i = 0; i < rawData.length; i++) {
      if (assetClass === rawData[i].class) {
        classTotal += rawData[i].Asset_snapshots[0].price * rawData[i].Asset_snapshots[0].amount_owned;
      }
    }
    return classTotal
  }
  
  return (
    <div className="FullClass">
      <div className="ClassRow">
        <div className="asset_class_col">
          <button className="ClassButton" onClick={toggleExpanded}>
            <div className="ClassButtonText">{assetClass.toUpperCase()}</div>
            <img src={DropIcon} alt="Drop Icon" className={expanded ? "rotated" : "normal"}/>
          </button>

          <div className="ClassSpacer"></div>
        </div>

        <div className="breakdown_col_1_class">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(calculateClassTotal(userDetails))}</div>
        <div className="breakdown_col_2_class"></div>
        <div className="breakdown_col_3_class"></div>

        <div className="day_change_column">
          {/* <div className="day_7_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 1.4%</div>
          <div className="day_30_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 1.4%</div>
          <div className="day_90_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 12.4%</div> */}
          <div className="day_7_col">N/A</div>
          <div className="day_30_col">N/A</div>
          <div className="day_90_col">N/A</div>
        </div>

        <div className="edit"></div>
      </div>
      {expanded ? getAssetArrayFromRawData(userDetails).map((asset, index) => (<AssetRow key={index} asset={asset} assetClass={assetClass} userDetails={userDetails} setUserDetails={setUserDetails} userId={userId}/>)) : null}
    </div>
  )
}

export default ClassRow;