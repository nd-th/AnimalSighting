const express =  require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
const port = 8080;

app.get("/", (req,res) =>{
    res.send("hello");
})



app.listen(port, ()=>{
    console.log(`server start at http://localhost:${port}`)
});