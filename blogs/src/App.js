import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import CreateBlogPost from './components/CreateBlogPost';
import BlogPage from './components/BlogPage';
import About from './components/About';
function App() {
  return (
    <Router>
      <div className="App">
        <div style={{ display: "flex", marginTop: "2%" }}>
          <nav style={{ marginLeft: "20%" }}>
            <NavLink
              style={{
                border:'red 2px solid',
                backgroundColor:'orange',
                textDecoration: "none",
                color: "white",
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
                border:'red 2px solid',
                backgroundColor:'orange',
                color: "white",
                fontSize: "30px",
                fontFamily: "courgie",
                margin: "5%"
              }}
              
              to="/createblogpost"
            >
              Add Post
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                border:'red 2px solid',
                backgroundColor:'orange',
                color: "white",
                fontSize: "30px",
                fontFamily: "courgie",
                margin: "5%"
              }}
              
              to="/"
            >
              About
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
          <Route  exact path="/" component={About}/>
          <Route exact path="/blogpage" component={BlogPage} />
          <Route  path="/createblogpost" component={CreateBlogPost} />
        </section>
      </div>
    </Router>
  );
}

export default App;
