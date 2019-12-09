import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { SearchInput } from './SearchInput';
import { fetchProductsBySearch } from '../../actions/ProductsBySearch';

const useStyles = makeStyles(theme => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
    searchField: {
        color: '#fff'
    }
}));

export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Bike shop
                        </Typography>
                        <div>
                        <IconButton aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <SearchInput />
                        </div>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}