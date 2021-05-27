const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is the users response');
})

router.get('/specific-user', (req, res) => {
    res.send('this is sending back a specific user');
})

module.exports = router;