import express from 'express';
import TasksRoutes from './routes/tasks.routes'


const app = express();

//setings
app.set('port', process.env.PORT || 3000)

app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.json({message: "Welcome to my aplication"})
})


app.use('/api/tasks', TasksRoutes);

export default app;
