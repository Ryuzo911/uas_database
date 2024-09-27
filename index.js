import express from 'express';
import userRouter from './routers/userRouter';
import postRouter from './routers/postRouter';

const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(3000, () => {
    console.log ("Server listening on port 3000");
});