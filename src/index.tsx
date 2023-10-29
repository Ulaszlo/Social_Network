import React from 'react';
import s from './index.module.css';
import App from './App';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container);



    root.render(
        <div className={s.indexStyle}>
            <BrowserRouter>
            <Provider store={store} >
                <div > <App /></div>
            </Provider>
        </BrowserRouter>
        </div>
    );

serviceWorker.unregister();
