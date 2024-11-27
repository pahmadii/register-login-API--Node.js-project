const mongoose=require('mongoose');

const connectionString='';


mongoose.connect()
.then(()=>{console.log('connected to DB.....')
})
.catch((err)=>{console.log(err);
});