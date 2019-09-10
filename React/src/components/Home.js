import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
         
        <React.Fragment>
               <div>
           <Link to="/adddonor">
           <button type="button" className="btn btn-info" >Add Donor</button>
           </Link>
            </div>
            {/* <div class="container-fluid">
                <div className="row">

                <nav></nav>
                </div>

                <div className="row">

                </div>
               
                <div className="row">

                <footer></footer>
                </div>
                
  
            </div> */}
        </React.Fragment>
        )
    }
}
