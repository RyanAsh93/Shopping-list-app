import React from 'react'
import { Header } from 'semantic-ui-react'

class Instructions extends React.Component {
  render() {
    return(
      <div style={styles}>
        <br />
        <Header as='h1'>Welcome to the Shopping List App</Header>
        <h2>Please Register to make an account</h2>
        <h2>Login to access the Shopping List</h2>
        <h2>Once logged in you're able to enter, delete, and cross off items</h2>
        <h2>Your list will be saved if you logout of your account</h2>
        <h3>Contact Creater: ryanashworth93@yahoo.com</h3>
      </div>
    )
  }
}

export default Instructions;

const styles = {
  textAlign: 'center',
}
