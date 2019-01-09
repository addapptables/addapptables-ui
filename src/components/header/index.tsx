import * as React from 'react';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';

const searchIcon: React.CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: '0 5px 0 5px',
};

const inputSearch: React.CSSProperties = {
    color: 'inherit',
    width: '100%',
};

const search: React.CSSProperties = {
    display: 'flex',
    flex: 1,
    backgroundColor: fade('#FFF', 0.15),
    width: '100%',
    borderRadius: 2,
};

class Header extends React.Component {

    public render = () => (
        <AppBar position='fixed'>
            <Toolbar>
                <div style={search}>
                    <div style={searchIcon}> <SearchIcon /> </div>
                    <InputBase style={inputSearch} placeholder='Search…' />
                </div>
                <div style={{}}>
                    <IconButton color='inherit'>
                        <Badge badgeContent={17} color='secondary'>
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color='inherit'>
                        <AccountCircle />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )

}

export default Header;
