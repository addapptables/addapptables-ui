import { put } from 'redux-saga/effects';

export function* saveBlog() {
    yield put({ type: 'SAVE_BLOG' });
}
