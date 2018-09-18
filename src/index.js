import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Router from './components/router.js';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
