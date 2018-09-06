import UserPostWithComments from '../';
import { connect } from 'react-redux';

const UserPostWithCommentsWrapper = () => {
    return ( 
        <UserPostWithComments  />
    );
};
 
function mapStateToProps (state) {
    return {
        allState: state
    };
}

export default connect(mapStateToProps)(UserPostWithCommentsWrapper);