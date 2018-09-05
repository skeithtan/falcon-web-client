import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./app";
import { initializeApp } from "./app/controllers/initialize_app";
import store from "./app/store";
import registerServiceWorker from "./registerServiceWorker";

const app = (
    <CssBaseline>
        <Provider {...store}>
            <BrowserRouter>
                <Route path="/:page?" component={App} />
            </BrowserRouter>
        </Provider>
    </CssBaseline>
);

initializeApp();
ReactDOM.render(app, document.getElementById("root") as HTMLElement);
registerServiceWorker();
