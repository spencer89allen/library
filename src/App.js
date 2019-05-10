import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';



import './App.css'
import routes from './routes.js';
import { login } from './redux/LoginReducer';


class App extends Component {

  componentWillMount() {
    axios.get(`/api/me`).then((response) => {
      this.props.login(response.data)
    })
  }

  render() {
    return (
      <div>
        { routes }
      </div>
    );
  }
}

export default connect(null, { login })(App);
