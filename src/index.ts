import express from 'express';
import signale from 'signale';
import UserRouter from './user/infraestructure/routes';

const port = process.env.PORT || 3000;

const app = express();
app.disable("x-powered-by");

app.use(express.json());

app.use('/', UserRouter);

app.listen(port, () => {
    signale.success(`Server running on port ${port}`);
});