import express from 'express'
import { engine } from "express-handlebars";
import studentRouter from "./routes/studentRouter.js";

const app = new express();


app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.use('/students', studentRouter)

app.listen(5000, () => {
    console.log('server running on port 5000')
})