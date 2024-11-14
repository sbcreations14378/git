// const express = require('express');
// const app =express();

// // app.get('/',(req,res)=>{
// //     res.send('Hello There!')
// // })

// app.use(express.json());
// app.use(express.urlencoded({extended:false}))

// app.use('/api/users',require('./routes/api/users'))
// // app.use('/api/users',require('./routes/api/users'))

// app.listen(3000,()=>{
//     console.log('Server Started at port no.3000')
// })

const wbm = require("wbm");

wbm
  .start()
  .then(async () => {
    const phones = ["+917893412318"];
    const message = "Good Morning.";
    await wbm.send(phones, message);
    await wbm.end();
  })
  .catch((err) => console.log(err));
