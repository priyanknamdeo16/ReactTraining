import React, { Component } from "react";
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Root from "./components/root/rootContainer";
import LoginContainer from "./components/login/loginContainer"
import "./App.css";
import RoutesConstants from './constants/route.constants';

import appStore  from './store/appStore';
const store = appStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
        <Root/>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
