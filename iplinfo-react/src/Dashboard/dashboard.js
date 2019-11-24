import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import SeriesInfoByYear from './seriesInfo.js';
import FetchSeriesInfo from './seriesInfoTable.js';

export default function ParamsExample() {


  return (
    <Router>
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1"><Link to="/2008">Season 2008</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/2009">Season 2009</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/2010">Season 2010</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/2011">Season 2011</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/2012">Season 2012</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/2013">Season 2013</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/2014">Season 2014</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/2015">Season 2015</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/2016">Season 2016</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/2017">Season 2017</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/2018">Season 2018</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/2019">Season 2019</Link></span>
        </nav>

        <Switch>
          <Route path="/:id" children={<Child /> } />
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <SeriesInfoByYear year={id}/>
    </div>
  );
}
