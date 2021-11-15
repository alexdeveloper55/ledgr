import Ledger from '../Ledger/Ledger';
import './Dashboard.css';

function Dashboard ({userId}:{userId:number}) {
  return (
    <div className="dashboard">
      <Ledger userId={userId}/>
    </div>
  )
}

export default Dashboard;