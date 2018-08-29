import React from 'react';
import { connect } from 'react-redux';
import loadUsers from '../action/loadUsers';
import { User } from './user';
import loadUsersComments from '../action/loadUserComments';
import { Link } from 'react-router-dom';
import saveUserId from '../action/saveCurrentUserId';
import Slider from "react-slick";
import { settings } from './sliderSettings';

class UserData extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.showUserComments = this.showUserComments.bind(this);
    }

    saveCurrentUserId(id) {
        this.props.dispatch(
            saveUserId( id ) 
        )
    }

    loadUserComments(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => response.json())
            .then( usersDate => this.props.dispatch(
                loadUsersComments( usersDate )
            ))
      }
    
    showUserComments(id) {
        this.loadUserComments(id);
        this.saveCurrentUserId(id);
        
    }

    fetchData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then( usersDate => this.props.dispatch(
            loadUsers( usersDate )
        ))
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        let content = this.props.allState.users === undefined ? <h1>Loading</h1> : 
        
        this.props.allState.users.map((item, i) => {
                return (
                    <Link to='/user-comments' key={i}>
                    <User
                     key={item.id} 
                     userName={item.username} 
                     email={item.email}
                     street={item.address.street}
                     city={item.address.city}
                     onClick={this.showUserComments}
                     id={item.id}/>
                     </Link>
                ) 
            })
        ;

        return (
            <div className='user__block'>
                <div className={"wripper__user-information__block"}>
                <Slider {...settings}>
                    {content}
                </Slider>
                </div>
            </div>
        )
    }
}

export default connect( (state) => {
    return {
        allState: state
    }
}) (UserData);
