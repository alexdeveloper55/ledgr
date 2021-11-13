import ClassRow from '../ClassRow/ClassRow';
import Days from '../Days/Days';
import TableHeader from '../TableHeader/TableHeader';
import './Ledger.css'

function Ledger () {
  return (
    <div className="ledger">
      <Days/>
      <TableHeader/>
      {['cash', 'stock', 'currency'].map((cLass, index) => (
        <ClassRow key={index} cLass={cLass}/>
      ))}
    </div>
  )
}

export default Ledger;