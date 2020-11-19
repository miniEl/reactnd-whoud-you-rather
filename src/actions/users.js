export const RECIEVE_USERS = 'RECIEVE_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';

export const recieveUsers = (users) => {
    return {
        type: RECIEVE_USERS,
        users
    }
}

export const addUserQuestion = (userId, qId) => {
    return {
        type: ADD_USER_QUESTION,
        userId,
        qId
    }
}

export const addUserAnswer = (userid, qId, answer) => {
    return {
        type: ADD_USER_ANSWER,
        userid,
        qId,
        answer
    }
}