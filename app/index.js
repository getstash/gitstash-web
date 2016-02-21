import express from 'express';
import exphbs from 'express-handlebars';
import * as middleware from './middleware';
import handlers from './handlers';

const app = express();
export default app;

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	helpers: {
		for: function(from, to, incr, block) {
		    var accum = '';
		    for(var i = from; i < to; i += incr)
		        accum += block.fn(i);
		    return accum;
		},
		failover: function(...args) {
			for(const arg of args) {
				if (arg) 
					return arg;
			}
		}
	}
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(middleware.cookies);
app.use(middleware.body);
app.use(middleware.auth);
app.use(handlers);
app.use(middleware.notFound);
app.use(middleware.error);
