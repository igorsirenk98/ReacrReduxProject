import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';

import { fetchProductsBySearch } from '../../actions/ProductsBySearch';
import { searchInputChange } from '../../actions/SearchInput';

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
        const pathname = searchInputValue ? `/products/search=${searchInputValue}` :
                                            '/products/top-products';

        return (
            <>
                <Tooltip title="Click to search" arrow>
                    <Link to={{
                        pathname
                    }}>
                        <IconButton aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Link>
                </Tooltip>
                <InputBase
                    value={searchInputValue}
                    placeholder="Search bikes…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={this.handleChange}
                />
            </> 
        )
    }
}

export default connect(mapStateToProps)(SearchInput);