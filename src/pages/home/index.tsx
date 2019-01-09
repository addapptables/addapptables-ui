import * as React from 'react';

import { ListPost } from '../../components/ListPost';
import { CreatePost } from '../../components/CreatePost';
import { Menu } from '../../components/Menu';
import { ListNews } from '../../components/ListNews';

const posts = [
    { title: 'One' },
    { title: 'Two' },
    { title: 'Three' },
    { title: 'Four' },
    { title: 'Five' },
];

const menu: any = {
    flex: '2',
    height: 'calc(100vh - 64px)',
    position: 'sticky',
    top: '64px',
};

const news: any = {
    flex: '3',
    height: 'calc(100vh - 64px)',
    position: 'sticky',
    top: '64px',
};

export const Home = () => (
    <div style={{ display: 'flex' }}>
        <div style={menu}>
            <Menu />
        </div>
        <div style={{ flex: 6 }}>
            <CreatePost />
            <ListPost posts={posts} />
        </div>
        <div style={news}>
            <ListNews />
        </div>
    </div>
);
