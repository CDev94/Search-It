import React, { Component } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';

class App extends Component  {
    
    onSearchSubmit(term) {
        console.log(term);
    }
 

    render() {
    return (
    <div className="App">

    <div id="search" className="ui container">
     <SearchBar onSubmit={this.onSearchSubmit}  />
     </div>

    
    
    </div>
    )
    };
}

export default App;
