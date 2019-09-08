import React from 'react';
import Search from './pages/Search';
// import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

{/* <Router>
  <Switch>
    <Route exact path ='/' component={Search} />
    <Route path='/saved' component={Saved} />
    <Route path='/saved/:book' component={Saved} />
  </Switch>
</Router> */}

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;