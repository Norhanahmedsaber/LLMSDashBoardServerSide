import express from 'express'
import  {dbConnection}  from './src/utils/dbConnection.js';
import announcementRoute from "./src/routes/announcement.js"
import quizRoutes from "./src/routes/quiz.js"
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();
const app = express()
const port= process.env.PORT

app.use(express.json())
app.use(cors())
app.use('/announcement',announcementRoute)
app.use('/quiz',quizRoutes)

dbConnection()
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
