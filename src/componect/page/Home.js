import React, { Component } from 'react'
import './../../style/home.css';
import FooterMe from '../Footer';
export class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='container-info'>
          <div className='text-info'>
            <h3>Hello!</h3>
            <h1>I'm junior <span>software devloper</span></h1>

            <button>My work</button>

          </div>
        </div>



        <div className='aboutme'>
          <h1>About me</h1>
        </div>


        <div className='rol-aboutme'>
          <div className='box-img'>

          </div>
          <div className='box-text'>
            <h3>Name  : <span>Soeurn Rotha</span></h3>
            <h3>Address : <span>st 150 , #320D , Phnom Penh ,Cambodia</span></h3>
            <h3>Email : <span> Mrrjamrotha@gmail.com</span></h3>
            <h3>Phone : <span>099 299 030 / 068 706 641</span></h3>
          </div>
        </div>


        <div className='skill'>
          <h1>My skills</h1>
        </div>

        <div className='devloper'>
          <h1>Web desginer</h1>
        </div>

        <div className='col'>
          {/* web */}
          <div className='rol'>
            <div className='rol-img'>
              <img src='/image/01.jpg' alt='web' className='logo-dev'></img>
            </div>


            <div className='col-text'>
              <div className='col-logo'>
                <img src="/image/html.png" alt="html"></img>
                <h3>HTML</h3>
              </div>
              <div className='col-logo'>
                <img src="/image/css-3.png" alt="html"></img>
                <h3>Css</h3>
              </div>
              <div className='col-logo'>
                <img src="/image/js.png" alt="html"></img>
                <h3>Javascript</h3>
              </div>
              <div className='col-logo'>
                <img src="/image/physics.png" alt="html"></img>
                <h3>React js</h3>
              </div>
              <div className='col-logo'>
                <img src="/image/bootstrap.png" alt="html"></img>
                <h3>Bootstrap</h3>
              </div>
              
            </div>
          </div>

          <div className='devloper'>
            <h1>Mobile devloper</h1>
          </div>

          {/* mobile */}
          <div className='rol'>
            <div className='rol-img'>
              <img src='/image/02.png' alt='mobile' className='logo-dev'></img>
            </div>

            <div className='col-text'>
              <div className='col-logo'>
                <img src="/image/flutter.png" alt="html"></img>
                <h3>Flutter</h3>  
              </div>
              <div className='col-logo'>
                <img src="/image/firebase.png" alt="html"></img>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

        </div>


        <FooterMe/>
      </div>
    )
  }
}

export default Home