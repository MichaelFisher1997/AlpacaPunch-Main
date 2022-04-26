import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';


// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);
root.render(<App />);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement);

//<MetaMaskProvider><App /></MetaMaskProvider>
