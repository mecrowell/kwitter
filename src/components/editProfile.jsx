import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {connect } from 'react-redux'
import { editProfile } from './action'
import Navbar from "./navbar.jsx"


//need to work out conditions for checking if passwords match and if old password mathches before submitting new
class EditProfileForm extends React.Component{

  state = {
    username: "",
    oldPassword: "",
    password: "",
    passwordMatch: "",
  }
  //click handler

  handleSubmitProfile = () => {
    this.props.userLogin(this.state.username, this.state.password, this )
  }

  handleChangeUser = (event) => {
    this.setState({username: event.target.value})
  }
  //need to have condition that password matches password stored on api 
  //then must check that two new passwords match and then submit that to api
  handleChangePassword = (event) => {
    if (this.state.newPassword === this.state.passwordMatch) {
      this.setState({password: event.target.value})
    }
  }

  handleChangePasswordMatch = (event) => {
    this.setState({passwordMatch: event.target.value})
  }

  handleChangeOldPassword = (event) => {
    this.setState({oldPassword: event.target.value})
  }

  render(){
    return (
      <div className='login-form'>
         <style> {`
           body > div,
           body > div > div,
           body > div > div > div.login-form {
             height: 100%;
           }
         `}</style>
        <Navbar></Navbar>
        <Grid textAlign='center' style={{ height: '100%', verticalAlign:'flex-start', marginTop: "100px" }}>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src="logo.ico" />Update your profile
        </Header>
        <Form size='large'>
          <Segment stacked>
          <Form.Input
              fluid
              required
              value= {this.state.username}
              icon='user' 
              iconPosition='left' 
              placeholder='Username'
              onChange={this.handleChangeUser}
              />
            <Form.Input
              fluid
              required
              value= {this.state.oldPassword}
              icon='lock' 
              iconPosition='left' 
              placeholder='Old password'
              type="password"
              onChange={this.handleChangeOldPassword}
              />
            <Form.Input
              fluid
              required
              value= {this.state.password}
              icon='lock'
              iconPosition='left'
              placeholder='New password'
              type='password'
              onChange={this.handleChangePassword}
            />
              <Form.Input
              fluid
              required
              value={this.state.passwordMatch}
              icon='lock'
              iconPosition='left'
              placeholder='Re-enter new password'
              type='password'
              onChange={this.handleChangePasswordMatch}
            />
            <Button color='teal' fluid size='large' onClick={this.props.registerUser}>
              Submit Changes
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
    )
  }
}

//only need to map async props here
const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: (username, password) => {
      dispatch(editProfile(username, password))
    },
    // registerSuccess: (userName, displayName) => {
    //   dispatch(registerSuccess(userName, displayName))
    // },
    // registerFail: () => {
    //   dispatch(registerFail())
    // } 
  }
}

export default connect( null , mapDispatchToProps )(EditProfileForm)