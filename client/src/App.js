import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Navbar from './components/Navbar';
import NotesList from './components/NotesList';
import ShowNote from './components/ShowNote';
import AddNote from './components/AddNote';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

const selectItem = () => {
  return (
    <div>
      <div className="text-center mt-2">
        <h4>
          Select a note to view or update
        </h4>
      </div>
    </div>);
}

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="cotanier-fluid">
              <Navbar />
              <div className="row">
                <NotesList />
                <div className="col-md-8 pd-2">
                  <div className="text-right mt-4">
                    <Link to="/add-note" className="btn btn-primary" style={{ marginBottom: '30px' }}>
                      <i className="fa fa-plus"></i> Add Note</Link>
                  </div>
                  <Switch>
                    <Route path="/delete-note" component={selectItem} />
                    <Route path="/add-note" component={AddNote} />
                    <Route path="/:id" component={ShowNote} />
                    <Route path="/" component={selectItem} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </Provider >
    );
  }
}

export default App;
