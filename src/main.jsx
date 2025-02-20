import React from 'react';
import { createRoot } from 'react-dom/client';
import CyberPortalInterface from './components/CyberPortalInterface';
import './index.css';

window.renderPortal = function() {
  const container = document.getElementById('react-root');
  if (!container._root) {
    container._root = createRoot(container);
  }
  container._root.render(<CyberPortalInterface />);
};
