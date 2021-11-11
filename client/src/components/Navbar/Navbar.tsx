import './Navbar.css';
import { Icon } from '@iconify/react';
import moment from 'moment';

function Navbar () {
  return (
    <nav className="navbar">
      <ul className="views">
        <li><Icon icon="emojione-monotone:ledger" color="#591a15" width="36" height="36"/></li>
        <li><Icon icon="emojione-monotone:ledger" color="#591a15" width="36" height="36"/></li>
      </ul>
      <div className="email">
        <Icon icon="bx:bx-user" color="#591a15" width="36" height="36"/>
        <p className="email_text">example@pm.me</p>
      </div>
      <div className="calendar">
        <Icon icon="ant-design:calendar-twotone" color="#591a15" width="24" height="24" inline={true}/>
        <p className="calendar_text">{moment(Date.now()).format('Do MMMM, YYYY')}</p>
      </div>
      <div className="logout">
        <Icon icon="carbon:logout" color="#591a15" width="24" height="24" />
      </div>
    </nav>
  )
}

export default Navbar;