var express = require('express');
var cookieParser = require('cookie-parser');
const cors = require('cors');
const mongo = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./Router/user');
const authRouter = require('./Router/auth');
const app = express();
const path = require('path');

dotenv.config();
const port = process.env.PORT || 5000;

mongo.connect(process.env.MONGO_URL).then(() => {
    console.log('database connected successfully');
}).catch(err => { console.log(err); });

app.use(cors({ "origin": "http://localhost:3000", "credentials": true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

// app.use(express.static(path.join(__dirname, './client/build')));

// app.use(express.static('client/build'));
// res.sendFile(path.resolve(__dirname, "./client", "build", "index.html"));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build", "index.html"));

// });


app.listen(port, () => {
    console.log(`Your App is running on http://localhost:${port}`);
});