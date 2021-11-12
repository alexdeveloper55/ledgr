import './TableHeader.css';
import { Icon } from '@iconify/react';

function TableHeader () {
  return (
    <div className="TableHeader">
      <div className="total_container">
        <div className="total"><b>Total:</b></div>
        <div className="total_value"><b>$9,893.17</b></div>
      </div>

      <div className="breakdown_col_1"></div>
      <div className="breakdown_col_2"></div>
      <div className="breakdown_col_3"></div>

      <div className="day_change_column">
        <div className="day_7_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 1.4%</div>
        <div className="day_30_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 1.4%</div>
        <div className="day_90_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 12.4%</div>
      </div>

      <div className="edit">
        <Icon icon="ant-design:edit-outlined" color="#591a15" width="18" height="18" />
      </div>

    </div>
  )
}

export default TableHeader;