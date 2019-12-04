import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  //useParams
} from "react-router-dom";

import FetchSeriesInfo from './seriesInfoTable.js';

export default function ParamsExample() {


  return (
    <Router>
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1"> <Link to="/Series/2008">Season 2008</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/Series/2009" >Season 2009</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/Series/2010">Season 2010</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/Series/2011">Season 2011</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/Series/2012">Season 2012</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/Series/2013">Season 2013</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/Series/2014">Season 2014</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/Series/2015">Season 2015</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/Series/2016">Season 2016</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/Series/2017">Season 2017</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/Series/2018">Season 2018</Link></span>
          <span className="navbar-brand mb-0 h1"><Link to="/Series/2019">Season 2019</Link></span>
        </nav>

        <Switch>
          <Route path="/:handle" component={FetchSeriesInfo} />
        </Switch>
      </div>
    </Router>
  );
}
