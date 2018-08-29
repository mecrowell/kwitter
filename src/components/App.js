import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect } from 'react-redux'
import './App.css';
import { registerUser , registerSuccess , registerFail } from './action'
import LoginForm from "./login.jsx"
import EditProfileForm from "./editProfile.jsx"
import RegisterUserForm from "./register.jsx"
import MessageFeed from './feed';
import Message from "./messsage.jsx"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MessageFeed></MessageFeed>
        <RegisterUserForm></RegisterUserForm>
        <LoginForm></LoginForm>
        <EditProfileForm></EditProfileForm>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: {
    token: state.auth.token,
    success: state.auth.success
  },
  messages: state.messages,
  user:state.user,
  isRegisterSuccess: state.isRegisterSuccess
});

const mapDispatchToProps = (dispatch) => {
  return {
    registerSuccess: (userName, displayName) => {
      dispatch(registerSuccess(userName, displayName))
    },
    registerUser: (username, password, displayName) => {
      dispatch(registerUser(username, password, displayName))
    },
    registerFail: () => {
      dispatch(registerFail())
    }
  }
}

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(App));
