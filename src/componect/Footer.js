import React, { Component } from 'react'
import './../style/footer.css'
export class FooterMe extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='list'>
            <ul>
                <li>
                    <h1>Contact</h1>
                </li>
                <li>
                    <p>Email : Mrrjamrotha@gmail.com</p>
                </li>
                <li>
                    <p>Phone : 099 299 030 / 068 706 641</p>
                </li>
            </ul>
        </div>

        <div className='list-flex'>
            <h1>Follow me</h1>
            <ul id='list'>
                <li>    
                  <a href='https://www.facebook.com/Kiiza.coding' target="_blank"><i className="fa-brands fa-facebook"/></a>
                
                
                </li>
                <li>
                  <a href='https://www.instagram.com/rotha.virus/' target="_blank">                    <i className="fa-brands fa-instagram" /></a>
 
                        
                </li>
          

            </ul>
        </div>
      </footer>
    )
  }
}

export default FooterMe