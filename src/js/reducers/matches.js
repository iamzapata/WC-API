/**
 * Reducers
 */

export function matchesHasErrored(state = false, action) {

    switch (action.type) {
        case 'MATCHES_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }

}

export function matchesIsLoading(state = false, action) {

    switch (action.type) {
        case 'MATCHES_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }

}

export function matches(state = [], action) {

    switch (action.type) {
        case 'MATCHES_FETCH_DATA_SUCCESS':
            return action.matches;
        default:
            return state;
    }
    
}
