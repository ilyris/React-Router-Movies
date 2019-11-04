import React, { useState } from 'react';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';
import {Route} from 'react-router-dom';
const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    console.log('some stuff');
    // return setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList}/>
      <Route exact path="/movies/:id" render={props => <Movie {...props} addToListFunction={addToSavedList} /> }/>
    </div>
  );
};

export default App;
