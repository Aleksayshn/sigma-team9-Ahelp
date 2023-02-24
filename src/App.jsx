import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'utils/routes';
import { Layout } from 'layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage/HistoryPage'));

const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.HISTORY} element={<HistoryPage />} />

        <Route path={routes.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
