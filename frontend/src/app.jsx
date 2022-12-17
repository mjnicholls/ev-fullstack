import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CreateUser from './components/createUser'
import Users from './components/users'
import SearchResults from './components/searchResults'
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">EV Fullstack Test</a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={'/create-user'}>
                    Create User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/users'}>
                    Users List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/search'}>
                    Search
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <br />
        <div className="container">
          <div className='row'>
            <div className='col'>
              <Routes>
                <Route exact path="/" element={<CreateUser />} />
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/users" element={<Users />} />
                <Route path="/search" element={<SearchResults />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App
