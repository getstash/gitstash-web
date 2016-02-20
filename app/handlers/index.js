import Router from 'express-promise-router';

const router = Router();
export default router;

// prefix /
router.get('/', function (req, res) {
	res.render('home');
});
