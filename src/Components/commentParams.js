import React from 'react';
import UserCommentsBlock from './userCommentsBlock';

export class CommentParams extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <UserCommentsBlock />
                <p> {this.props.match.params.id}</p>
            </div>
        )
    }
}