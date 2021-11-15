import './Navbar.css';
import { Icon } from '@iconify/react';
import moment from 'moment';

function Navbar ({username}:{username:string}) {
  // const [username, setUsername] = useState("")

  // // userId = 8 is hard coded so that I have a working app. Need to update for user login
  // useEffect((userId = 8) => {

  //   ApiService.getUserById(userId)
  //     .then(user => {
  //       console.log("hopefully getting username");
  //       console.log(user)
  //       setUsername(user.username)
  //     });
  // }, [])


  return (
    <nav className="navbar">
      <ul className="views">
        <li><Icon icon="emojione-monotone:ledger" color="#591a15" width="36" height="36"/></li>
        <li><Icon icon="ant-design:pie-chart-outlined" color="#591a15" width="36" height="36" /></li>
        <li><Icon icon="codicon:graph-line" color="#591a15" width="36" height="36" /></li>
        <li><Icon icon="whh:spreadsheet" color="#591a15" width="36" height="36" /></li>
      </ul>
      <div className="user">
        <Icon icon="bx:bx-user" color="#591a15" width="36" height="36"/>
        <p className="username_text">{username}</p>
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