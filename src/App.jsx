import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      wholeresponse: "",
    };
    this.quotefetcher = this.quotefetcher.bind(this);
  }

  componentDidMount() {
    this.quotefetcher();
  }

  quotefetcher() {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";
    var targetUrl = "https://zenquotes.io/api/random";
    fetch(proxyUrl + targetUrl)
      .then((res) => res.json())
      .then((res) => this.setState({ wholeresponse: res[0] }));
    console.log(this.state.wholeresponse);
  }

  render() {
    // var colorArray = ["#FFDABA", "#20888C"];
    var randomColor = require("randomcolor");
    var color = randomColor();
    return (
      <div className="app" style={{ backgroundColor: color }}>
        <div id="quote-box">
          <div className="quoteContainer">
            <div id="text">
              <i className="fa fa-quote-left"></i>
              {this.state.wholeresponse.q}
            </div>
            <div id="author">~"{this.state.wholeresponse.a}"</div>
          </div>
          <div className="secondContainer">
            <div className="buttons">
              <div className="aContainer">
                <a
                  href="https://twitter.com/intent/tweet"
                  data-show-count="false"
                  id="tweet-quote"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter-square"></i>
                </a>

                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=#url"
                  data-show-count="false"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa  fa-facebook-square"></i>
                </a>
              </div>
              <button id="new-quote" onClick={this.quotefetcher} style={{ borderColor: color }}>
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
