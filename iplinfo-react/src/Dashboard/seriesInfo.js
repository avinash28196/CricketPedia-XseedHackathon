import React from "react";
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import FetchSeriesInfo from './seriesInfoTable.js'

export default class SeriesInfoByYear extends React.Component{

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     series: [],
  //     year: props.year
  //
  //   }
  //   this.fetchURL = this.fetchURL.bind(this);
  // }
  //
  // fetchURL(year){
  //   axios.get(`http://localhost:8080/Series/${this.props.year}`)
  //     .then(json => console.log(json))
  // }
  //
  // componentDidMount(){
  //
  //   this.fetchURL(this.state.year)
  // }


  render(){
    // const {series} = this.state;

    return(
      <div>
        <h3 className="text-center">Indian Premier League Season {this.props.year}</h3>
        <FetchSeriesInfo year={this.props.year} />
      </div>
    );
  }

}
