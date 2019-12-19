import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { history } from '../../../history/history';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';

import { searchInputChange } from './actions';

const mapStateToProps = state => ({
    searchValue: state.searchInput.payload.searchValue
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        searchInputChange
    }, dispatch);
};

export class SearchInput extends Component {
    handleChange = e => {
        const { value } = e.target;
        this.props.searchInputChange(value);
    }

    handleSearchSubmit = e => {
        if (e.keyCode === 13) {
            history.push(this.generateUrl());
        }
    }

    generateUrl() {
        const { searchValue } = this.props;
        const pathname = searchValue ?
            `/products/search=${encodeURIComponent(searchValue)}` : '/';

        return pathname;
    }

    render() {
        const { searchValue } = this.props;

        return (
            <>
                <Tooltip title="Click to search" arrow>
                    <Link to={this.generateUrl()}>
                        <IconButton className="header__search-icon" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Link>
                </Tooltip>
                <InputBase
                    className="header__input"
                    value={searchValue}
                    placeholder="Search bikes…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={this.handleChange}
                    onKeyDown={this.handleSearchSubmit}
                />
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);