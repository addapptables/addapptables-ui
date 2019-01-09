import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';

export const SignIn = () => (
    <div>
        <form style={{ display: 'inline-flex' }}>
            <TextField
                label='Username'
                placeholder='Write your username....'
                margin='normal'
            />
            <TextField
                label='Password'
                type='password'
                placeholder='Write your Password....'
                margin='normal'
            />
            <Button color='primary'>Sign In</Button>
        </form>
    </div>
);
