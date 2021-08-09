const express = require('express')
const cors = require('cors')
const organizationRouter = require('./routers/directory_organization.router')

const app = express()

// const PORT = process.env.PORT || 8080
const PORT = process.env.PORT || 80

const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', organizationRouter)

app.get('/', (req, res) => {
    res.end(`Server started on ${PORT}...`)
})

app.listen(PORT, () => console.log(`Server started on ${PORT}...`))
