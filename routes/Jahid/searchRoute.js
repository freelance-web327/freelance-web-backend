import express from 'express';
import { searchController } from '../../controllers/Jahid/searchController.js';

const router = express.Router();

/**
 * Route for advanced search and filtering.
 * @module routes/Jahid/searchRoute
 */

/**
 * Route to perform advanced search and filtering for projects.
 * @name GET /api/search
 * @memberof module:routes/Jahid/searchRoute
 * @param {function} searchController.advancedSearch - Controller function to handle advanced search and filtering.
 */
router.get('/search', searchController.advancedSearch);

export default router;