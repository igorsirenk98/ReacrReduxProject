import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchProductsBySearch } from '../../actions/ProductsBySearch';
import { searchInputChange } from '../../actions/SearchInput';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const mapStateToProps = state => ({
    searchInputValue: state.searchInputChange.searchInputValue
});

class SearchInput extends Component {
    handleChange = e => {
        const { value } = e.target;
        this.props.dispatch(searchInputChange(value));
    }

    render() {
        const { searchInputValue } = this.props;

        return (
            <>
                <Link to={{
                    pathname: `/products/search=${searchInputValue}`
                }}>
                    <IconButton aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Link>
                <InputBase
                    value={searchInputValue}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={this.handleChange}
                />
            </> 
        )
    }
}

export default connect(mapStateToProps)(SearchInput);