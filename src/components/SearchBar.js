import React, { Component } from 'react'

class SearchBar extends Component {

    state = { term: '' };

    // Collecting the info when the form submits
    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
        
    };


  render() {
  return (
    <div className="ui segment"> 
     <form className="ui form" onSubmit={this.onFormSubmit}>
     <div className="field">
     <label>Image Search</label>
      //  Collecting the input value and setting the term state 
      <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value})} />
      </div>
      </form>
   
    </div>
      );
    }
}

export default SearchBar ;