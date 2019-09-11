import React, { Component } from "react";

export default class RepoM extends Component {
  render() {
    const mystyle = {
      color: " #F96767",

      padding: "10px",
      fontFamily: "	Courier New",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    return (
      <div className="container mt-3+">
        <button
          type="button"
          className="btn btn-outline-danger"
          data-toggle="modal"
          data-target="#myModal3"
        >
          <h6> Repom</h6>
        </button>
        <div className="modal fade" id="myModal3">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h4 className="modal-title"> Report </h4> */}
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div>
                {" "}
                <h5 style={mystyle}> Your Note Was Receive Thank You </h5>{" "}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className=" btn btn-outline-danger"
                  data-dismiss="modal"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
