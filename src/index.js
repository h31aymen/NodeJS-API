import express from "express";

import appRoutes from "./users.routes";
import mainAppRoutes from "./main.routes";
const helmet= require("helmet")

const app= new express();
app.use(helmet())
app.use(express.json());

app.use("/users", mainAppRoutes);
app.use("/users", appRoutes);
app.listen(8080, ()=>{
    console.log(" you're listening on http://localhost:8080");
})