import React, { Component } from 'react'
import './../../style/navbar.css'
export class Navbar extends Component {

    state = {click : false};


    heanlerClick = ()=>{
        this.setState({click: !this.state.click})
    }
  render() {
    return (
        <header>
            <div className='logo'>
                <h3>Soeurn Rotha</h3>
            </div>
            <div>
                <ul id='navbar'  className={this.state.click ? "#navbar active" : "#navbar"}>
                    <li>
                        <a href='/' className='active'>Home</a>
                    </li>
                    <li>
                        <a href='/about'>About us</a>
                    </li>
                    <li>
                        <a href='/contact'>Contact</a>
                    </li>
                    
                </ul>
            </div>

            <div id='mobile' onClick={this.heanlerClick}>

                <i id='bar' className={this.state.click ? 'fas fa-times' : 'fas fa-bars'}></i>
                
            </div>
        </header>
    )
  }
}

export default Navbar