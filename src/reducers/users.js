import { ADD_USER_ANSWER, ADD_USER_QUESTION, RECIEVE_USERS } from '../actions/users';

const users = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case ADD_USER_QUESTION:
            return {
                ...state,
                ...state[action.userId],
                questions: [...state[action.userId].questions, action.qid]
            };
        case ADD_USER_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            };
        default:
            return state;
    }
}

export default users;