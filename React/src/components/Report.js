import React, { Component } from "react";
import axios from "./Axios";
class Report extends Component {
  state = {
    report: "",
    emtpy: true,
    Donor: {
      reports: [],
      _id: "5d760817a61f0b337087d209",
      firstName: "naaman",
      lasttName: "munther",
      phone: 962799333626,
      email: "naaman@engineer.com",
      bloodType: "A+",
      country: "Jordan",
      city: "Amman",
      birthday: "1990-06-09T00:00:00.000Z",
      numberOfcalls: 1,
      dateOfPublish: "2019-09-08T22:41:50.852Z",
      __v: 0
    }
  };
  // componentWillMount() {
  //   this.setState(Donor:this.props.donor)
  // }

  onChange = e => {
    // console.log("onChange", e.target.value);
    this.setState({ report: e.target.value });
    if (e.target.value === "other..") {
      this.setState({ emtpy: false });
    }
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.report !== "other..") {
      let newReport = { ...this.state.Donor };
      newReport.reports.push(this.state.report);
      this.setState({ Donor: newReport });
      this.serverReport();
      // console.log("state", this.state.Donor);
    }
  };
  serverReport = () => {
    console.log("serverReport", this.state.Donor);
    axios
      .put("/report", this.state.Donor)
      .then(response => {
        // this.setState({ items: response.data })
        // console.log('response.data from updateRepo -app -react', response.data);
      })
      .catch(error => {
        console.log("Error", error);
      });
    // this.readRepo()
  };
  render() {
    return (
      <div className="container mt-3">
        {/* <h2>Centered Modal Example</h2>*/}
        {/*<p>Center the modal vertically and horizontally within the page, with the .modal-dialog-centered class.</p>*/}

        <button
          type="button"
          className="btn btn-outline-danger"
          data-toggle="modal"
          data-target="#myModal"
        >
          Report
        </button>

        <div className="modal fade" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  Help Us to Understand the Problem :
                </h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>

              <form>
                <div className="modal-body">
                  <div className="custom-control custom-radio">
                    <input
                      onClick={this.onChange}
                      value="Wronge phone number or unavailable"
                      type="radio"
                      id="customRadio1"
                      name="report"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio1"
                    >
                      Wronge phone number or unavailable.
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      onClick={this.onChange}
                      value="Rude or dishonest promise"
                      type="radio"
                      id="customRadio2"
                      name="report"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio2"
                    >
                      Rude or dishonest promise .
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      onClick={this.onChange}
                      value="Fake donor"
                      type="radio"
                      id="customRadio3"
                      name="report"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio3"
                    >
                      Fake donor
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      onClick={this.onChange}
                      value="Spam"
                      type="radio"
                      id="customRadio4"
                      name="report"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio4"
                    >
                      Spam.
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      onClick={this.onChange}
                      type="radio"
                      id="customRadio5"
                      name="report"
                      value="other.."
                      className="custom-control-input"
                      onSelect={this.other}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio5"
                    >
                      other...
                      <br></br>
                      <input
                        style={{
                          display:
                            this.state.emtpy === false ||
                            this.state.report === "other.."
                              ? "block"
                              : "none"
                        }}
                        className="form-group has-error has-feedback"
                        onChange={this.onChange}
                        size="35"
                        type="text"
                        id="t"
                        placeholder="please enter your feedback..."
                      ></input>
                    </label>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    disabled={
                      this.state.report !== "" &&
                      this.state.report !== "other.."
                        ? false
                        : true
                    }
                    onClick={this.onSubmit}
                    type="submit"
                    data-dismiss="modal"
                    className="btn btn-outline-danger"
                    id="a"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Report;
