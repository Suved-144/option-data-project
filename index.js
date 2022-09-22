const axios = require('axios');
uri = 'https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY'
// Make a request for a user with a given ID
axios.get(uri)
  .then(resp => {
    
    const ds = resp.data.records.data
    
    ds.forEach(function(ds){
      const ed = ds.expiryDate
      const st = ds.strikePrice
      //console.log(ds.strikePrice.PE.openInterest);
      if((ed === '22-Sep-2022' || ed === '29-Sep-2022') && st>=40000 && st<=42000 )
      {
      const stp = ds.strikePrice
      const expiryDate = ds.expiryDate
      const oipe = ds.PE.openInterest
      const oice = ds.CE.openInterest
      console.log( [ stp , expiryDate, oipe, oice ])
    }
  })  
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });