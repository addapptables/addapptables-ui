import * as React from 'react';
import ShortText from '@material-ui/icons/ShortText';

import { Blog as BlogComponent } from '../../components/Blog';
import { Menu } from '../../components/Menu';

const items = [
    {
        icon: <ShortText />,
        text: 'Title My First Blog',
    },
];

export const Blog = () => (
    <div style={{ display: 'flex' }}>
        <div style={{ flex: 2 }}>
            <Menu items={items} />
        </div>
        <div style={{ flex: 10 }}>
            <BlogComponent />
        </div>
    </div>
);
