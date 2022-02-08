import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './style/globalStyle.scss';
import App from './App';

import { setIconOptions } from '@fluentui/react/lib/Styling';
import { initializeIcons } from '@uifabric/icons';

initializeIcons();
// Suppress icon warnings.
setIconOptions({
    disableWarnings: true
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
