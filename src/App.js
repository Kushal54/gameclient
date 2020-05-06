import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import MyRouter from './RouterComponents/MyRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  componentDidMount() {
    console.log('App JS Component did mount')
  }
  componentWillMount() {
    console.log('BEFORE App component mount')
}
  render() {
    console.log('App Js Rendered')
    return (
      <Router>
        <MyRouter />
      </Router>
    )
  }
}

export default App;
