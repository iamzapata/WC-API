/**
 * Actions
 */

export function matchesHasErrored(bool) {

    return {
        type: 'MATCHES_HAS_ERRORED',
        hasErrored: bool
    };
    
}

export function matchesIsLoading(bool) {

    return {
        type: 'MATCHES_IS_LOADING',
        isLoading: bool
    };

}

export function matchesFetchDataSuccess(matches) {

    return {
        type: 'MATCHES_FETCH_DATA_SUCCESS',
        matches
    };

}

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