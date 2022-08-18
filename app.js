const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//User = require("./models/user");

const userRoutes = require("./routes/user.routes");
const feedbackRoutes = require("./routes/feedback.routes.js")
const roleRoutes = require("./routes/role.routes");

const db = require("./models/index.js");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    }).catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
//Test DB
//db.authenticate()
//.then(() => console.log('Database Connected'));

app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', { root: __dirname });
});
app.use(express.json());
app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api', feedbackRoutes);
app.use('/api', roleRoutes);
app.listen(3000, function () {
    console.log("Server is running on localhost:3000");
});