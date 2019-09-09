import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import axios from './components/Axios';
import AddDonor from './components/AddDonor'
import Home from './components/Home'
import Search from './components/Search'
import Report from './components/Report';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter as Router, Swich, Route } from 'react-router-dom'
// import axios from './components/Axios';



class App extends React.Component {
  state = {
    search: [],
    DonorData:[]
  }

// Add Donor
  postDonor = (firstName, lastName, phone ,country,city,bloodType,email,birthday,cleanInput) => {
    console.log("Post Donor")
    axios
      .post(`/${firstName}/${lastName}/${phone}/${country}/${city}/${bloodType}/${email}/${birthday}`)
      .then(response => {
        this.setState({ DonorData: response.data });
        
      });
      console.log("data",this.state.DonorData)
      cleanInput()  
  };



  render() {



    return (

      
      <>
{/* 
        <Search /> 
        <Report/> */}
         <Router>
         <Route path="/" exact component={Home} /> 
          <Route path="/adddonor" component={()=><AddDonor postDonor={this.postDonor}/>} /> 
          
        


      

        </Router> 
      </>
    );
  }
}








export default App;
