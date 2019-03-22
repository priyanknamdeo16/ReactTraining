
import React, {Component} from 'react';
import LoginComponent from '../login/loginComponent';
import RoutesConstants from '../../constants/route.constants';
import {withRouter} from 'react-router-dom';
import { Redirect } from 'react-router';

class LoginContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password : '',
      isLoggedIn: false
    };
    this.login = this.login.bind(this);
    this.onSelectionUsername=this.onSelectionUsername.bind(this);
    this.onSelectionPassword=this.onSelectionPassword.bind(this);
  }
  login() {
    const username = this.state.username;
    const password = this.state.password;
    if(username && password){
        this.setState({isLoggedIn: true});
      }
  }
  onSelectionUsername(event){
    const field = event.target.value;
    this.setState({username: event.target.value });
    // this.state.username = field;
  }
  onSelectionPassword(event){
    const field = event.target.value;
    this.setState({password: event.target.value });
    // this.state.password = field;
  }
    render() {
      const {isLoggedIn} = this.state;
      if(isLoggedIn) {
        return <Redirect to= "/customers"/>
      } else {
        return <LoginComponent onLogin={this.login} onSelectionUsername = {this.onSelectionUsername} onSelectionPassword = {this.onSelectionPassword} /> 
      }
    }
}
export default withRouter(LoginContainer);