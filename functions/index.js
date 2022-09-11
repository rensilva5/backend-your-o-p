// const functions = require("firebase-functions");
// const express = require('express')
// const cors = require('cors');
// const { getTasks, createTask, updateTask, deleteTask } = require("./src/tasks");
// import { getDestinations, getCountries} from './src/destinations.js'
import functions from 'firebase-functions'
import express from 'express';
import cors from 'cors'
import { getDestinations, createDestination, updateDestination, deleteDestination, getDestinationById } from './src/destinations.js'
import { getCountries } from './src/countries.js';

const app = express()
app.use(cors())
app.use(express.json())
// app.use(cors({origin:["http://localhost:3000"]}))

app.get('/countries', getCountries)  
app.get('/destinations', getDestinations)  
app.post('/destination', createDestination)
app.patch('/destination/:destinationId', updateDestination)
app.delete('/destination/:destinationId', deleteDestination)
app.get('/destination/:destinationId', getDestinationById)

// app.get('/test', (req, res) => {
//     res.send('Hi! first test on my final project👍🏼')
// })

export const api = functions.https.onRequest(app) 

// This is my API for 'your-o-planner' project, as part
// my final before graduation