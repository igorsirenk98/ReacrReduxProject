import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

import SearchInput from '../../containers/controls/SearchInput/SearchInput';

const Header = () => (
    <>
        <AppBar className="appbar" position="static">
            <Toolbar className="toolbar">
                <Typography variant="h6" noWrap>
                    <Tooltip title="Go to main page" arrow>
                        <Button>
                            <Link
                                to={{ pathname: '/' }}
                                className="link"
                            >
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
