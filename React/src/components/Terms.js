import React, { Component } from "react";
import './Terms'
export default class Terms extends Component {
  render() {

    const mystyle = {
      color: " #F96767",

      padding: "10px",
      fontFamily: "	Courier New",
   
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 'bold'
    };

    const mystyleee = {
      color: " black",

      padding: "10px",
      fontFamily: "	Courier New",
   
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
          data-target="#myModall"
        >
            Terms of donate 
        </button>
        <div className="modal fade" id="myModall">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title"> &#128204;Terms of donate </h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div>
             
                <div style={mystyle} class="Terms border border-danger" >
                
                  <p style={mystyleee}>
                    <li>
                    Most people can give blood if they are in good health. There
                    are some basic requirements one need to fulfill in order to
                    become a blood donor.
                    </li>
                    <br /> Below are some basic eligibility guidelines:&#128137;
                  </p>
                  <ul>
                    <h5 style={mystyleee}>Age:</h5>
                    <li> 	🎂 You are aged between 18 and 65</li>

                    <h5 style={mystyleee}> Weight:</h5>

                    <li> &#129490; You weigh at least 50 kg5</li>

                    <h5 style={mystyleee} >Health:</h5>
                    <li> &#128150; You must be in good health at the time you donate.</li>
                    <li >
                      {" "}
                      &#9940; You cannot donate if you have a cold, flu, sore throat,
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
