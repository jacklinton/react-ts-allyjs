import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import './index.css';
import './styles/flex.css';
import './styles/forms.css';
import './styles/headlines.css';
import './styles/inputs.css';
import './styles/modifiers.css';
import './styles/reset.css';
import './styles/root.css';
import './styles/variables.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
