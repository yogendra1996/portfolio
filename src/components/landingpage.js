import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell>
            <img
              src="http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
            </div>
            <hr />
            <p>
              Java | SQL | Bootstrap | Javascript | HTML | CSS | React | Node Js
            </p>
            <div className="social-links">
              {/*Linkidin */}
              <a
                href="https://in.linkedin.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>

              {/* Git-hub*/}
              <a
                href="https://github.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>

              {/*FreeCodeCamp*/}
              <a
                href="https://www.freecodecamp.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-free-code-camp" aria-hidden="true"></i>
              </a>

              {/*Youtube */}
              <a
                href="http://youtube.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square" aria-hidden="true"></i>
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
