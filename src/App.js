import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default class App extends React.Component { 
  constructor(props) { 
    super(props) 
    this.state = { 
    users: [] 
    } 
  } 
  componentDidMount() { 
    axios.get('http://localhost:8000/users').then( 
      res => { 
      const users = res.data; 
      this.setState({ users }); 
    });
  }
    render() { 
      return ( 
        <div className="App"> 
          <img src={logo} className="App-logo" alt="logo" /> 
          <h3>Our Users</h3> 
          <p> 

          {this.state.users.map(user => <li>{user.user} - {user.job}</li>)} 

          </p>

        </div> 
      ); 
   } 
}