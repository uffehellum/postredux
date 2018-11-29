import React, { Component } from 'react'
import Redux from 'redux'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/postActions'
import {Post} from '../../actions/types'

export interface OwnProps {
  propFromParent: number
}

interface StateProps {
  posts: Post[] // FromReduxStore
}
     
interface DispatchProps {
  fetchPosts: () => void
}
 
type Props = StateProps & DispatchProps & OwnProps
 
interface State {
  // posts: Post[]
}

class PostList extends Component<Props, State, any> {

  constructor(props: Props) {
    super(props)
  }

  componentWillMount() {
    console.log('Posts.componentWillMount()')
    this.props.fetchPosts()
  }

  renderPost = (p: Post) =>
    <tr key={p.id}>
      <td>{p.id}</td>
      <td>{p.title}</td>
      <td>{p.userId}</td>
    </tr>

  renderPosts = (posts: Post[]) =>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>userid</th>
        </tr>
      </thead>
      <tbody>
        {posts && posts.map(this.renderPost)}
      </tbody>
    </table>

  render = () =>
    <div>
      <h1>Posts</h1>
      {this.props && this.props.posts && this.renderPosts(this.props.posts)}
    </div>
}

interface myReduxState {
  posts: Post[]
}

function mapStateToProps(state: myReduxState, ownProps: OwnProps): StateProps {
  return {
    ...ownProps,
    posts: state.posts
  }
}
 
function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
  return {
    // ...ownProps,
    fetchPosts : () => fetchPosts()(dispatch)
  }
}

interface initialState {
  posts:Post[]
}

export default connect
  <myReduxState, DispatchProps, OwnProps, initialState>
  (mapStateToProps, mapDispatchToProps)
  (PostList)
