import React from 'react'
import { Header, Container, Segment, Form, Input, List } from 'semantic-ui-react'

class Home extends React.Component {
    state = { name: '', items: [] };

    handleSubmit = (e) => {
      e.preventDefault();
      const { name, items } = this.state;
      this.setState({ items: [name, ...items], name: ''})
    };


    render() {
      const { name, items } = this.state;
      return (
        <Container>
          <p align='center'>
            <iframe 
            src="http://free.timeanddate.com/clock/i7cgnf2u/n220/tt0/tw0" 
            frameborder="0" 
            width="260"
            height="18" 
            >
            </iframe>
            </p>
          <Segment textAlign='center'>
            <Header as='h1' textAlign='center'>Shopping List Home Page</Header>
            <Form onSubmit={this.handleSubmit}>
              <Input 
                required
                value={name}
                onChange={ e => this.setState({ name: e.target.value })}
              />
            </Form>
            <List>
              { items.map( (t,i) => <List.Item key={i}>{t}</List.Item>)}
            </List>
          </Segment>
        </Container>
      )
    }
}

export default Home;
