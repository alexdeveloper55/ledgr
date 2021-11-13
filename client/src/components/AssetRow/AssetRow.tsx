import './AssetRow.css'
import { Icon } from '@iconify/react';

function AssetRow({ asset }:{ asset:string }) {
  return (
    <div className="AssetRow">
        <div className="asset_class_col">
          <div className="AssetSpacer"></div>

          <div className="AssetTitle">{asset}</div>
        </div>

        <div className="breakdown_col_1_asset"></div>
        <div className="breakdown_col_2_asset">$400.00</div>
        <div className="breakdown_col_3_asset"></div>

        <div className="day_change_column_asset">
          <div className="day_7_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 1.4%</div>
          <div className="day_30_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 1.4%</div>
          <div className="day_90_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 12.4%</div>
        </div>

        <div className="edit_asset"></div>
      </div>
  )
}

export default AssetRow;