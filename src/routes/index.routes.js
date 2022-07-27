import {Router} from 'express'

const router = Router()

router.get('/tasks', (req, res) => {
    res.send("Tasks")
})

router.post('/', (req, res) => {
    res.json('Saving a new task')
})



export default router 