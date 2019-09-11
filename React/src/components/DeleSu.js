import React, { Component } from "react";

export default class DeleSu extends Component {
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
      <div className="container mt-3">
        <button
          type="button"
          className="btn btn-outline-danger"
          data-toggle="modal"
          data-target="#myModal1"
        >
          <h6>Deleted</h6>
        </button>
        <div className="modal fade" id="myModal1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h4 className="modal-title">  Deleted </h4> */}
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div>
                {" "}
                <h5 style={mystyle}> Deleted &#10004;</h5>{" "}
                <h5 style={mystyle}> Thanks You </h5>{" "}
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
