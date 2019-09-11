import React , {Component} from 'react'

class Terms extends Component{
    render(){
        return(
            
        
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
export default Terms
