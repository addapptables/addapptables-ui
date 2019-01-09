import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import * as React from 'react';

export const Post = ({ title = '' }) => (
    <Card style={{ margin: '20px' }}>
        <CardHeader
            avatar={<Avatar aria-label='Recipe'>SD</Avatar>}
            action={<IconButton> <MoreVertIcon /> </IconButton>}
            title={title}
            subheader='September 14, 2016'
        />
        <CardMedia
            // tslint:disable-next-line:max-line-length
            image='http://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_Google_2013_Official.svg/1280px-Logo_Google_2013_Official.svg.png'
            title='Google'
        />
        <CardContent>
            <Typography component='p'>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
        </CardContent>
        <CardActions disableActionSpacing={true}>
            <IconButton aria-label='Add to favorites'>
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='Share'>
                <ShareIcon />
            </IconButton>
        </CardActions>
    </Card>
);
