import express from 'express';
import cors from 'cors';
import { routes } from './routes';
export const port  = 3000
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
 




app.listen(process.env.PORT || port, () => {
    console.log("HTTP server is running");
});