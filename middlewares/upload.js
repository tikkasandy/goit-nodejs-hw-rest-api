const multer = require('multer')
const path = require('path')

const { FOLDER } = require('../libs/constants')

const tempDir = path.join(__dirname, '../', FOLDER.UPLOAD)

const multerConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, tempDir)
    },
    filename: (req, file, cb) => {
        console.log(`${Date.now()}_ ${file.originalname}`)
        cb(null, `${Date.now()}_ ${file.originalname}`)
    },
    limits: {
        fileSize: 50000
    }
})

const upload = multer({
    storage: multerConfig,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.includes('image')) {
            return cb(null, true)
        }
        cb(new Error('Only images are allowed!'))
    }
})


module.exports = upload