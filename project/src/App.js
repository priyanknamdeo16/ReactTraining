import React, { Component } from "react";
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./components/root/rootContainer";
import "./App.css";

import appStore  from './store/appStore';

const store = appStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
        <Root />
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
