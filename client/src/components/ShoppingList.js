import React from 'react'
import { Button, Header, Container, Segment, Form, Input, List, Icon } from 'semantic-ui-react'
import Axios from 'axios';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    state = { name: '', items: [] };

    componentDidMount() {
      Axios.get('/api/items')
        .then( ({ data: items }) => this.setState({ items }))
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { name, items } = this.state;
      Axios.post('/api/items', { name })
        .then( ({ data }) => {
      this.setState({ items: [data, ...items], name: ''})
        })
    };

    updateItem = id => {
      Axios.put(`/api/items/${id}`)
        .then( ({ data }) => {
          const items = this.state.items.map( item => {
            if (item.id === id)
              return data
              return item
          })
          this.setState({ items })
        })
    }

    deleteItem = id => {
      Axios.delete(`/api/items/${id}`)
        .then(({ data }) => {
          const items = this.state.items.filter( item => {
            if (item.id ===id )
            return data
            return item
          })
          this.setState({items})
        })
    }

    render() {
      const { name, items } = this.state;
      return (
        <Container>
          <p align='center'>
            <br />
            <iframe 
            src="http://free.timeanddate.com/clock/i7cgnf2u/n220/tt0/tw0"   // working clock
            frameborder="0" 
            width="260"
            height="18" 
            >
            </iframe>
            </p>
          <Segment textAlign='center'>
            <Header as='h1' textAlign='center'>List</Header>
            <Form onSubmit={this.handleSubmit}>
              <Input
                required
                value={name}
                onChange={ e => this.setState({ name: e.target.value })}
              />
              {' '}
                <Button 
                color='blue'
                icon basic onClick={() => this.updateItem}
                >
                Add Item
                </Button>
            </Form>
            <List.Item>
              { items.map(item  => 
              <List.Item 
              as='h3'
              as={Link}
              key={item.id}
              style={item.complete ? styles.complete : {} }
              onClick={() => this.updateItem(item.id)}
              >
              {item.name}
              {' '}
              <Button 
              class="trash icon"
              size='mini'
              color='red'
              icon basic onClick={() => this.deleteItem(item.id)}
              >
               <Icon name="trash icon" />
              </Button>
              </List.Item>)}
            </List.Item>
          </Segment>
        </Container>
      )
    }
      
    
}

  const styles = {
      complete: {
      textDecoration: 'line-through',
      color: 'grey',
    }
  }
  const Size = {
    listSize: {
      textSize: '20px',
    }
  }

export default Home;
