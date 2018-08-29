import React, { Component } from "react";
import logo from "./logo.svg";
import {Provider} from 'react-redux';
import Root from "./components/root/rootContainer"
import "./App.css";

import appStore  from './store/appStore';

const store = appStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <Root />
      </div>
      </Provider>
    );
  }
}

export default App;
