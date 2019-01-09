import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Chat } from './components/Chat';
import Header from './components/Header';

import { Home } from './pages/home';
import { Profile } from './pages/profile';
import { Blog } from './pages/blog';

export const In = () => (
    <div className='main-container'>
        <Header />
        <div style={{ paddingTop: '64px', flex: 1 }}>
            <Router>
                <div>
                    <Route exact={true} path='/' component={Home} />
                    <Route path='/home' component={Home} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/blog' component={Blog} />
                </div>
            </Router>
        </div>
        <Chat />
    </div>
);
