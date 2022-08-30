import dbConnect from "./dbConnect";

export async function getTasks(req, res) {
    const db = dbConnect()
    const collection = await db
    .collection('task')
    .get()
    .catch((err) => res.stutus(500).send(err))
const tasks = collection.docs.map((doc) => {
    let task = doc.data()
    task.id = doc.id
    return task
})
res.send(tasks)
}

export async function createTask(req, res) {
    const newTask = req.body
    if (!newTask || !newTask.task) {
        res.status(400)
        .send({ success: false, message: 'This is an invalid request'})
        return
    }
    const db = dbConnect()
    await db
        .collection('task')
        .add(newTask)
        .catch((err) => res.status(500).send(err))
        res.status(201)
        getTasks(req, res)
}

export function updateTask(req, res) {
    const taskUpdate = req.body
    const { taskId } = req.params
    res.status(202).send('Task updated')
}

export function deleteTask(req, res) {
    const { taskId } = req.params
    res.status(203).send('Task Deleted')
}