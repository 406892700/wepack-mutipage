const express = require('express');
const mixin = require('./tool/mixin');

const router = express.Router();

router.get('/double12', (req, res) => {
    mixin(res).render('activity/double12', {});
});

module.exports = router;
