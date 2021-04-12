const express = require('express');
const router = express.Router();


// @route GET api/auth
// @desc get logged in  a user
// @access Private

router.get('/', (req, res) => { 
    res.send('get user logged in');
});

// @route   POST api/auth
// @desc    auth user an get token
// @access    Public

router.post('/', (req, res) => { 
    res.send('Log in user');
});






module.exports = router;