import React, { Component } from "react";

class PostDisplay extends Component {
  state = {
    currentDateTime: Date().toLocaleString(),
    count: 0,
  };
  incrementMe = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };
  decrementMe = () => {
    if (this.state.count > 0) {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount,
      });
    }
  };
  timeAgo = (prevDate) => {
    const diff = Number(new Date()) - prevDate;
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;
    switch (true) {
      case diff < minute:
        const seconds = Math.round(diff / 1000);
        return `${seconds} ${seconds > 1 ? "seconds" : "second"} ago`;
      case diff < hour:
        return Math.round(diff / minute) + " minutes ago";
      case diff < day:
        return Math.round(diff / hour) + " hours ago";
      case diff < month:
        return Math.round(diff / day) + " days ago";
      case diff < year:
        return Math.round(diff / month) + " months ago";
      case diff > year:
        return Math.round(diff / year) + " years ago";
      default:
        return "";
    }
  };

  render() {
    return (
      <React.Fragment>
        <link
          rel="stylesheet"
          href="//cdn.materialdesignicons.com/3.7.95/css/materialdesignicons.min.css"
        ></link>
        <center>
          <div>
            <h6>
              Abbas
              <small className="ml-4 text-muted">
                <i className="mdi mdi-clock mr-1"></i>
                {this.timeAgo(this.props.currentDateTime)}
              </small>
            </h6>
            <div
              style={{
                backgroundColor: "lightblue",
                width: "600px",
                padding: "25px",
                overflow: "hidden",
              }}
            >
              {this.props.context}
            </div>
            <span className="badge badge-pill badge-sm m-2">
              &hearts;{this.state.count}
            </span>
            <button
              onClick={this.incrementMe}
              className="btn-danger btn-sm m-2"
            >
              Like
            </button>
            <button
              onClick={this.decrementMe}
              className="btn-danger btn-sm m-2"
            >
              Dislike
            </button>
            <hr></hr>
          </div>
        </center>
        <br></br>
      </React.Fragment>
    );
  }
}
export default PostDisplay;
