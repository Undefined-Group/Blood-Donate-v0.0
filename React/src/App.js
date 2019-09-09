import React from 'react';
import SearchResults from "./components/SearchResults"
// import { BrowserRouter as Router, Swich, Route } from 'react-router-dom'
// import axios from './components/Axios';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

class App extends React.Component {
  state = {
    search: [{
      reports: [],
      _id: '5d7583ae10835f244ba02aba',
      firstName: 'naaman',
      lasttName: 'munther',
      phone: 962799333626,
      email: 'naaman@engineer.com',
      bloodType: 'A+',
      country: 'Jordan',
      city: 'Amman',
      birthday: '1990-06-09T00:00:00.000Z',
      numberOfcalls: 1,
      dateOfPublish: '2019-09-08T22:41:50.852Z',
      __v: 0,
    }, {
      reports: [],
      _id: '5d7583ae10835f244ba02ffa',
      firstName: 'naaman',
      lasttName: 'munther',
      phone: 962799333626,
      email: 'naaman@engineer.com',
      bloodType: 'A+',
      country: 'Jordan',
      city: 'Amman',
      birthday: '1998-06-09T00:00:00.000Z',
      numberOfcalls: 1,
      dateOfPublish: '2019-09-08T22:41:50.852Z',
      __v: 0,
    }, {
      reports: [],
      _id: '5d7583ae10835f244ba02aba',
      firstName: 'naaman',
      lasttName: 'munther',
      phone: 962799333626,
      email: 'naaman@engineer.com',
      bloodType: 'A+',
      country: 'Jordan',
      city: 'Amman',
      birthday: '1990-06-09T00:00:00.000Z',
      numberOfcalls: 1,
      dateOfPublish: '2019-09-08T22:41:50.852Z',
      __v: 0,
    }, {
      reports: [],
      _id: '5d7583ae10835f244ba02ffa',
      firstName: 'naaman',
      lasttName: 'munther',
      phone: 962799333626,
      email: 'naaman@engineer.com',
      bloodType: 'A+',
      country: 'Jordan',
      city: 'Amman',
      birthday: '1998-06-09T00:00:00.000Z',
      numberOfcalls: 1,
      dateOfPublish: '2019-09-08T22:41:50.852Z',
      __v: 0,
    }]
  }

  render() {
    return (
      <>
        {/* <SearchResults search={this.state.search} /> */}
      </>
    );
  }
}

export default App;
