import React, { Component } from "react";
import './Footer.css'


export default class Footer extends Component {
 render(){
   return (
    <footer class="font-small fixed-bottom bg-red text-center py-2" id="footer">

    <div class="footer-copyright text-center py-3">© 2019 Copyright:
      <a href="https://orange.com" id="cc"> Orange </a>
    
    <a href="/"class="contact">www.BloodDonaet.com</a>
    </div>
  
  </footer>
 );
 }
}
