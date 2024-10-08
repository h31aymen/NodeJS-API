// import modules
import express from "express";
const helmet= require("helmet")
import rateLimit from'express-rate-limit';
import compression from 'compression';

//import local modules (files)
// const appRoutes= require("./users.routes");
// const mainAppRoutes= require("./main.routes");
import appRoutes from './users.routes';
import mainAppRoutes from './main.routes';

//check the documentation of the rate limiter
const limiter= rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute //How long to remember requests for, in milliseconds.
	limit: 15, // Limit each IP to 100 requests per `window` (here, per 15 minutes). //How many requests to allow. in windowMs
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})



const app= new express();

app.use(limiter) // Apply the rate limiting middleware to all requests.
app.use(compression()); // apply the compression on the body responses
app.use(express.json());
app.use(helmet())
app.use("/users", mainAppRoutes);
app.use("/users", appRoutes);
app.listen(8080, ()=>{
    console.log(" you're listening on http://localhost:8080");
})