import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import * as React from 'react';


export class Header extends React.Component {

    public render = () => (
        <div>
            <AppBar>
                <Toolbar>
                    Header
                    </Toolbar>
            </AppBar>
        </div>
    );

}
