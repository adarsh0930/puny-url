const express = require('express')
const app = express()

app.get('*', (req, res) => {
    res.send("what?");
})

const port = 4000
app.listen(port, ()=>{
    console.log(`Listening at port: ${port}`)
})