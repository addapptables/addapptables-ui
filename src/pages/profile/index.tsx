import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { BackgroundProfile } from '../../components/BackgroundProfile';
import { AboutMe } from '../../components/AboutMe';
import { ListPost } from '../../components/ListPost';
import { CreatePost } from '../../components/CreatePost';

const posts = [
    { title: 'One' },
    { title: 'Two' },
    { title: 'Three' },
    { title: 'Four' },
    { title: 'Five' },
];

export class Profile extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { currentTab: 0 };
    }

    public render() {
        const { currentTab } = this.state;
        let content;

        switch (currentTab) {
            case 0:
                content = (
                    <div>
                        <CreatePost />
                        <ListPost posts={posts} />
                    </div>
                );
                break;
            case 1:
                content = <AboutMe />;
                break;
        }

        return (
            <div>
                <BackgroundProfile />
                <AppBar position='static' color='default'>
                    <Tabs
                        value={currentTab}
                        onChange={this.changeTab}
                        indicatorColor='primary'
                        textColor='primary'
                        fullWidth={true}
                    >
                        <Tab label='Posts' />
                        <Tab label='About me' />
                    </Tabs>
                </AppBar>
                <div>
                    {content}
                </div>
            </div>
        );
    }

    private changeTab = (event: any, value: number) => this.setState({ currentTab: value });

}
