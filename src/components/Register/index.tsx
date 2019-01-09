import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';

export const Register = () => (
    <Card>
        <CardContent>
            <form>
                <TextField
                    label='Names'
                    placeholder='Write your names....'
                    margin='normal'
                    fullWidth={true}
                />
                <TextField
                    label='Surnames'
                    placeholder='Write your surnames....'
                    margin='normal'
                    fullWidth={true}
                />
                <TextField
                    label='Birth'
                    placeholder='Choice your birthday....'
                    margin='normal'
                    fullWidth={true}
                />
                <TextField
                    label='Country'
                    placeholder='Choice your country....'
                    margin='normal'
                    fullWidth={true}
                />
                <TextField
                    label='Location'
                    placeholder='Choice your location....'
                    margin='normal'
                    fullWidth={true}
                />
                <TextField
                    label='Cellphone'
                    placeholder='Write your cellphone number....'
                    margin='normal'
                    fullWidth={true}
                />
                <TextField
                    label='Email'
                    placeholder='Write your email address....'
                    margin='normal'
                    fullWidth={true}
                />
            </form>
        </CardContent>
        <CardActions>
            <Button
                color='primary'
                fullWidth={true}
            >
                Register
            </Button>
        </CardActions>
    </Card>
);
