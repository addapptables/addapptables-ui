import { all, fork } from 'redux-saga/effects';
import { values } from 'ramda';

import * as blog from './blog';

export default function*() {
    yield all(
        [...values(blog)].map(fork),
    );
}
