const  express  = require("express");
const app=express();
app.get('/',(req,res)=>{
    res.status(200).send('<h1>Its working iyyy </h1>')
})
let port =process.env.PORT || 4000;
app.listen(port,()=>{
    console.log('listening on port.',port)
})