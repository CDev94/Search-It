import React, { Component } from 'react';
import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';
import './App.scss';
class App extends Component  {
    state = {
        images: [],
    }
    
    // Collecting input data from SearchBar
 onSearchSubmit = async (term) => {
       const response = await unsplash.get('/search/photos', {
            params: { query: term },
           
        });
        
        this.setState({ images: response.data.results})
    }
 

    render() {
    return (
    <div className="App">

    <div id="search" className="ui container">
     <SearchBar onSubmit={this.onSearchSubmit}  />
     Results found: {this.state.images.length}
     </div>

    
    
    </div>
    )
    };
}

export default App;
