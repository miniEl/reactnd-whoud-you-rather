import { getUsers, getQuestions, saveQuestion, saveQuestionAnswer } from '../utils/api';
import { addUserAnswer, recieveUsers, addUserQuestion } from './users';
import { answerQuestion, newQuestion, recieveQuestions } from './questions';
import { authedUserQuestion, authedUserAnswer } from './authedUser';
import { setPath } from "./path";

export function handleInitialData(path) {
    return (dispatch) => {
        return (
            getUsers().then((users) => {
                dispatch(recieveUsers(users));
            }),
            getQuestions().then((questions) => {
                dispatch(recieveQuestions(questions));
            }),
            dispatch(setPath(path))
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

export function handleSaveQuestion(question, path) {
    return (dispatch) => {
        return saveQuestion(question).then((formattedQuestion) => {
            dispatch(newQuestion(formattedQuestion));
            dispatch(authedUserQuestion(formattedQuestion.id));
            dispatch(addUserQuestion(formattedQuestion.author, formattedQuestion.id));
            dispatch(setPath(path));
        })
    }
}