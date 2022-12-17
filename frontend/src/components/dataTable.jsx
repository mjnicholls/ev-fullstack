import React from "react";

const DataTable = (props) => {
  return (
    <tr>
      <td>{props.obj.username}</td>
      <td>{props.obj.email}</td>
      <td>{props.obj.company}</td>
      <td>{props.obj.date}</td>
    </tr>
  );
};

export default DataTable;
