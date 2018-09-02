import CssBaseline from "@material-ui/core/CssBaseline";
import * as React from "react";
import "./App.css";

export default class App extends React.Component {
  public render() {
        return (
            <div className="App">
                <CssBaseline />
                <header className="App-header">
                    <h1 className="App-title">Welcome to React JS</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to
                    reload.
                </p>
            </div>
        );
    }
}