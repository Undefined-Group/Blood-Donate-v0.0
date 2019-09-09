import React from 'react';
import Report from './components/Report';
// import { BrowserRouter as Router, Swich, Route } from 'react-router-dom'
// import axios from './components/Axios';


class App extends React.Component {
  state = {
    search: []
  }

  render() {
    return (
      <>
      <Report/>
        {/* <Router>





        </Router> */}
      </>
    );
  }
}

export default App;
