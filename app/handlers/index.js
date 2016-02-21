import Router from 'express-promise-router';
import Octonode from 'octonode';
import Q from 'q';

const router = Router();
export default router;

// prefix /
router.get('/', async function (req, res) {
	const page = Number(req.query.page) || 1;

	const itemsPerPage = 10;

	const client = Octonode.client(req.auth.githubToken);
	const [repos] = await Q.ninvoke(client.me(), 'repos');

	if ((page - 1) * itemsPerPage > repos.length) {
		res.sendStatus(404);
		return;
	}

	res.render('home', {
		repos: repos.slice((page - 1) * itemsPerPage, page * itemsPerPage),
		maxPage: Math.ceil(repos.length / itemsPerPage) + 1,
		notLastPage: page != Math.ceil(repos.length / itemsPerPage),
		notFirstPage: page != 1,
		prevPage: page - 1,
		nextPage: page + 1
	});
});
