import React from 'react';
import { connect } from 'react-redux';

export class AllUserComment extends React.Component {
    render() {
        return(
            <div>
                <div className='allComment'>
                <h1>My whole comment</h1> <br />
                    <p>
                        {this.props.allState.currentComment}
                    </p>
                </div>
            </div>
        )
    }
}

export default connect( (state) => {
    return {
        allState: state
    }
}) (AllUserComment);