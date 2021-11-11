import { Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import InvoicesPage from '../../pages/invoces-page/invoices-page';
import FavoritePage from '../../pages/favorites-page/favorite-page';
import LoginPage from "../../pages/login-page/login-page";

function App() {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<InvoicesPage />} />
      <Route path={AppRoute.Favorites} element={<FavoritePage />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
    </Routes>
  );
}

export default App;
