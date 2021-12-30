import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./App";
import { SearchProvider } from "./Components/StateProvider";
import reducer, { initialState } from "./Components/reducer";

ReactDOM.render(
    <React.StrictMode>
        <SearchProvider initialState={initialState} reducer={reducer}>
            <App />
        </SearchProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
