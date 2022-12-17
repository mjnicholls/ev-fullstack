import axios from "axios";
import React, { useState } from "react";


const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [newUser, setNewUser] = useState(false);
  const [error, setError] = useState(null);
  const d = new Date();
  const date = d.toDateString().slice(0, 28);

  const onChangeUserName = (e) => {
    setUsername(e.target.value);
    setNewUser(false);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setNewUser(false);
  };
  const onChangeCompany = (e) => {
    setCompany(e.target.value);
    setNewUser(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setError("Please enter a value");
      return;
    }

    const userReady = {
      username: username,
      email: email,
      company: company,
      date: date,
    };
    axios
      .post("http://localhost:3001/users/create", userReady)
      .then((res) => {
        console.log(res.data);
        setNewUser(true)
      })
      .catch((error) => {
        console.log(error);
      });
    setUsername("");
    setEmail("");
    setCompany("");
  };

  return (
    <>
      <h2>Create User</h2>
      <br />
      <div className="wrapper">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Enter Full Name</label>
            <input
              type="text"
              value={username}
              onChange={onChangeUserName}
              className="form-control"
            />
          </div>
          <p
            style={
              error ? { color: "red", margin: "none", padding: "none" } : {}
            }
          >
            {error}
          </p>
          <div className="form-group">
            <label>Enter Email</label>
            <input
              type="text"
              value={email}
              onChange={onChangeEmail}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Enter Company</label>
            <input
              type="text"
              value={company}
              onChange={onChangeCompany}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-success btn-block"
            />
          </div>
          {newUser === true ? <p>User created!</p> : null}
        </form>
      </div>
    </>
  );
};

export default CreateUser;
