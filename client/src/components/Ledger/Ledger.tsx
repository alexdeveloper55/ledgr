import ClassRow from '../ClassRow/ClassRow';
import Days from '../Days/Days';
import TableHeader from '../TableHeader/TableHeader';
import './Ledger.css'

function Ledger () {
  return (
    <div className="ledger">
      <Days/>
      <TableHeader/>
      {['cash', 'stock', 'currency'].map((assetClass, index) => (
        <ClassRow key={index} assetClass={assetClass}/>
      ))}
    </div>
  )
}

export default Ledger;