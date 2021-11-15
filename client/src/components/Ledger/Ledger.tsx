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

  // REMOVE THE CONSOLE LOGS!!!!!
  function getClassArrayFromRawData(rawData:object[]) {
    console.log(rawData)
      const classArray = [];
      let detail: any;
      for (detail of rawData) {
        classArray.push(detail.class)
      }
    console.log("yo: ", classArray)
    return [...new Set(classArray)]
  }

  // function calculateTotal(rawData:object[]) {

  // }

  return (
    <div className="ledger">
      <Days/>
      <TableHeader/>
      {getClassArrayFromRawData(userDetails).map((assetClass, index) => (
        <ClassRow key={index} assetClass={assetClass} /*userDetails={userDetails}*//>
      ))}
    </div>
  )
}

export default Ledger;