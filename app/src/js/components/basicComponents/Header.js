import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

import SearchInput from './SearchInput';
import { fetchProductsBySearch } from '../../actions/ProductsBySearch';

const Header = (props) => (
    <>
        <AppBar position="static">
            <Toolbar className="header">
                <Typography variant="h6" noWrap>
                    <Tooltip title="Go to main page" arrow>
                        <Button>
                            <Link
                                to={{
                                    pathname: "/products/top-products"
                                }}
                                className="link">
                                    Bike shop
                                    <DirectionsBikeIcon />
                                </Link>
                        </Button>
                    </Tooltip>
                </Typography>
                <div>
                <SearchInput />
                </div>
            </Toolbar>
        </AppBar>
    </>
);

export default Header;