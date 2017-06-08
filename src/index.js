import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Route from './Route';

import './style.css';

ReactDOM.render(<Route />, document.getElementById('root'));
registerServiceWorker();
