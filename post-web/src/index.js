import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {configureStore} from "./redux/store";
import {registerAxiosInterceptors} from "./config/axiosConfig";
import {createBrowserHistory} from "history";

function renderApp(store, history) {
    ReactDOM.render(
        <Provider store={store}>
            <App history={history} />
        </Provider>
        , document.getElementById('root'));
}

function startApp() {
    const history = createBrowserHistory();
    const store = configureStore(history);

    registerAxiosInterceptors(store);
    renderApp(store, history);
}

startApp();
// inicializarFirebase();
