const express = require('express');
const route = require('./route/route');
const mongoose = require('mongoose');
const app = express();
const multer = require("multer")

app.use(express.json());
app.use(multer().any());

mongoose.connect("mongodb+srv://saurabhshete281:JBmRPjzC58VOejIX@cluster0.jih1tjw.mongodb.net/KKMSOFTWARE", {
    useNewUrlParser: true

})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);


// USING THIS FUNCTION TO HANDLE INVALID ENDPOINTS BY USERS
route.all("/*", function (req, res) {
    res.status(400).send({
        status: false,
        msg: "URL NOT FOUND!"
    })
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
}); 