var express = require('express'),
app = express(),
port = process.env.PORT || 3000

app.get('/', (req, res) =>{
    res.send("{data: 123141}");
});

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT" + process.env.PORT);
});