const router = require('express').Router();
const controller = require('./controller');

router.post('/newpost', controller.newpost);
router.get('/getpost', controller.getpost);

module.exports = router;
