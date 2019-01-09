import * as React from 'react';

import Grid from '@material-ui/core/Grid';

import { Register } from '../../components/Register';
import { SignIn } from '../../components/SignIn';

export const Logout = () => (
    <Grid container={true}>
        <Grid item={true} xs={6}>
            Any introduce content
        </Grid>
        <Grid item={true} xs={6}>
            <Grid item={true} xs={12}>
                <SignIn />
            </Grid>
            <Grid item={true} xs={12}>
                <Register />
            </Grid>
        </Grid>
    </Grid>
);
