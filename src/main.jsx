import React from 'react';
import ReactDOM from 'react-dom/client';

//Import principal component APP
import { App } from './App';

//Import global styles
import '@styles/global.scss';

//Import Global Context
import { GlobalContext } from '@context/GlobalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalContext>
            <App />
        </GlobalContext>
    </React.StrictMode>
);
