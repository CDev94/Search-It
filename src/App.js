import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import './App.scss';
class App extends Component  {
    
    // Collecting input data from SearchBar
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/photos/?client_id=5352a9d9c2a176375fd5544d01476fe1dfd9dc490b95c97e7a329c1026966efe')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

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
