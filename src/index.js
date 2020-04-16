import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DakahliyaApp from './DakahliyaApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <DakahliyaApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();