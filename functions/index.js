const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors');
const { getTasks, createTask, updateTask, deleteTask } = require("./src/tasks");

const app = express()
app.use(cors())
app.use(express.json())

app.get('tasks', getTasks)
app.post('/tasks', createTask)
app.patch('task/:taskId', updateTask)
app.delete('/task/:taskId', deleteTask)

// app.get('/test', (req, res) => {
//     res.send('🎆YeahhHi! first test on my final project👍🏼')
// })


exports.app = functions.https.onRequest(app) 

// This is my API for 'your-o-planner' project, as part
// my final before graduation
