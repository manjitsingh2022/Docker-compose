const  express  = require("express");
const app=express();
app.get('/',(req,res)=>{
    res.status(200).send('<h1>Its working  343</h1>')
})
let port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('listening on port.',port)
})