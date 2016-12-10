import React from 'react';
import { connect } from 'react-redux';
import { matchesFetchData } from '../actions/matches';
import MatchList from './MatchList';
import Error from './Error';
import Loading from './Loading';

/**
 * Main Application Component
 */
class App extends React.Component {

    constructor(props) {
        super(props);

        // FIFA Country Code.
        this.state = {

            countryCode: ''

        };

        this.fetchMatches = this.fetchMatches.bind(this);
    }

    /**
     * Fetches matches for a given country.
     * 
     * @param  Event e onChange event.
     * @return void
     */
    fetchMatches(e) {

        const countryCode = e.target.value.toUpperCase();

        this.setState({ countryCode });

        if(countryCode.length < 3) return;
    
        this.props.fetchData(`http://worldcup.sfg.io/matches/country?fifa_code=${countryCode}`);

    }

    render() {


        if (this.props.hasErrored) {

            return <Error />
        }
        
        if (this.props.isLoading) {

            return <Loading />;

        }

        return (

            <MatchList 
                countryCode={this.state.countryCode} 
                matches={this.props.matches} 
                fetchMatches={this.fetchMatches}>
            </MatchList>
            
        );

    }

}

const mapStateToProps = (state) => {
    return {
        matches: state.matches,
        hasErrored: state.matchesHasErrored,
        isLoading: state.matchesIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(matchesFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);