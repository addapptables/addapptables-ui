import * as React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

export const Menu = ({ items = [] }) => (
    <MenuList style={{ margin: '20px' }}>
        {items.map(({ icon, text }, index) => (
            <MenuItem key={index}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <Typography variant='inherit'>
                    {text}
                </Typography>
            </MenuItem>
        ))}
    </MenuList>
);
