import React, { Component } from 'react';

import ReactRevealText from   'react-reveal-text';


import iconimg from "../content/img/iconimg.png"
import "./xxx.css"
class Circle extends Component {

    constructor() {
        super();
        this.state = { show: false };
        this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
      }
    
      onMouseEnter() {
        console.log('true');
        this.setState({ show: false });
      }
    
      onMouseLeave() {
        console.log('false');
        this.setState({ show: true });
      }
    

      componentDidMount() {
        setTimeout(() => {
          this.setState({ show: true });
        }, 1000);
      }
 
  render() {
   

    return (
    <div>








      
        <section className="promo_area">
        <div className="containerx display-flex">
            <div className="promo-content">
            <img  className="wow fadeInDown img-auto "  src={iconimg} alt=" paint icon"/>
            <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className=" wow fadeInUp  ">Designed With Purpose </ReactRevealText> </h2> 
                <p className="wow fadeInUp" delay="950ms">Carefully crafted, beautiful and useful Library of templates are comming soon.
                Check out our Business essential package. Getting your business online within days.</p>
            </div>
            <div className="round-planet planet">
                <div className="round-planet planet2">
                    <div className="round-planet planet3">
                    </div>
                    <div className="star star1"></div>
                    <div className="star star2"></div>
                    <div className="star star3"></div>
                    <div className="star star4"></div>
                    <div className="star star1 star5"></div>
                    <div className="star star2 star6"></div>
                    <div className="star star3 star7"></div>
                    <div className="star star4 star8"></div>
                </div>
            </div>
        </div>
    </section>

       
    </div>

    
    );
  }
}

export default Circle;
