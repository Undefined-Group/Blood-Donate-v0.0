import React, { Component } from "react";

export default class TAddSu extends Component {
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
          data-target="#myModal0"
        >
          <h6> Add Succeeded </h6>
        </button>
        <div className="modal fade" id="myModal0">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h6 className="modal-title" > Add Succeeded  </h6> */}
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div>
                {" "}
                <h5 style={mystyle}> Add Succeeded &#xf004; </h5>{" "}
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
