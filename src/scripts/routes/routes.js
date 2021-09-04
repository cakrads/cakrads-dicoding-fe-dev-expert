import HomePage from '../views/pages/home';
import DetailPage from '../views/pages/detail';

const routes = {
  '/': HomePage,
  '/detail/:id': DetailPage,

};

export default routes;
