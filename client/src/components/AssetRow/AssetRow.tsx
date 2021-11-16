import './AssetRow.css'
import { Icon } from '@iconify/react';
import ApiService from '../../ApiService';
import { useEffect } from 'react';

function AssetRow(props: {asset: string, assetClass: string, userDetails: object[], setUserDetails: any, userId:number}) {
  const {asset, assetClass, userDetails, setUserDetails, userId} = props
  const localSnapshot = findLocalSnapshot(userDetails);
  const Total0Quantity1 = createAssetTotalAndQuantity(localSnapshot)

  useEffect(() => {

  }, [userDetails])

  function findLocalSnapshot (rawData:any) {
    for (let i = 0; i < rawData.length; i++) {
      if (assetClass === rawData[i].class && asset === rawData[i].name) {
        return rawData[i]
      }
    }
  }

  function createAssetTotalAndQuantity (snapshot:any) {
    return [snapshot.Asset_snapshots[0].amount_owned * snapshot.Asset_snapshots[0].price ,snapshot.Asset_snapshots[0].amount_owned] 
  }

  async function deleteAsset () {
    console.log(localSnapshot.Asset_snapshots[0].id)
    console.log(userDetails)
    await ApiService.removeSnapshotById(localSnapshot.Asset_snapshots[0].id)
    ApiService.getActiveDetailsById(userId)
      .then(details => setUserDetails(details))
  }
  
  return (
    <div className="AssetRow">
        <div className="asset_class_col">
          <div className="AssetEditDelete"><Icon className="delete" icon="fluent:delete-28-filled" color="#591a15" width="18" height="18" onClick={deleteAsset}/></div>

          <div className="AssetTitle">{asset}</div>
        </div>

        <div className="breakdown_col_1_asset"></div>
        <div className="breakdown_col_2_asset">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Total0Quantity1[0])}</div>
        <div className="breakdown_col_3_asset">{Total0Quantity1[0] !== Total0Quantity1[1] ? Total0Quantity1[1] : null}</div>

        <div className="day_change_column_asset">
          {/* <div className="day_7_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 1.4%</div>
          <div className="day_30_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 1.4%</div>
          <div className="day_90_col"><Icon icon="akar-icons:arrow-up" color="#149350" width="16" height="16" inline={true}/> 12.4%</div> */}
          <div className="day_7_col">N/A</div>
          <div className="day_30_col">N/A</div>
          <div className="day_90_col">N/A</div>
        </div>

        <div className="edit_asset"></div>
      </div>
  )
}

export default AssetRow;