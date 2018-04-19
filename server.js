
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let seated = [
    {
        customerName: "Meadow Lietzen",
        customerPhoneNumber: "7779990000",
        customerEmail: "Meadow@lala.com",
        customerID: 1
    },
    {
        customerName: "Sam Fisher",
        customerPhoneNumber: "8887770000",
        customerEmail: "samfisher@lala.com",
        customerID: 42
    },
    {
        customerName: "Elizabeth Banks",
        customerPhoneNumber: "7773338989",
        customerEmail: "banks@lala.com",
        customerID: 23
    }
]

let waiting = [];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/api/seated", (req, res) => {
    return res.json(seated);
})

app.get("/api/waiting", (req, res) => {
    return res.json(waiting);
})

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
})

app.post("/api/reservation", (req, res) => {
    let newReservation = req.body;
    if (seated < 5) {
        seated.push(newReservation);
        alert("You will now be seated!!")
        return res.json(seated);

    } else {
        waiting.push(newReservation);
        alert("You are on the Wait List!!")
        return res.json(waiting);

    }
})


app.listen(PORT, () => {
    console.log(`listening ${PORT}`);
    
});

