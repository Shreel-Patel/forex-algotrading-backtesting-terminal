import React from 'react';

import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

//ReactDOM.render(<App />, document.getElementById('root'));


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

