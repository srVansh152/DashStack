// models/Resident.js
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    email: String,
    age: Number,
    gender: String,
    relation: String,
});

const vehicleSchema = new mongoose.Schema({
    type: {
        type: String, // "two-wheeler" or "four-wheeler"
        required: true,
    },
    name: String,
    number: String,
});

const residentSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    wing: {
        type: String,
        required: true,
    },
    unitNumber: {
        type: String,
        required: true,
    },
    relation: {
        type: String,
        required: true,
    },
    aadhaarFront: {
        type: String,
        required: true,
    },
    aadhaarBack: {
        type: String,
        required: true,
    },
    addressProof: {
        type: String,
        required: true,
    },
    rentAgreement: {
        type: String,
        required: true,
    },
    members: [memberSchema],
    vehicles: [vehicleSchema],
    status: {
        type: String, // "occupied" or "vacated"
        required: true,
    },
    owner: {
        type: Boolean,
        required: true,
    },
    ownerDetails: {
        fullName: {
            type: String,
            required: function () { return !this.owner; }
        },
        phoneNumber: {
            type: String,
            required: function () { return !this.owner; }
        },
        address: {
            type: String,
            required: function () { return !this.owner; }
        },
    },
    society: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Society',
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    password: {
        type: String,
        default: '123', // Set default password for all residents
    },
}, { timestamps: true });

module.exports = mongoose.model('Resident', residentSchema);