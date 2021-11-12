import ClassRow from '../ClassRow/ClassRow';
import Days from '../Days/Days';
import TableHeader from '../TableHeader/TableHeader';
import './Ledger.css'

function Ledger () {
  return (
    <div className="ledger">
      <Days/>
      <TableHeader/>
      <ClassRow/>
    </div>
  )
}

export default Ledger;