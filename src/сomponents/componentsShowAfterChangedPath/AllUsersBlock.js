import React from 'react'
import { connect } from 'react-redux'
import loadUsers from '../../action/loadUsers'
import { User } from '../simpleComponents'
import loadUsersPosts from '../../action/loadUserPosts'
import saveUserId from '../../action/saveCurrentUserId'
import Slider from 'react-slick'
import { settings } from '../../style/sliderSettings'

class AllUsersBlock extends React.Component {
  constructor (props) {
    super(props)
    this.showUserPosts = this.showUserPosts.bind(this)
  }

  saveCurrentUserId (id) {
    this.props.saveUserId(id)
  }

  loadUserPosts (id) {
    this.props.loadUsersPosts({ type: 'LOAD_USER_POSTS', id })
  }

  showUserPosts (id) {
    this.saveCurrentUserId(id)
    this.loadUserPosts(id)
  }

  componentDidMount () {
    this.props.loadUsers()
  }

  render () {
    const { users } = this.props.allState

    const content = users === undefined ? <h1>Loading</h1>
      : users.map((item, i) => {
        return (
          <User
            data={item}
            onClick={this.showUserPosts}
            key={i}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersBlock)
