const mongoose = require('mongoose')
const rutinaSchemaObj = {
    Data: {
        type: String,
        required: true  
    },
    Alert: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
}
const rutinaSchema = mongoose.Schema(rutinaSchemaObj, { collection: 'rutinaSos' })
const RutinaModelBasicSos = mongoose.model('RutinaBasicSos', rutinaSchema)

module.exports = {
    RutinaModelBasicSos
}