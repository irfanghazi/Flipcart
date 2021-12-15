const env = require("dotenv")
const express = require("express")
require("../src/connection/config")
const path = require("path")
const cors = require('cors')

const adminRoute = require("../src/routes/admin/auth")
const userRoute  = require("./routes/auth")
const categoryRoute = require("../src/routes/category")
const productRoute = require("../src/routes/product")
const cartRoute = require("../src/routes/cart")


const app = express()

env.config()

port = process.env.PORT

app.use(express.json())
app.use('/public',express.static(path.join(__dirname, 'uploads')))

app.use(cors())
app.use('/api', adminRoute)
app.use('/api', userRoute)
app.use('/api', categoryRoute)
app.use('/api',productRoute)
app.use('/api', cartRoute)



app.listen(port, ()=> {
    console.log(`server running on port ${port}`)
})