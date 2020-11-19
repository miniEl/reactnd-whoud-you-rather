import { getUsers, getQuestions } from '../utils/api';
import { recieveUsers } from './users';
import { recieveQuestions } from './questions';

export function handleInitialData() {
    return (dispatch) => {
        return (
            getUsers().then((users) => {
                dispatch(recieveUsers(users));
            }),
            getQuestions().then((questions) => {
                dispatch(recieveQuestions(questions));
            })
        )
    }
}