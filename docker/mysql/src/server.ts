'use strict'
const express = require('express');
import { fetchCompany } from './script'

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req: any, res: any) => {
    res.send('Hello world')
})

app.get('/company', (req: any, res: any) => {
    fetchCompany()
        .catch((e) => { throw e })
})

app.listen(PORT, HOST)
console.log(`Server Run ${HOST}:${PORT}`)
