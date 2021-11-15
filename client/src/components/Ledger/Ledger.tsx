import { useEffect, useState } from 'react';
import ApiService from '../../ApiService';
import ClassRow from '../ClassRow/ClassRow';
import Days from '../Days/Days';
import TableHeader from '../TableHeader/TableHeader';
import './Ledger.css'

function Ledger ({userId}:{userId:number}) {
  const [userSnapshots, setUserSnapshots] = useState([]);

  useEffect(() => {

    ApiService.getUserActiveSnapshotsById(userId)
      .then(snapshots => setUserSnapshots(snapshots))
  }, [])

  return (
    <div className="ledger">
      <Days/>
      <TableHeader/>
      {['maria', 'stock', 'currency'].map((assetClass, index) => (
        <ClassRow key={index} assetClass={assetClass} />
      ))}
    </div>
  )
}

export default Ledger;