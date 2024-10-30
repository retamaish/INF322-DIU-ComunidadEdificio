import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.scss';
import Layout from './components/layout';

document.body.innerHTML = '<div id="root"></div>';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
