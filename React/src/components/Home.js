import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
    render() {
        return (
            <div>
           <Link to="/adddonor">
           <button type="button" className="btn btn-info" >Add Donor</button>
           </Link>
           
            </div>
        )
    }
}
