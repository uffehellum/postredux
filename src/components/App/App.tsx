import React, { Component } from 'react'
import logo from './logo.svg'
import { Provider } from 'react-redux'
import PostForm from '../PostForm'
import PostList from '../PostList'
import store from '../../store'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Post
            <img src={logo} className="App-logo" alt="logo" />
            Redux
          </h1>
          <p>
            Redux from fake data source
          </p>
        </header>
        <Provider store={store}>
          <div>
            <PostForm />
            <hr />
            <PostList propFromParent={7} />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App
