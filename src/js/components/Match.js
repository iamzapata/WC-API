import React from 'react';

import moment from 'moment';

class Match extends React.Component {

	constructor(props) {

		super(props);

	}

	render() {

		const isWinner =  (match, country) => {

            if(match.winner == 'Draw') return 'Match__Draw';

            return match.winner == country ? 'Match__Winner' : '';

        }

        const {datetime, home_team, away_team, location} = this.props.match;

		return (

            <li className="Match">

                <span className="Match__Date"> {moment(datetime).format('ddd, MMM D, YYYY h:mm A')} </span>

                <span className={`Match__Home-Team ${isWinner(this.props.match, home_team.country)}`}> 

                    {home_team.country}

                </span>

                <span className="Match__Score"> {home_team.goals} - {away_team.goals} </span>

                <span className={`Match__Away-Team ${isWinner(this.props.match, away_team.country)}`}> 
                    
                    {away_team.country} 

                </span>

                <span className="Match__Location"> {location} </span>

            </li>
		);
	}
}

export default Match;