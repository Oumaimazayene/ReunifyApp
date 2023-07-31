import React, { Component } from "react";
import "../styles/Home.css";
import CalendarComponent from "./calendar/calendar";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="header-wrapper">
          <Header theme={this.props.theme} />
        </div>
        <div className="content">
          <div className="calendar-container">
            <CalendarComponent theme={this.props.theme} />
          </div>
          <div className="other-content"></div>
        </div>
      </div>
    );
  }
}

export default Home;
