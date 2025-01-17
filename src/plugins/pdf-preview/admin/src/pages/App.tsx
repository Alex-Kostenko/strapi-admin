import { Page } from '@strapi/strapi/admin';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import Document from './Document';

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/document/:path" element={<Document />} />
        <Route path="*" element={<Page.Error />} />
      </Routes>
      <div id="modal-root"></div>
    </>
  );
};

export { App };
