import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import CreateBlogPost from './components/CreateBlogPost';
import BlogPage from './components/BlogPage';
function App() {
  return (
    <Router>
      <div className="App">
        <div style={{ display: "flex", marginTop: "2%" }}>
          <nav style={{ marginLeft: "20%" }}>
            <NavLink
              style={{
                textDecoration: "none",
                color: "red",
                fontFamily: "courgie",
                fontSize: "30px"
              }}
              exact
              to="/blogpage"
            >
              Blog
            </NavLink>

            <NavLink
              style={{
                textDecoration: "none",
                color: "red",
                fontFamily: "courgie",
                fontSize: "30px",
                margin: "5%"
              }}
              
              to="/createblogpost"
            >
              Add Post
            </NavLink>
          </nav>
        </div>
        <section style={{}}>
          <h1
            style={{
              fontSize: "60px",
              color: "red",
              fontFamily: "cursive",
              opacity: ".5"
            }}
          >
            Blog Spoof
          </h1>
          {/* <p
            style={{
              fontSize: "30px",
              color: "white",
              fontFamily: "cursive",
              opacity: ".5",
              width: "400px",
              height: "400px",
              marginLeft: "30%"
            }}
          >
            
          </p> */}
          <Route exact path="/blogpage" component={BlogPage} />
          <Route  path="/createblogpost" component={CreateBlogPost} />
        </section>
      </div>
    </Router>
  );
}

export default App;
