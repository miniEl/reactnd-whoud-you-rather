export const RECIEVE_USERS = 'RECIEVE_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';

export const recieveUsers = (users) => {
    return {
        type: RECIEVE_USERS,
        users
    }
}

export const addUserQuestion = (userId, qid) => {
    return {
        type: ADD_USER_QUESTION,
        userId,
        qid
    }
}

export const addUserAnswer = (authedUser, qid, answer) => {
    return {
        type: ADD_USER_ANSWER,
        authedUser,
        qid,
        answer
    }
}