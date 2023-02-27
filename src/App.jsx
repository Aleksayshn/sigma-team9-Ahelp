import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'utils/routes';
import { Layout } from 'layout';
import './App.scss';
import { LayoutPage, CurrentNeedsPage, SuccessfulStoriesPage, OurTeams, Contacts, DocumentPage } from './components';


const HistoryPage = lazy(() => import('./pages/HistoryPage/HistoryPage'));

const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<LayoutPage />} />
        <Route path={routes.HISTORY} element={<HistoryPage />} />
        <Route path={routes.CURRENT} element={<CurrentNeedsPage />} />
        <Route path={routes.SUCCESS} element={<SuccessfulStoriesPage />} />
        <Route path={routes.TEAM} element={<OurTeams />} />
        <Route path={routes.CONTACTS} element={<Contacts />} />
        <Route path={routes.DOCS} element={<DocumentPage />} />
        <Route path={routes.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
