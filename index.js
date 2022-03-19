const express = require('express')
const cors = require('cors')
const router = require('./routes/productRoutes')


const app = express()
let corOptions = {
    origin: "https://localhost:8081"
}

app.use(cors(corOptions))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', router)

app.get('/', (req, res) => {
    res.json({ message: "Hello from  test API" })
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})