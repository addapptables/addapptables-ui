import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';

const style = {
    cursor: 'pointer',
    margin: '10px',
};

const AvatarIcon = ({ name }: any) => (
    <div style={style}>
        <Avatar>{name}</Avatar>
    </div>
);

const contacts = [
    { name: 'SD' },
    { name: 'ED' },
    { name: 'TQ' },
    { name: 'SD' },
    { name: 'ED' },
    { name: 'TQ' },
    { name: 'SD' },
    { name: 'ED' },
    { name: 'TQ' },
    { name: 'SD' },
    { name: 'ED' },
    { name: 'TQ' },
    { name: 'SD' },
    { name: 'ED' },
    { name: 'TQ' },
];

export const Chat = () => (
    <div className='chat'>
        {contacts.map((contact, index) => (<AvatarIcon key={index} {...contact} />))}
    </div>
);
