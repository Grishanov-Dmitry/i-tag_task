import React from 'react';

export class User extends React.Component {
    render() {
        return(
            
            <div className='user-information__block' onClick={()=>this.props.onClick(this.props.id)}>
                <h1>{this.props.userName}</h1>
                <p>{this.props.email}</p>
                <p>{this.props.street}</p>
                <p>{this.props.city}</p>
            </div>
            
        )
    }
}
