// =========================================
// main.jsx — React Entry Point
//
// This is the very first file React runs.
// It mounts your App component into the
// HTML page (index.html).
//
// You almost never need to edit this file.
// =========================================

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Find the <div id="root"> in index.html
// and render your entire App inside it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
