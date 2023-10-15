// worksController.js
const Works = require('../Models/worksModel');

// CRUD operations
// Implement Create, Read, Update, Delete operations as needed
// ...

module.exports = {
  // Your CRUD functions here
};




// worksRoutes.js
const express = require('express');
const router = express.Router();
const worksController = require('../controllers/worksController');
const authVerifyMiddleware = require('../middlewares/authVerifyMiddleware');

// CRUD routes for Works
// ...

// Example using authVerifyMiddleware
router.post('/create', authVerifyMiddleware, async (req, res) => {
  // Implement creation logic using Works model
  // ...
});

module.exports = router;
