import Days from '../Days/Days';
import TableHeader from '../TableHeader/TableHeader';
import './Ledger.css'

function Ledger () {
  return (
    <div className="ledger">
      <Days/>
      <TableHeader/>
    </div>
  )
}

export default Ledger;