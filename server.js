
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});



app.listen(PORT, () => {
    console.log(`listening ${PORT}`);
    
});

