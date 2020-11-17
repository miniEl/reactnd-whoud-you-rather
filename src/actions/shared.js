import { getUsers } from '../utils/api';
import { recieveUsers } from './users';

export function handleInitialData() {
    return (dispatch) => {
        // dispatch(showLoading());
        return getUsers()
            .then((users) => {
                dispatch(recieveUsers(users));
                // dispatch(hideLoading());
            });
    }
}