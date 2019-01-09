import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export const News = ({ title, text, style = {} }: any) => (
    <Card style={style}>
        <CardActionArea>
            <CardMedia
                image='https://ieltsonlinetests.com/sites/default/files/News-Image.jpg'
                title='Contemplative Reptile'
            />
            <CardContent>
                <Typography gutterBottom={true} variant='h5' component='h2'>
                    {title}
                </Typography>
                <Typography component='p'>
                    {text}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);
