const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 4000;


app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`)
})