import React from "react";

export default function MatchInfo(props){
 let result = "";

 if( props.win_by_runs > 0){
   result = `Won By ${props.win_by_runs} Runs`
 }
 else {
   result = `Won By ${props.win_by_wickets} Wickets`
 }
  return(

        <tbody>
          <tr>
            <td >{props.date} </td>
            <td >{props.venue}<br /> <p className="text-primary">{props.city}</p>  </td>
            <th scope="row">{props.team1} VS {props.team2}</th>
            <td> {props.winner} <br /> <p className="text-primary">{ result } </p></td>
            <td>{props.mom}</td>
          </tr>
        </tbody>


  );
}
