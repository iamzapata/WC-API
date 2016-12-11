import React from 'react';
import { connect } from 'react-redux';

import Error from './Error';
import Loading from './Loading';
import MatchList from './MatchList';
import { matchesFetchData, matchesClearData } from '../actions/matches';

/**
 * Main Application Component
 */
class App extends React.Component {

    constructor(props) {
        super(props);

        // FIFA Country Code.
        this.state = {

            countryCode: '',

        };

        this.fetchMatches = this.fetchMatches.bind(this);
        this.clearForm = this.clearForm.bind(this);
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

        if(countryCode.length == 0) return this.props.clearData();

        if(countryCode.length < 3) return;
    
        this.props.fetchData(`http://worldcup.sfg.io/matches/country?fifa_code=${countryCode}`);

    }

    clearForm(e) {
        e.preventDefault();

        this.setState({ countryCode: ''});

        this.props.clearData();
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
                fetchMatches={this.fetchMatches}
                clearForm={this.clearForm}>
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

        fetchData: (url) => dispatch(matchesFetchData(url)),

        clearData: () => dispatch(matchesClearData())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);