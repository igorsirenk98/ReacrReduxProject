import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadingStart, loadingEnd } from './actions';

const mapStateToProps = state => ({
    isLoading: state.loadingAnimation.payload
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loadingStart,
        loadingEnd
    }, dispatch);
};

export class Loading extends Component {
    render() {
        return (
            <ReactLoading
                type="spinningBubbles"
                color="#000"
                height="50px"
                width="50px"
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);