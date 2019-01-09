import * as React from 'react';
import { Post } from '../Post';

export const ListPost = ({ posts = [] }: any) => (
    <div>
        {posts.map((data: any, index: number) => (<Post key={index} {...data} />))}
    </div>
);
