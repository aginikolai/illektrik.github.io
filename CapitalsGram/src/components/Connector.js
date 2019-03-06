import {connect} from 'react-redux';

import {addLike}  from '../actions/index';
import Main from './Main'

const mapStateToProps = (state)=> {
    return {
        data: state.data,
        test: state.test,
        comments: state.comments
    }
}

const mapDispachToProps = (dispach) => {
    return {
        addLike: (id)=> dispach(addLike(id))
    }
}

const Connector = connect(mapStateToProps, mapDispachToProps)(Main);

export default Connector;
