const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(`You are logged in. This is your profile ${req.user}.`);
});

module.exports = router;