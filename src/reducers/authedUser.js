import { SET_AUTHED_USER, REMOVE_AUTHED_USER, ADD_USER_QUESTION, ADD_USER_ANSWER } from '../actions/authedUser';

export const authedUser = (state = null, action) => {
    switch (action.type) {
        case SET_AUTHED_USER:
            return {...action.user };
        case REMOVE_AUTHED_USER:
            return null;
        case ADD_USER_QUESTION:
            return {
                ...state,
                questions: [...state.questions, action.id]
            };
        case ADD_USER_ANSWER:
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [action.qid]: action.answer
                }
            };
        default:
            return state;
    }
}

export default authedUser;