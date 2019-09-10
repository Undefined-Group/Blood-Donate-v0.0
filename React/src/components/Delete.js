import React, { Component } from "react";
import "./Delete.css";
import axios from "./Axios";

class Delete extends Component {
  state = {
    Donor: {
      reports: [],
      _id: "5d778073b2e57e55e10528f6",
      firstName: "doha",
      lastName: "dojan",
      phone: 962799333626,
      email: "naaman@engineer.com",
      bloodType: "A+",
      country: "Jordan",
      city: "zarqaa",
      birthday: "1993-10-05T00:00:00.000Z",
      numberOfcalls: 1,
      dateOfPublish: "2019-09-08T22:41:50.852Z",
      __v: 0
    },
    lastName: "dojan",
    birthday: "1993-10-05",
    email: "naaman@engineer.com"
  };

  DeleteDonor = () => {
    if (
      this.state.Donor.lastName === this.state.lastName &&
      this.state.Donor.birthday.slice(0, 10) === this.state.birthday &&
      this.state.Donor.email === this.state.email
    ) {
      console.log("this.state.Donor._id", this.state.Donor);
      axios
        .delete("/delete/delete", this.state.Donor)
        .then(response => {
          console.log("rawabi", response.data);
        })
        .catch(error => {
          console.log("Error", error);
        });
      console.log("rawabi okour");
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container mt-3">
        <button
          type="button"
          className="btn btn-outline-danger"
          data-toggle="modal"
          data-target="#myModal"
        >
          Delete
        </button>

        <div className="modal fade" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Do you want to remove Donor?</h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>

              <div className="modal-body">
                <label htmlFor="LN" className="l">
                  What is your Last Name?
                </label>
                <br></br>
                <input
                  className="form-control"
                  name="lastName"
                  value={this.state.lastName}
                  type="text"
                  onChange={this.onChange}
                  id="LN"
                  required
                ></input>
                <br></br>

                <label htmlFor="D" className="l">
                  What is your Birth Date?
                </label>
                <br></br>
                <input
                  className="form-control"
                  name="birthday"
                  value={this.state.birthday}
                  type="date"
                  onChange={this.onChange}
                  id="D"
                  required
                ></input>
                <br></br>

                <label htmlFor="PN" className="l">
                  What is your Email Number?
                </label>
                <br></br>
                <input
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  type="email"
                  min="6"
                  max="13"
                  onChange={this.onChange}
                  id="PN"
                  required
                ></input>
              </div>

              <div className="modal-footer">
                <button
                  type="submit"
                  onClick={this.DeleteDonor}
                  className="btn btn-outline-danger"
                  id="a"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Delete;
