import React from 'react';
import Match from './Match';
import SearchForm from './SearchForm';

const classNames = require('classnames');


class MatchList extends React.Component {

    constructor(props) {
        super(props);
    }

	render() {

        const matchesListClassNames = classNames({
            'box MatchesList': true,
            'MatchesList--Hidden': this.props.matches.length == 0
        });      

		const matchesList = this.props.matches.map((match) => 

        	<Match 
        		match={match} 
        		key={match.match_number} />

        );	

		return (
			<div>

                <h1 className="Heading"> WOMEN'S WORLD CUP MATCHES </h1>

                <SearchForm countryCode={this.props.countryCode} fetchMatches={this.props.fetchMatches}></SearchForm>

                 <ul className={matchesListClassNames}>

                 	{matchesList}                  

                </ul>

            </div>
		);

	}
}

export default MatchList;