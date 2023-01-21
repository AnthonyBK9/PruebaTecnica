import express from 'express';
import miembrosRoutes from './routes/miembros.routes.js';
import indexRouter from './routes/index.routes.js';

//? Initial Configs
const app = express();
app.use(express.json());
const port = 3000;

app.use('/api/v1', indexRouter);
app.use('/api/v1', miembrosRoutes);

app.listen(port,() => {
    console.log(`Server started at port ${port}`);
});