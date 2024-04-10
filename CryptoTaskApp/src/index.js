import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import { createRoot } from 'react-dom/client';
import App from './App'; // Assuming your main component is named App

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);