const express = require('express');
const router = express.Router();
const { getRoute, signupRoute, putRoute, deleteRoute,loginRoute,} = require('../controllers/egController');

router.get('/get', getRoute);
router.get('/get/:id', getRoute);
router.post('/post', signupRoute);        
router.put('/put/:id', putRoute);
router.delete('/delete/:id', deleteRoute);
router.post('/login',loginRoute)
module.exports = router;
