
import React, {Component} from 'react';
import styled from 'styled-components';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
//import TextField from 'material-ui/TextField';
import TextField from '@material-ui/core/TextField'
import RoutesConstants from '../../constants/route.constants';
import {Link, withRouter} from 'react-router-dom';
const LoginComponent= (props) => {
    return (
      <div>
        <MuiThemeProvider>
          <div className="loginBox">
           <div className="loginHeader">Login</div>
           <TextField required
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {props.onSelectionUsername}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {props.onSelectionPassword}
               />
             <br/>
             <button className="loginBtn" onClick={props.onLogin}>Login
            </button>
         </div>
         </MuiThemeProvider>
      </div>
    );
}
const style = {
 margin: 15,
};
export default withRouter(LoginComponent);