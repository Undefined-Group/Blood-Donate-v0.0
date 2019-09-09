import React, { Component } from 'react'


export default class Search extends Component {
    state = {
        country: '',
        city: '',
        bloodType: '',

    }

    changeValue = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {

        return (
            <React.Fragment>
                
                <div className="container">
                    <div className="row border border-danger rounded-pill mt-5 pb-5 pt-5 pr-5 pl-5 ">
                        <div className="col-3">

                               <select name="country" defaultValue={'Jordan'} id="country" className="custom-select" onChange={this.changeValue} >
                                    <option value="Jordan">Jordan</option>
                                </select>
                            </div>

                                  <div className="col-3">
                                <select name="city"  defaultValue={'Amman'}  id="city" className="custom-select" onChange={this.changeValue}>
                                    <option value="Amman" >Amman</option>
                                    <option value="Irbid">Irbid</option>
                                    <option value="Ajloun">Ajloun</option>
                                    <option value="Jerash">Jerash</option>
                                    <option value="Mafraq">Mafraq</option>
                                    <option value="Balqa">Balqa</option>
                                    <option value="Zarqa">Zarqa</option>
                                    <option value="Madaba">Madaba</option>
                                    <option value="Karak">Karak</option>
                                    <option value="Tafilah">Tafilah</option>
                                    <option value="Ma'an">Ma'an</option>
                                    <option value="Aqaba">Aqaba</option>
                                </select>
                            </div>


                          
                            <div className="col-3">
                                <select name="bloodType" defaultValue={'O+'} id="city" className="custom-select"
                                    onChange={this.changeValue} >
                                    <option value="O+" >O+</option>
                                    <option value="O-">O-</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>

                            
                            <div className="col-2">
                            <button type="submit"

                                className="btn btn-danger btn-block">submit</button>
                                   <button type="submit"

className="btn btn-danger btn-block">advanced search</button>

</div>
                        </div>


                        
                    </div>
              
            </React.Fragment>
        )
    }
}
