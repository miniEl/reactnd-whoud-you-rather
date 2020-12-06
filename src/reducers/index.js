import { combineReducers } from 'redux';
import users from './users';
import authedUser from './authedUser';
import questions from './questions';
import path from "./path";

export default combineReducers({ users, authedUser, questions, path });