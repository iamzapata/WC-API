import React from 'react';

class SearchForm extends React.Component {

	constructor(props) {

		super(props);

	}

	render() {

		return (

			<form className="control is-grouped SearchForm">

              <p className="control is-expanded">
                <input className="input is-large" type="text" placeholder="Type in a COUNTRY CODE" value={this.props.countryCode} onChange={this.props.fetchMatches}/>
              </p>
            
            </form>
		);
	}

}

export default SearchForm;