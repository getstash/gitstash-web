import Router from 'express-promise-router';
import Octonode from 'octonode';
import Q from 'q';

const router = Router();
export default router;

// prefix /
router.get('/', async function (req, res) {
	const client = Octonode.client(req.auth.githubToken);
	const repos = await Q.ninvoke(client.me(), 'repos');
	res.render('home', {
		repos: repos
	});
});
