const { mkdir } = require('fs/promises')
const mongoose = require('mongoose')

const app = require('./app')
const { FOLDER } = require('./libs/constants')

const { DB_HOST, PORT = 3000 } = process.env

mongoose.connect(DB_HOST)
    .then(() => app.listen(PORT, async () => {
        await mkdir(FOLDER.UPLOAD, { recursive: true })
        await mkdir(FOLDER.AVATAR, { recursive: true })
        console.log('Database connection successful')
    }))
    .catch(error => {
        console.log(error.message)
        process.exit(1)
    })