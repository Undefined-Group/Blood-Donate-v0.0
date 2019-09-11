import React, { Component } from "react";

export default class DeletF extends Component {
  render() {
    const mystyle = {
      color: " #F96767",

      padding: "10px",
      fontFamily: "	Courier New",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 'bold'
    };
    return (
      <div className="container mt-3+">
        <button
          type="button"
          className="btn btn-outline-danger"
          data-toggle="modal"
          data-target="#myModal2"
        >
          <h6> Deletion failed</h6>
        </button>
        <div className="modal fade" id="myModal2">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">  &#128204; </h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div>
                <div className='border border-danger'>
                  <h5 style={mystyle}>&#10006; Deletion failed &#10006;</h5>
                  <h5 style={mystyle}> Please Enter Your Right Information </h5>
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
      </div>
    );
  }
}
