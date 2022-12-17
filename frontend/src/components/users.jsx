import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./dataTable";

const User = () => {
  const [usersAll, setUsersAll] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        console.log("users", res.data);
        setUsersAll(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const dataTable = () => {
    return usersAll.map((data, i) => {
      return <DataTable obj={data} key={i} />;
    });
  };

  return (
    <>
      <h2>Users</h2>
      <br />
      <div className="wrapper-users">
        <div className="container">
          <table className="table table-striped table-dark">
            <thead className="thead-dark">
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Company</td>
                <td>Date Registered</td>
              </tr>
            </thead>
            <tbody>{dataTable()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
