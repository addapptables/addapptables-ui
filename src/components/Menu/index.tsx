import * as React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import InsertComment from '@material-ui/icons/InsertComment';
import OndemandVideo from '@material-ui/icons/OndemandVideo';
import AddAPhoto from '@material-ui/icons/AddAPhoto';

export const Menu = () => (
    <MenuList style={{ margin: '20px' }}>
        <MenuItem>
            <ListItemIcon>
                <InsertComment />
            </ListItemIcon>
            <Typography variant='inherit'>
                Blogs
            </Typography>
        </MenuItem>
        <MenuItem>
            <ListItemIcon>
                <AddAPhoto />
            </ListItemIcon>
            <Typography variant='inherit'>
                Pictures
            </Typography>
        </MenuItem>
        <MenuItem>
            <ListItemIcon>
                <OndemandVideo />
            </ListItemIcon>
            <Typography variant='inherit'>
                Videos
          </Typography>
        </MenuItem>
    </MenuList>
);
