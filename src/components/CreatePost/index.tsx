import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InsertComment from '@material-ui/icons/InsertComment';
import OndemandVideo from '@material-ui/icons/OndemandVideo';
import AddAPhoto from '@material-ui/icons/AddAPhoto';

export const CreatePost = () => (
    <Card style={{ margin: '20px' }}>
        <CardContent>
            <InputBase
                fullWidth={true}
                placeholder='What do you think?'
            />
        </CardContent>
        <CardActions disableActionSpacing={true}>
            <div style={{ flex: 1 }}>
                <IconButton color='inherit'>
                    <InsertComment />
                </IconButton>
                <IconButton color='inherit'>
                    <AddAPhoto />
                </IconButton>
                <IconButton color='inherit'>
                    <OndemandVideo />
                </IconButton>
            </div>
            <Button variant='contained' size='small' color='primary'>
                Post
            </Button>
        </CardActions>
    </Card>
);
