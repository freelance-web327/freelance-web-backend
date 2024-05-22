import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import { errorMiddlewares } from './middlewares/error.js';
import  adminRoute  from './routes/Fahim/adminPanelRoute.js';


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
  path: './data/config.env',
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
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
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
app.use('/api/admin', adminRoute);

/**
 * Middleware to handle errors.
 * @function
 * @memberof module:middlewares/error
 */
app.use(errorMiddlewares);
