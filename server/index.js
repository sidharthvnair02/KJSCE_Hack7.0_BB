
const express = require('express');
const app = express();
const port = process.env.PORT || 8989

// Calling the connect file to connect with the atlas database
const conn = require('./connect.js')
const userRouter = require('./routes/user_rou')
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.use('/user',userRouter);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${8989}`)
})