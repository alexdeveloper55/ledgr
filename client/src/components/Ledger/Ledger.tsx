import { useEffect, useState } from 'react';
import ApiService from '../../ApiService';
import ClassRow from '../ClassRow/ClassRow';
import Days from '../Days/Days';
import TableHeader from '../TableHeader/TableHeader';
import './Ledger.css'

function Ledger ({userId}:{userId:number}) {
  const [userDetails, setUserDetails] = useState<Array<object>>([]);

  useEffect(() => {

    ApiService.getActiveDetailsById(userId)
      .then(details => setUserDetails(details))
  }, [userId])

  useEffect(() => {
    getClassArrayFromRawData(userDetails)

  }, [userDetails])

  function getClassArrayFromRawData(rawData:object[]) {
      const classArray = [];
      let detail: any;
      for (detail of rawData) {
        classArray.push(detail.class)
      }
    return [...new Set(classArray)]
  }

  function calculateTotal(rawData:any) {
    let total = 0
    for (let i = 0; i < rawData.length; i++) {
      total += rawData[i].Asset_snapshots[0].price * rawData[i].Asset_snapshots[0].amount_owned;
    }
    return total;
  }

  return (
    <div className="ledger">
      <Days/>
      <TableHeader total={calculateTotal(userDetails)}/>
      {getClassArrayFromRawData(userDetails).map(function (assetClass, index) {
        return <ClassRow key={index} assetClass={assetClass} userDetails={userDetails}/>
      }
      )}
    </div>
  )
}

export default Ledger;