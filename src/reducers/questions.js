import { ANSWER_QUESTION, NEW_QUESTION, RECIEVE_QUESTIONS } from '../actions/questions';

const questions = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case NEW_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            };
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],

                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: [...state[action.qid][action.answer].votes, action.authedUser]
                    }
                }
            };
        default:
            return state;
    }
}

export default questions;