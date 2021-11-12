import './ClassRow.css';
import DropIcon from '../../assets/DropIcon.svg'; 

function ClassRow () {
  return (
    <div className="ClassRow">
      <div className="asset_class_col">
        <button className="ClassButton">
        <div className="ClassButtonText">CASH</div>
        <img src={DropIcon} alt="Drop Icon" />
        </button>

        <div className="ClassSpacer"></div>
      </div>

    </div>
  )
}

export default ClassRow;