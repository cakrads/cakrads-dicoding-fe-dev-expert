import HomePage from '../views/pages/home';
import DetailPage from '../views/pages/detail';
import FavoritePage from '../views/pages/favorites';

const routes = {
  '/': HomePage,
  '/detail/:id': DetailPage,
  '/favorite': FavoritePage,
};

export default routes;
