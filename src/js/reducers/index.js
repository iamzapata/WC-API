import { combineReducers } from 'redux';
import { matches, matchesHasErrored, matchesIsLoading } from './matches';

export default combineReducers({
    matches,
    matchesHasErrored,
    matchesIsLoading
});