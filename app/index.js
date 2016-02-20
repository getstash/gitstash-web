import express from 'express';
import exphbs from 'express-handlebars';
import * as middleware from './middleware';
import handlers from './handlers';

const app = express();
export default app;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(middleware.cookies);
app.use(middleware.body);
app.use(middleware.auth);
app.use(handlers);
app.use(middleware.notFound);
app.use(middleware.error);
