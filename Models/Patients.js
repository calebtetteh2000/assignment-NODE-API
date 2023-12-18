const mongoose = require ('mongoose')
const patientSchema = mongoose.Schema(
     {
        PatientID: {
            type: Number,
            required: [true, 'Please enter patient ID']
        },
        Surname: {
            type: String,
            required: true
        },
        Othernames: {
            type: String,
            required: true
        },
        Gender: {
            type: String,
            required: true
        },
        Phone_Number: {
            type: Number,
            required: true
        },
        Residential_Address:{
            type: String,
            required: true
        },
        Emergency_Name:{
            type: String,
            required: true
        },
        Contact:{
            type: Number,
            required: true
        },
        Emergency_Name:{
            type: String,
            required: true
        }
     },
     {
        timestamps: true 
     }
)
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient; 