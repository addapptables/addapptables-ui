import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';

const styleContainer: React.CSSProperties = {
    background: 'gray',
    height: '20rem',
};

const styleAvatar: React.CSSProperties = {
    height: 100,
    left: '20px',
    position: 'relative',
    top: '200px',
    width: 100,
};

const styleName: React.CSSProperties = {
    fontSize: '28px',
    left: '146px',
    position: 'relative',
    top: '135px',
};

export const BackgroundProfile = () => (
    <div style={styleContainer}>
        <Avatar style={styleAvatar}>SD</Avatar>
        <div style={styleName}>Sebastian De La Roche López</div>
    </div>
);
