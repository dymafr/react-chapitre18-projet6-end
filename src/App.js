import React, { Component } from 'react';
import { Header } from './components';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { fetchFavoris } from './store/actions';

const LazyFilms = Loadable({
  loader: () => import(/* webpackChunkName: 'films' */'./features/films'),
  loading: () => <h1>Loading ...</h1>
});

const LazyFavoris = Loadable({
  loader: () => import(/* webpackChunkName: 'favoris' */'./features/favoris'),
  loading: () => <h1>Loading ...</h1>
})


class App extends Component {
  componentDidMount() {
    this.props.fetchFavoris();
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <Switch>
          <Route path="/films" component={ LazyFilms } />
          <Route path="/favoris" component={ LazyFavoris }/>
          <Redirect to="/films" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, {
  fetchFavoris
})(App));
