export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';

export const setAuthedUser = (user) => {
    return {
        type: SET_AUTHED_USER,
        user
    }
}

export const removeAuthedUser = () => {
    return {
        type: REMOVE_AUTHED_USER
    }
}

export const userQuestion = (id) => {
    return {
        type: ADD_USER_QUESTION,
        id
    }
}

export const authedUserAnswer = (authedUser, qid, answer) => {
    return {
        type: ADD_USER_ANSWER,
        authedUser,
        qid,
        answer
    }
}