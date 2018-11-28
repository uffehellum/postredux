import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PostForm from '../PostForm/PostForm'
import PostList from '../PostList'
import store from '../../store'

export default class PostApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <PostForm />
                    <hr />
                    <PostList propFromParent={7}/>
                </div>
            </Provider>
        )
    }
}
