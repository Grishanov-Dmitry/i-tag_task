import React from 'react';

export class Comment extends React.Component {
    render() {
        return(
                <p onClick={()=>this.props.onClick(this.props.id)} >{this.props.id} {this.props.comment}</p>
        )
    }
}