import React from 'react'
import { connect } from 'react-redux'
import loadUsers from '../action/loadUsers'
import { User } from './User'
import loadUsersPosts from '../action/loadUserPosts'
import { Link } from 'react-router-dom'
import saveUserId from '../action/saveCurrentUserId'
import Slider from 'react-slick'
import { settings } from './sliderSettings'

class UserData extends React.Component {
  constructor (props) {
    super(props)
    this.fetchData = this.fetchData.bind(this)
    this.showUserPosts = this.showUserPosts.bind(this)
  }

  saveCurrentUserId (id) {
    this.props.saveUserId(id)
  }

  loadUserPosts (id) {
    this.props.loadUsersPosts({ type: 'LOAD_USER_POSTS', id })
    // this.props.loadUsersPosts({ type: 'LOAD_USER_POSTS', id })
    // fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    //   .then(response => response.json())
    //   .then(usersDate => this.props.loadUsersPosts(usersDate)
    //   )
  }

  showUserPosts (id) {
    this.saveCurrentUserId(id)
    this.loadUserPosts(id)
  }

  fetchData () {
    
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(usersDate => this.props.loadUsers(usersDate)
    //   )
  }

  componentDidMount () {
    this.props.loadUsers()
    // this.fetchData()
  }

  render () {
    let content = this.props.allState.users === undefined ? <h1>Loading</h1>
      : this.props.allState.users.map((item, i) => {
        return (
          <Link to='/user-posts' key={i}>
            <User
              data={item}
              onClick={this.showUserPosts}
            />
          </Link>
        )
      })

    return (
      <div className='user__block'>
        <div className={'wripper__user-information__block'}>
          <Slider {...settings}>
            {content}
          </Slider>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    allState: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveUserId: (id) => {
      dispatch(saveUserId(id))
    },
    loadUsersPosts: (data) => {
      dispatch(loadUsersPosts(data))
    },
    loadUsers: (data) => {
      dispatch(loadUsers(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserData)
