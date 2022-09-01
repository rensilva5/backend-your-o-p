// const functions = require("firebase-functions");
// const express = require('express')
// const cors = require('cors');
// const { getTasks, createTask, updateTask, deleteTask } = require("./src/tasks");
// import { getDestinations, getCountries} from './src/destinations.js'
import functions from 'firebase-functions'
import express from 'express';
import cors from 'cors'
import { getDestinations } from './src/destinations.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/destinations', getDestinations)
// app.get('/countries', getCountries)
// app.post('/tasks', createTask)
// app.patch('/task/:taskId', updateTask)
// app.delete('/task/:taskId', deleteTask)

// app.get('/test', (req, res) => {
//     res.send('🎆YeahhHi! first test on my final project👍🏼')
// })


export const api = functions.https.onRequest(app) 

// This is my API for 'your-o-planner' project, as part
// my final before graduation

// createTask, updateTask, deleteTask 