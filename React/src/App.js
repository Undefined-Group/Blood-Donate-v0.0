import React from "react";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "./components/Axios";
import AddDonor from "./components/AddDonor";
import Home from "./components/Home";
import Search from "./components/Search";
import Report from "./components/Report";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Delete from "./components/Delete";

class App extends React.Component {
  state = {
    DonorData: [],
    search: [
      {
        reports: [],
        _id: "5d7583ae10835f244ba02aba",
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
      },
      {
        reports: [],
        _id: "5d7583ae10835f244ba02ffa",
        firstName: "naaman",
        lasttName: "munther",
        phone: 962799333626,
        email: "naaman@engineer.com",
        bloodType: "A+",
        country: "Jordan",
        city: "Amman",
        birthday: "1998-06-09T00:00:00.000Z",
        numberOfcalls: 1,
        dateOfPublish: "2019-09-08T22:41:50.852Z",
        __v: 0
      },
      {
        reports: [],
        _id: "5d7583ae10835f244ba02aba",
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
      },
      {
        reports: [],
        _id: "5d7583ae10835f244ba02ffa",
        firstName: "naaman",
        lasttName: "munther",
        phone: 962799333626,
        email: "naaman@engineer.com",
        bloodType: "A+",
        country: "Jordan",
        city: "Amman",
        birthday: "1998-06-09T00:00:00.000Z",
        numberOfcalls: 1,
        dateOfPublish: "2019-09-08T22:41:50.852Z",
        __v: 0
      }
    ]
  };

  // Add Donor
  postDonor = (
    firstName,
    lastName,
    phone,
    country,
    city,
    bloodType,
    email,
    birthday,
    cleanInput
  ) => {
    console.log("Post Donor");
    axios
      .post(
        `/addDonor/${firstName}/${lastName}/${phone}/${country}/${city}/${bloodType}/${email}/${birthday}`
      )
      .then(response => {
        console.log("Post befoure");
        this.setState({ DonorData: response.data });
        console.log("data", response.data);
        console.log("data", this.state.DonorData);
      });
    console.log("Post after");
    cleanInput();
  };


  setSearch = sData => {
    console.log("sdata", sData);
    this.setState({ search: sData });
  };
  render() {
    return (
      <>

        <Footer />
        <Delete />
        {/* <Report/>
      <SearchResults search={this.state.search} /> 
       <Search/>  */}
        <Router>
          <Route path="/" exact component={Home} />
          <Route
            path="/adddonor"
            component={() => <AddDonor postDonor={this.postDonor} />}
          />
      </>
    );
  }
}

export default App;
