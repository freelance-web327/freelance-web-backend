import cookieParser from "cookie-parser";
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { errorMiddlewares } from "./middlewares/error.js";
import adminRoute from "./routes/Fahim/adminPanelRoute.js";
import paymentRoutes from "./routes/Jahid/paymentRoute.js";
import collaborationRoutes from "./routes/Fahim/collaborationRoute.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import { errorMiddlewares } from './middlewares/error.js';
import  adminRoute  from './routes/Fahim/adminPanelRoute.js';
import paymentRoutes from './routes/Jahid/paymentRoute.js';
import searchRoutes from './routes/Jahid/searchRoute.js';
import collaborationRoutes from './routes/Fahim/collaborationRoute.js';
import projectRoutes from './routes/Emon/projectPostingRoute.js';
import searchRoutes from './routes/Jahid/searchRoute.js';


/**
 * Express.
 * @type {Object}
 */
export const app = express();

/**
 * Configures environment variables from .env file.
 * @function
 */
config({
  path: "./data/config.env",
});

/**
 * Middleware to parse incoming JSON requests.
 * @function
 */
app.use(express.json());

/**
 * Middleware to configure CORS settings.
 * @function
 * @param {Object} corsOptions - CORS options.
 * @param {string[]} corsOptions.origin - List of allowed origins.
 * @param {string[]} corsOptions.methods - List of allowed HTTP methods.
 * @param {boolean} corsOptions.credentials - Allow credentials (cookies, authorization headers, TLS client certificates).
 */
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

/**
 * Middleware to parse cookies from incoming requests.
 * @function
 */
app.use(cookieParser());

/**

 * Admin routes.
 * Fahim's work
 * @function
 * @name /api/admin
 * @memberof module:routes/Fahim/adminPanelRoute
 */
app.use("/api/admin", adminRoute);

/**
 * Collaboration routes.
 * Fahim's work
 * @function
 * @name /api/projects
 * @memberof module:routes/Fahim/collaborationRoute
 */
app.use("/api/projects", collaborationRoutes);

/**
 * Payment routes.
 * @function
 * @name /api/payments
 * @memberof module:routes/Jahid/paymentRoute
 */
app.use("/api/payments", paymentRoutes);


app.use("/api/auth", authRoutes);

/**
 * Search routes.
 * @function
 * @name /api/search
 * @memberof module:routes/Jahid/searchRoute
 */
app.use('/api/search', searchRoutes);

/**
 * Route for project postings.
 * @name /api/projects
 * @function
 * @memberof module:routes/Emon/projectPostingRoute
 */
app.use('/api/projects', projectRoutes);


/**
 * Route for freelancer project proposals.
 * @name /api/proposals
 * @function
 * @memberof module:routes/Emon/freelancerProjectRoute
 */
app.use('/api/proposals', freelancerProjectRoutes);


/**
 * Middleware to handle errors.
 * @function
 * @memberof module:middlewares/error
 */
app.use(errorMiddlewares);
