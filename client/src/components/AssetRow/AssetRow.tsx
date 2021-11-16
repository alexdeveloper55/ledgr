import './AssetRow.css'
import { Icon } from '@iconify/react';

function AssetRow(props: {asset: string, assetClass: string, userDetails: object[]}) {
  const {asset, assetClass, userDetails} = props

  
  function findAssetTotalandQuantity (rawData:any) {
    const Total0Quantity1 = [];
    for (let i = 0; i < rawData.length; i++) {
      if (assetClass === rawData[i].class && asset === rawData[i].name) {
        Total0Quantity1.push(rawData[i].Asset_snapshots[0].amount_owned * rawData[i].Asset_snapshots[0].price);
        Total0Quantity1.push(rawData[i].Asset_snapshots[0].amount_owned)
      }
    }
    return Total0Quantity1
  }
  
  return (
    <div className="AssetRow">
        <div className="asset_class_col">
          <div className="AssetSpacer"></div>

          <div className="AssetTitle">{asset}</div>
        </div>

        <div className="breakdown_col_1_asset"></div>
        <div className="breakdown_col_2_asset">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(findAssetTotalandQuantity(userDetails)[0])}</div>
        <div className="breakdown_col_3_asset">{findAssetTotalandQuantity(userDetails)[0] !== findAssetTotalandQuantity(userDetails)[1] ? findAssetTotalandQuantity(userDetails)[1] : null}</div>

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