const express = require('express');
const router = express.Router();


// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private

router.get('/', (req, res) => { 
    res.send('Get all contacts');
});

// @route     POST api/contacts
// @desc      Add New Contact
// @access    Private

router.post('/', (req, res) => { 
    res.send('Add contact');
});

// @route     Put api/contacts/:id
// @desc      update contact
// @access    Private

router.put('/:id', (req, res) => { 
    res.send('update contact');
});

// @route     Delete api/contacts/:id
// @desc      Delete Contact
// @access    Private

router.delete('/:id', (req, res) => { 
    res.send('delete contact');
});

module.exports = router;