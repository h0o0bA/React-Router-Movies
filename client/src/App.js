import React, { Component } from "react";
import { Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          <Route exact path="/" component={MovieList} />
          <Route
            exact
            path="/movie/:id"
            //  get access to all three props - match, history, and location, and pass those down to the component.
            render={props => (
              <Movie
                addToSavedList={this.addToSavedList}
                match={props.match}
                history={props.history}
                location={props.location}
                //  Since the three props we are trying to pass through have the same property name on the props object as the prop name, we can remove all three of them as pass them along like this {...props}. This will “spread” in all three props that we passed through manually above:
                //  {...props}
              />
            )}
          />
        </div>
      </div>
    );
  }
}
