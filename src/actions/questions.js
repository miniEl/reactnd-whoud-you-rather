export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const NEW_QUESTION = "NEW_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export const recieveQuestions = (questions) => {
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
}

export const newQuestion = (question) => {
    return {
        type: NEW_QUESTION,
        question
    }
}

export const answerQuestion = (authedUser, qid, answer) => {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}