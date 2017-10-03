import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Default from './components/Default'
// import { Provider } from 'react-redux'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Default} className="Default" />
        <p>hi hi hi hi</p>
      </div>
    );
  }
}

export default App;
