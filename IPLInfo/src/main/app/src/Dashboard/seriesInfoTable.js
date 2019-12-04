import React from 'react';
import axios from 'axios';
import MatchInfo from './matchInfo.js'


export default class FetchSeriesInfo extends React.Component {

  //Intializing State
  constructor(props){
    super(props);
    this.state = {
      iplMatch: []
    }
  }
  
  //Axios Get Call
  componentDidMount(){
    const { match: { params } } = this.props;

    axios.get(`http://localhost:8080/Series/${params.handle}`)
      .then( response => {

        const results = response.data.content;
        const updatedResults = results.map(results => {
            return {
                ...results,
              }
            });

            this.setState({iplMatch: updatedResults});
      })

  }

  //Tampering Json Data and Populating Json

  populateRowsWithData = () => {
    const iplMatch = this.state.iplMatch.map(ipl => {
        return <MatchInfo
            key = {ipl.id}
            city = {ipl.city}
            venue = { ipl.venue }
            date = {ipl.date}
            team1 = {ipl.team1}
            team2 = {ipl.team2}
            mom = {ipl.player_of_match}
            winner = {ipl.winner}
            win_by_runs = {ipl.win_by_runs}
            win_by_wickets = {ipl.win_by_wickets}
          />;
      });

      return iplMatch
    }

    render() {

      return (
        <div>
          <h1 className="text-primary text-center">
            IPL T20 Year {this.props.match.params.handle}
          </h1>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Venue</th>
                <th scope="col">Event</th>
                <th scope="col">Match Summary</th>
                <th scope="col">Man of the Match</th>
              </tr>
            </thead>
            {this.populateRowsWithData()}
          </table>
        </div>
      );
    }
}
