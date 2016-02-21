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
	const ghme = client.me();
	const [info] = await Q.ninvoke(ghme, 'info');
	const [repos] = await Q.ninvoke(ghme, 'repos');

	if ((page - 1) * itemsPerPage > repos.length) {
		res.sendStatus(404);
		return;
	}

	console.log(info);
	res.render('home', {
		repos: repos.slice((page - 1) * itemsPerPage, page * itemsPerPage),
		user: info,
		maxPage: Math.ceil(repos.length / itemsPerPage) + 1,
		notLastPage: page != Math.ceil(repos.length / itemsPerPage),
		notFirstPage: page != 1,
		prevPage: page - 1,
		nextPage: page + 1
	});
});
