import React, { Component } from "react";
import axios from "axios";
class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsArray: [],
    };
    this.cancelToken = "";
    this.findName = this.findName.bind(this);
    this.node = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.findName);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.findName);
  }
  findName = (e) => {
    if (this.node.current.contains(e.target)) {
      return;
    }
    this.setState({
      userList: [],
    });
  };
  onChange = async (e) => {
    if (this.cancelToken) {
      this.cancelToken.cancel();
    }
    this.cancelToken = axios.CancelToken.source();
    await axios
      .get("http://localhost:3001/users", {
        cancelToken: this.cancelToken.token,
      })
      .then((res) => {
        this.setState({
          resultsArray: res.data,
        });
      })
      .catch((e) => {
        if (axios.isCancel(e) || e) {
          console.log("Data not found.");
        }
      });
    let stringKwd = e.target.value.toLowerCase();
    let filterData = this.state.resultsArray.filter((item) => {
      return item.username.toLowerCase().indexOf(stringKwd) !== -1;
    });
    this.setState({
      resultsArray: filterData,
    });
    console.log("node", this.node);
    console.log("state", this.state);
    console.log("canceltoken", this.cancelToken);
  };

  render() {
    return (
      <>
        <h2>Search for User</h2>
        <br />
        <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name ..."
            ref={this.node}
            onClick={this.findName}
            onChange={this.onChange}
          />
        </div>
        <div className="list-group">
          {this.state.resultsArray.map((item) => {
            return (
              <a
                className="list-group-item list-group-item-action"
                key={item.id}
              >
                {item.username}
              </a>
            );
          })}
        </div>
        <br />
        <div className="container">
          <table className="table table-striped table-dark">
            <thead className="thead-dark">
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Company</td>
                <td>Date Registered</td>
              </tr>
              {this.state.resultsArray.map((item) => {
                return item.username ? (
                  <tr key={item.id}>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.company}</td>
                    <td>{item.date}</td>
                  </tr>
                ) : null;
              })}
            </thead>
          </table>
        </div>
      </>
    );
  }
}
export default SearchResults;
