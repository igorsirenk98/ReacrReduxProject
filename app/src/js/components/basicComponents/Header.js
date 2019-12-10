import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import SearchInput from './SearchInput';
import { fetchProductsBySearch } from '../../actions/ProductsBySearch';

const navStyles = {
    display: 'flex',
    'justifyContent': 'space-between'
};

export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <AppBar position="static">
                    <Toolbar style={navStyles}>
                        <Typography variant="h6" noWrap>
                            <Link
                                to={{
                                    pathname: "/products/top-products"
                                }}>
                                Bike shop
                            </Link>
                        </Typography>
                        <div>
                        <SearchInput />
                        </div>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}