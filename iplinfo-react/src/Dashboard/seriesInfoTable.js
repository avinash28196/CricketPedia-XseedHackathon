import React from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";

export default class FetchSeriesInfo extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      series: [],
      year: props.year
    }
  }

  componentDidMount(){
    console.log(this.props.year);
  // const { id } = this.props.match.params;
  // console.log(id);
  axios.get(`http://localhost:8080/Series/${this.props.year}`)
  .then(json => console.log(json))
  }


    render() {
      const {series} = this.state;

      return (
        <div className="Card">
          <h1>Hao</h1>
        </div>
  );
}
}
