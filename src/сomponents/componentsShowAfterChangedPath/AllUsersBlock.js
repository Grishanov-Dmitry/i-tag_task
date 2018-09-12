import React from 'react';
import { connect } from 'react-redux';
import loadUsers from '../../action/loadUsers';
import { User } from '../simpleComponents';
import loadUsersPosts from '../../action/loadUserPosts';
import saveUserId from '../../action/saveCurrentUserId';
import Slider from 'react-slick';
import { settings } from '../../style/sliderSettings';

const showUserPosts = (props, id) => {
    props.saveUserId(id);
    props.loadUsersPosts({ type: 'LOAD_USER_POSTS', id }); 
};

const getContent = (users, props) => 
    users.map((item, i) => (
        <User
            data={item}
            onClick={ (id) => showUserPosts(props, id) }
            key={i}
        />
    ));

export const AllUsersBlock = (props) => {
     
    const { users } = props;

    const content = getContent(users, props);

    return (
        <div className='user__block'>
            <div className={'wripper__user-information__block'}>
                <Slider {...settings}>
                    {content}
                </Slider>
            </div>
        </div>
    );
};

const mapStateToProps = ({users}) => ({
    users
});

const mapDispatchToProps = dispatch => ({
    saveUserId: (id) => {
        dispatch(saveUserId(id));
    },
    loadUsersPosts: (data) => {
        dispatch(loadUsersPosts(data));
    },
    loadUsers: (data) => {
        dispatch(loadUsers(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersBlock);