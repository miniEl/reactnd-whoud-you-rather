import { getUsers, getQuestions, saveQuestion, saveQuestionAnswer } from '../utils/api';
import { addUserAnswer, recieveUsers } from './users';
import { answerQuestion, newQuestion, recieveQuestions } from './questions';
import { userQuestion, authedUserAnswer } from './authedUser';

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

export function handleSaveAnswer(authedUser, qid, answer) {
    return (dispatch) => {
        return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
            dispatch(authedUserAnswer(authedUser, qid, answer));
            dispatch(addUserAnswer(authedUser, qid, answer));
            dispatch(answerQuestion(authedUser, qid, answer));

        })
    }
}

export function handleSaveQuestion(question) {
    return (dispatch) => {
        return saveQuestion(question).then((que) => {
            dispatch(newQuestion(que));
            dispatch(addUserQuestion(que.auther, que.id));
            dispatch(userQuestion(que.id));
        })
    }
}