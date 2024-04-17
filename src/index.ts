import express from 'express';
import signale from 'signale';
import morgan from 'morgan';
import cors from 'cors';
import UserRouter from './user/infraestructure/routes';
import cookieParser from "cookie-parser"

const port = process.env.PORT || 3000;

const app = express();
app.disable("x-powered-by");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "PREFLIGHT"],
    credentials: true,
}));
app.use(cookieParser());

app.use('/', UserRouter);

app.listen(port, () => {
    signale.success(`Server running on port ${port}`);
});