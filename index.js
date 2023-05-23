let express = require('express');
let app = express();


app.get('/', function (req, res) {
    res.send("HI , It's Node js App #1");
});

app.listen(3000, function () {
    console.log("app listening on port 3000!");
});
