import React from 'react';

class SearchForm extends React.Component {

	constructor(props) {

		super(props);

	}

	render() {

		const clearButton = (
			<button className="button is-small SearchForm_Clear" onClick={this.props.clearForm}>

				<span className="icon">
				  <i className="fa fa-times" aria-hidden="true"></i>
				</span>
	
			</button>
		);

		return (

			<form className="control is-grouped SearchForm">

              <p className="control is-expanded SearchForm__Container">

                <input className="input is-large SearchForm__Input" type="text" placeholder="Type in a COUNTRY CODE" value={this.props.countryCode} onChange={this.props.fetchMatches}/>  

				{ this.props.matches.length > 0 ? clearButton : null }

              </p>
            
            </form>
		);
	}

}

export default SearchForm;