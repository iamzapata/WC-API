/**
 * Reducers
 */

/**
 * MATCHES_HAS_ERRORED Reducer
 */
export function matchesHasErrored(state = false, action) {

    const actions = {

        MATCHES_HAS_ERRORED: () => action.hasErrored,

        default: () => state
    }

    return  (actions[action.type] || actions['default'])();

}

/**
 * MATCHES_IS_LOADING Reducer
 */
export function matchesIsLoading(state = false, action) {

    const actions = {

        MATCHES_IS_LOADING: () => action.isLoading,

        default: () => state
    }

    return  (actions[action.type] || actions['default'])();

}

/**
 * MATCHES_FETCH_DATA_SUCCESS Reducer
 */
export function matches(state = [], action) {

    const actions = {

        MATCHES_FETCH_DATA_SUCCESS: () => action.matches,

        MATCHES_CLEAR_DATA: () => [],

        default: () => state
    }

    return (actions[action.type] || actions['default'])();
    
}
