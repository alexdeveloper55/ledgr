import { useEffect, useState } from 'react';
import ApiService from '../../ApiService';
import ClassRow from '../ClassRow/ClassRow';
import Days from '../Days/Days';
import TableHeader from '../TableHeader/TableHeader';
import './Ledger.css'

function Ledger ({userId}:{userId:number}) {
  const [userDetails, setUserDetails] = useState<Array<object>>([]);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [newClass, setNewClass] = useState('');
  const [newAsset, setNewAsset] = useState('');
  const [newAssetPrice, setNewAssetPrice] = useState(0);
  const [newAmountOwned, setNewAmountOwned] = useState(0);


  useEffect(() => {

    ApiService.getActiveDetailsById(userId)
      .then(details => setUserDetails(details))
  }, [userId])

  useEffect(() => {
    getClassArrayFromRawData(userDetails)

  }, [userDetails])


  function getClassArrayFromRawData(rawData:object[]) {
      const classArray = [];
      let detail: any;
      for (detail of rawData) {
        classArray.push(detail.class)
      }
    return [...new Set(classArray)]
  }

  function calculateTotal(rawData:any) {
    let total = 0
    for (let i = 0; i < rawData.length; i++) {
      total += rawData[i].Asset_snapshots[0].price * rawData[i].Asset_snapshots[0].amount_owned;
    }
    return total;
  }


  async function postNewSnapshot (userId: number, newClass: string, newAsset: string, newAssetPrice: number, newAmountOwned: number) {
    await ApiService.postNewSnapshot({userId, newClass, newAsset, newAssetPrice, newAmountOwned})
  }


  function handleClassChange (e:any) {
    setNewClass(e.target.value);
  }

  function handleAssetChange (e:any) {
    setNewAsset(e.target.value);
  }

  function handleAssetPriceChange (e:any) {
    setNewAssetPrice(e.target.value);
  }

  function handleAmountOwnedChange (e:any) {
    setNewAmountOwned(e.target.value);
  }

  async function handleSubmit (e:any) {
    e.preventDefault();
    if(!newClass) return alert ('Please enter a class');
    if(!newAsset) return alert ('Please enter an asset');
    if(!newAssetPrice) return alert ('Please enter an asset price');
    if(!newAmountOwned) return alert ('Please enter an amount owned');
    await postNewSnapshot(userId, newClass, newAsset, newAssetPrice, newAmountOwned);
    setFormIsOpen(false)
    e.target.reset();
    setNewClass("");
    setNewAsset("");
    setNewAssetPrice(0);
    setNewAmountOwned(0);
    setUserDetails(await ApiService.getActiveDetailsById(userId));
  }


  return (
    <div className="ledger">
        <Days/>
        <TableHeader total={calculateTotal(userDetails)}/>
        {getClassArrayFromRawData(userDetails).map((assetClass, index) => (<ClassRow key={index} assetClass={assetClass} userDetails={userDetails} setUserDetails={setUserDetails} userId={userId}/>))}

        {!formIsOpen &&
        <button onClick={() => setFormIsOpen(true)} className="add_button">Add Asset</button>
        }

        {formIsOpen && 

        <div className="form_container">
          <h1>Add an Asset</h1>
          <form className="form" onSubmit={handleSubmit}>

            <label htmlFor="form_class">Class: </label>
            <input type="text" name="input_class" placeholder="Insert an asset class..." value={newClass} onChange={handleClassChange}/>

            <label htmlFor="form_asset">Asset: </label>
            <input type="text" name="input_asset" placeholder="Insert an asset..." value={newAsset} onChange={handleAssetChange}/>

            <label htmlFor="form_asset_price">Asset Price: </label>
            <input type="number" step="any" name="input_asset_price" placeholder="Insert asset price..." value={newAssetPrice} onChange={handleAssetPriceChange}/>
            
            <label htmlFor="form_amount_owned">Amount Owned: </label>
            <input type="number" step="any" name="input_amount_owned" placeholder="Insert amount owned..." value={newAmountOwned} onChange={handleAmountOwnedChange}/>

            <button type="submit">Add</button>
            <button onClick={() => setFormIsOpen(false)}>Cancel</button>

          </form>
        </div>
        } 
    </div>
  )
}

export default Ledger;