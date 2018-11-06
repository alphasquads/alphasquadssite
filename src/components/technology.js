import React, { Component } from 'react';



import ReactRevealText from   'react-reveal-text';
import alphalogo from "../content/svg/alphalogo.svg"

import github from "../content/img/github.webp"
import golang from "../content/img/golang.webp"
import digitalocean from "../content/img/digitalocean.webp"
import firebase from "../content/img/firebase.webp"
import mongodb from "../content/img/mongodb.webp"
import nodejs from "../content/img/nodejs.webp"
import magento from "../content/img/magento.webp"
import docker from "../content/img/docker.webp"
import cloudflare from "../content/img/cloudflare.webp"
import "./xxx.css"
class Technology extends Component {

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





        

<section style={{   
    background: `transparent` }} className="software_promo_area sec_pad">
        <div className="containerx">
            <div className="sec_title text-center wow fadeInUp soft-promo" data-wow-delay="0.3s" >
            <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show} style={{   
            color: `black` }}   classNameName=" f_p f_size_30 l_height50 f_700 t_color2 ">Technology &amp; Services we use </ReactRevealText> </h2> 
            
                
            </div>
            <div className="round_shape mt_30">
                <div className="r_shape r_shape_one"></div>
                <div className="r_shape r_shape_two"></div>
                <div className="r_shape r_shape_three"></div>
                <div className="r_shape r_shape_four"></div>
                <div className="r_shape r_shape_five">
                    <span className="text">
                    <img  className="  img-auto "  src={alphalogo} alt="alphalogo"/>

                      
                    </span>
                </div>
                <div className="s_promo_info">
                    <div className="promo_item item_one scroll_animation in-view">
                        <div className="text">
                        <img className=" hw-50"  src={firebase} alt="firebase"/>
                            <p>Firerrbase</p>
                        </div>
                    </div>
                    <div className="promo_item item_two scroll_animation in-view">
                        <div className="text">
                        <img className=" hw-50"   src={magento} alt="magento"/>
                            <p>Magento</p>
                        </div>
                    </div>
                    <div className="promo_item item_three scroll_animation in-view">
                        <div className="text">
                        <img className=" hw-50"   src={docker} alt="docker"/>
                            <p>Docker</p>
                        </div>
                    </div>
                    <div className="promo_item item_four scroll_animation in-view">
                        <div className="text">
                        <img className=" hw-50"   src={cloudflare} alt="cloudflare"/>
                            <p>Cloudflare</p>
                        </div>
                    </div>
                    <div className="promo_item item_five scroll_animation in-view">
                        <div className="text">
                        <img className=" hw-50"   src={mongodb} alt="mongo db"/>
                            <p>Mongodb</p>
                        </div>
                    </div>
                    <div className="promo_item item_six scroll_animation in-view">
                        <div className="text">
                        <img className=" hw-50"   src={nodejs} alt="node js"/>
                        </div>
                    </div>
                    <div className="promo_item item_seven scroll_animation in-view">
                        <div className="text">
                        <img className=" hw-50"   src={github} alt="github"/>
                        </div>
                    </div>
                    <div className="promo_item item_eight scroll_animation in-view">
                        <div className="text">
                        <img className=" hw-50"   src={digitalocean} alt="digital ocean"/>
                            <p>Digital Ocean</p>
                        </div>
                    </div>
                    <div className="promo_item item_nine scroll_animation in-view">
                        <div className="text">
                        <img className=" hw-50"   src={golang} alt="golang"/>
                            <p>Golang</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>






      
     

       
    </div>

    
    );
  }
}

export default Technology;
