import React from 'react';
import logo from '../../../logo.svg';
import './style.scss';

class Base extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="page">
          <div className="header">
            <div className="logo"><div>Quik</div>Tix</div>
            <div className="items">
            <div className="headerItem">
              About Us
            </div>
            </div>
          </div>
        </div>
        <div className="mainSection">
          <div className="overlay">
            <div className="logo">  
                <img src={require("../../../images/title.png")} />
            </div>
            <div className="header">
              <div>Quik</div>Tix
            </div>
            <div className="paragraph">
              Jamaica's new no #1 platform to find and promote social events. 
            </div>
          </div>
        </div>
        <div className="section b1">
            <div className="overlay">
              <div className="content reverse">
              <div className="info-right">
                  <div className="header">
                      Find Events
                  </div>
                  <div className="paragraph">
                      QuikTix is designed to make attending events as simple as possible. Search for the most popular events near you.
                  </div>
                </div>
                <div className="image ileft"></div>
              </div>
            </div>
        </div>
        <div className="section b3">
          <div className="overlay">
            <div className="content">
              <div className="info">
                <div className="header">
                  Purchase Tickets
                  </div>
                <div className="paragraph">
                  We're 100% paperless purchase tickets online anytime, any place, anywhere from your smartphone. 
                  </div>
              </div>
              <div className="image iright"></div>
            </div>
          </div>
        </div>
        <div className="section b2">
            <div className="overlay">
            <div className="content reverse">
              <div className="info-right">
                <div className="header">
                  See who's coming
                  </div>
                <div className="paragraph">
                    Like and share events with your friends and see who's interested.
                  </div>
              </div>
              <div className="image ileft"></div>
            </div>
            </div>
        </div>  
        <div className="footerSection">
          <div className="overlay">
            <div className="info">
            <div className="title">
            Developers
            </div>
              <div className="teamInfo">
              <div className="item">
                  <div><img className="icon" src={require("../../../images/icon4.png")} /></div>
                  <div style={{ margin: "10px 0" ,textAlign:"center" }}>
                  <div>
                  Orane Henriques 
                  </div>
                  <div>
                    email: orane.henriques@gmail.com
                  </div>
                  <div>
                    Lead application designer, App developer, Web developer 
                  </div>
                  </div>
              </div>
              <div className="item">
                  <div><img className="icon" src={require("../../../images/icon2.jpg")} /></div>
                  <div style={{margin:"10px 0", textAlign:"center"}}>
                  <div>
                  Dario Linton
                  </div>
                  <div>
                    email: dlinton@gmail.com
                  </div>
                  <div>
                    Application designer, Web developer
                  </div>
                  </div>
              </div>
              <div className="item">
                  <div><img className="icon" src={require("../../../images/icon3.jpg")} /></div>
                  <div style={{ margin: "10px 0" ,textAlign:"center" }}>
                  <div>
                  Ato Plummer
                  </div>
                  <div>
                    email: atoplummer@gmail.com
                  </div>
                  <div>
                    Developer
                  </div>
                  </div>
              </div>
              <div className="item">
                  <div><img className="icon" src={require("../../../images/icon1.jpg")} /></div>
                  <div style={{ margin: "10px 0" ,textAlign:"center" }}>
                  <div>
                  Richard Howlett
                  </div>
                  <div>
                    email: richardhowlett14@gmail.com
                  </div>
                  <div>
                    Developer
                  </div>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </div>      
      </div>
    );
  }
}

export default Base;
