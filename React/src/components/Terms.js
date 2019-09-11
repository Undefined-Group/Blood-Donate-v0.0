import React, { Component } from "react";
import './Terms'
export default class Terms extends Component {
  render() {
    return (
      <div className="container mt-3+">
        <button
          type="button"
          className="btn btn-outline-danger"
          data-toggle="modal"
          data-target="#myModall"
        >
          Terms of donate
        </button>
        <div className="modal fade" id="myModall">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title"> Terms of donate </h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div>
                
                <div class="Terms">
                  <p>
                    Most people can give blood if they are in good health. There
                    are some basic requirements one need to fulfill in order to
                    become a blood donor.
                    <br /> Below are some basic eligibility guidelines:
                  </p>
                  <ul>
                    <h6>Age:</h6>
                    <li>You are aged between 18 and 65</li>

                    <h6>Weight:</h6>

                    <li> You weigh at least 50 kg5</li>

                    <h6>Health:</h6>
                    <li>You must be in good health at the time you donate.</li>
                    <li>
                      {" "}
                      You cannot donate if you have a cold, flu, sore throat,
                      cold sore, stomach bug or any other infection.
                    </li>
                  </ul>{" "}
                </div>
                <div className="modal-footer">
                  <button  type="button" className=" btn btn-outline-danger" data-dismiss="modal"                              
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
