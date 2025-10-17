const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('connected to the database')
    } catch (error) {
        console.log('unable to connect to the database', error)
    }
}

module.exports = { connectDB }