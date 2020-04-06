import React from "react";

function ResultList(props) {
  return (
    <table className="table">

      {props.results.map(result => (
        <table style="width:100%">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>John</td >
            <td>Doe</td>
            <td>36</td>
          </tr>
        </table>
      ))}
    </table>
  );
}

export default ResultList;
