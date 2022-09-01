// const functions = require("firebase-functions");
// const express = require('express')
// const cors = require('cors');
// const { getTasks, createTask, updateTask, deleteTask } = require("./src/tasks");
// import { getDestinations, getCountries} from './src/destinations.js'
import functions from 'firebase-functions'
import express from 'express';
import cors from 'cors'
import { getDestinations, createDestination, updateDestination, deleteDestination } from './src/destinations.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/destinations', getDestinations)
app.post('/destination', createDestination)
app.patch('/destination/:destinationId', updateDestination)
app.delete('/destination/:destinationId', deleteDestination)

// app.get('/test', (req, res) => {
//     res.send('YeahhHi! first test on my final project👍🏼')
// })


export const api = functions.https.onRequest(app) 

// This is my API for 'your-o-planner' project, as part
// my final before graduation