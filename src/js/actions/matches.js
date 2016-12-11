/**
 * Actions
 */

/**
 * MATCHES_HAS_ERRORED Action Creator
 * 
 * @param  bool Indicates if the fetch action has failed.
 * @return object Contains state change and action to dispatch.
 */
export function matchesHasErrored(bool) {

    return {
        type: 'MATCHES_HAS_ERRORED',
        hasErrored: bool
    };
    
}

/**
 * MATCHES_IS_LOADING Action Creator
 * 
 * @param  bool Indicates if the fetch action is active
 * @return object Contains state change and action to dispatch.
 */
export function matchesIsLoading(bool) {

    return {
        type: 'MATCHES_IS_LOADING',
        isLoading: bool
    };

}

/**
 * MATCHES_FETCH_DATA_SUCCESS Action Creator
 * 
 * @param  array matches List of fetched matches
 * @return object Contains state change and action to dispatch.
 */
export function matchesFetchDataSuccess(matches) {

    return {
        type: 'MATCHES_FETCH_DATA_SUCCESS',
        matches
    };

}

/**
 * MATCHES_CLEAR_DATA Action Creator
 * 
 * @return object Contains state change and action to dispatch.
 */
export function matchesClearData() {

    return {
        type: 'MATCHES_CLEAR_DATA'
    }

}

/**
 * Manages different states based on fetch state.
 * 
 * @param  string url
 * @return void
 */
export function matchesFetchData(url) {

    return (dispatch) => {

        dispatch(matchesIsLoading(true));

        fetch(url)

            .then((response) => {

                if (!response.ok) {

                    throw Error(response.statusText);

                }

                dispatch(matchesIsLoading(false));

                return response;
            })

            .then((response) => response.json())

            .then((matches) => dispatch(matchesFetchDataSuccess(matches)))

            .catch(() => dispatch(matchesHasErrored(true)));

    };

}