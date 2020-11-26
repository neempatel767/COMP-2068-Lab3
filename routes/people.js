const { index, show } = require('../controllers/people');

module.exports = router => {
    router.get('/', index);
    router.get('/people', index);
    router.get('/people/:id', show);

    return router;
}