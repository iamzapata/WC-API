const classNames = require('classnames');

import React from 'react';
import { connect } from 'react-redux';
import { matchesFetchData } from '../actions/matches';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            countryCode: ''

        };

        this.fetchMatches = this.fetchMatches.bind(this);
    }

    fetchMatches(e) {

        const countryCode = e.target.value.toUpperCase();

        this.setState({countryCode});

        if(e.target.value.length < 3) return;

        const url = `http://worldcup.sfg.io/matches/country?fifa_code=${countryCode}`;
    
        this.props.fetchData(url);

    }

    render() {


        if (this.props.hasErrored) {
            return <p className="ResponseErrored">Whoops !! There was an error loading the matches.</p>;
        }
        if (this.props.isLoading) {
            return <p className="ResponseLoading">Loading…</p>;
        }

        const matchesListClassNames = classNames({
            'box MatchesList': true,
            'MatchesList--Hidden': this.props.matches.length == 0
        });

        const isWinner =  (match, country) => {

            if(match.winner == 'Draw') return 'Match__Draw';

            return match.winner == country ? 'Match__Winner' : '';

        }

        return (

            <div>

                <h1 className="Heading"> WOMEN'S WORLD CUP MATCHES </h1>

                <form className="control is-grouped SearchForm">

                  <p className="control is-expanded">
                    <input className="input is-large" type="text" placeholder="Type in a COUNTRY CODE" value={this.state.countryCode} onChange={this.fetchMatches}/>
                  </p>
                
                </form>

                 <ul className={matchesListClassNames}>

                    {this.props.matches.map((match) => (        

                        <li className="Match" key={match.match_number}>

                            <span className="Match__Date"> {moment(match.datetime).format('ddd, MMM D, YYYY h:mm A')} </span>

                            <span className={`Match__Home-Team ${isWinner(match, match.home_team.country)}`}> 

                                {match.home_team.country}
                                
                            </span>

                            <span className="Match__Score"> {match.home_team.goals} - {match.away_team.goals} </span>

                            <span className={`Match__Away-Team ${isWinner(match, match.away_team.country)}`}> 
                                
                                {match.away_team.country} 

                            </span>

                            <span className="Match__Location"> {match.location} </span>

                        </li>

                    ))}

                </ul>

            </div>

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