import React, { Component } from 'react';
import { Link } from 'gatsby';
import healthcare from "../content/svg/healthcare.svg"
import education from "../content/svg/education.svg"
import ecommerce from "../content/svg/ecommerce.svg"
import realestate from "../content/svg/realestate.svg"
import startup from "../content/svg/startup.svg"
import logistics from "../content/svg/logistics.svg"
import designicon from "../content/svg/designicon.svg"
import developmenticon from "../content/svg/developmenticon.svg"
import marketingicon from "../content/svg/marketingicon.svg"
import businessicon from "../content/svg/businessicon.svg"
import ReactRevealText from   'react-reveal-text';

import featureworkbg from "../content/img/featureworkbg.webp"
import featuresbg from "../content/img/featuresbg.webp"
import servicesimgjp from "../content/img/servicesimgjp.webp"


import "./xxx.css"




class Services extends Component {
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




    <section style={{       background:` rgba(251, 251, 253, 0.85)`  }}  className="feature_work_area fwa_2"> 
    <img  className="  layer layer_1 img-auto position-absolute"  src={featureworkbg} alt=""/>
        <div className="containerx">
          <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="  tittle ">Services </ReactRevealText> </h2> 
           
            <div className="row">
                <div className="col-lg-6 feature_img wow fadeInLeft" >
                <img  className=" fetures_bg layer img-auto"  src={featuresbg} alt=""/>
                <img  className="  img-auto"  src={servicesimgjp} alt=""/>

                   
                </div>
                <div className="col-lg-6 feature_content wow fadeInRight" >
                  <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="   ">Let’s discover, build and grow your  business. </ReactRevealText> </h2> 
                  
                    <p>
                    We provide business essential services. Whether you’re enterprise, company or startup - we can certainly help you!
                    </p>
                    <Link to="/services#servicesid" className="btn_hover agency_banner_btn wow fadeInLeft" activeStyle={{
            color: "#5e2ced",
          }}> Explore </Link>
                </div>
            </div>
        </div>
    </section>



 


        <section id="servicesid" style={{       background:` rgba(251, 251, 253, 0.95)`  }}  className="prototype_service_area_three bg_color">
        <div className="containerx">
            <div className="prototype_service_info">
                <div className="symbols-pulse active">
                    <div className="pulse-1"></div>
                    <div className="pulse-2"></div>
                    <div className="pulse-3"></div>
                    <div className="pulse-4"></div>
                    <div className="pulse-x"></div>
                </div>
                  <h2 id="designid"  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="  f_size_30 f_600 t_color3 l_height45 text-center mb_90 wow fadeInUp ">DESIGN </ReactRevealText> </h2> 
               
                <div className="row p_service_info">
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item  wow fadeInLeft" data-wow-delay="0.3s" >
                            <div className="icon icon_one"><img  className=" img-auto pad-8"  src={designicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Logo &amp; Branding</h5>
                            <p className="f_300">Giving your business an identity to get recognized. Total branding solution. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item   wow fadeInLeft" data-wow-delay="0.5s" >
                            <div className="icon icon_two"><img  className=" img-auto pad-8"  src={designicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Website Design UI/UX</h5>
                            <p className="f_300"> Best design practices applied to drive customers attention with responsive capabilities. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item wow fadeInLeft" data-wow-delay="0.4s" >
                            <div className="icon icon_three"><img  className=" img-auto pad-8"  src={designicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Mobile App Design UI/UX</h5>
                            <p className="f_300">Wireframing and prototyping solutions focused on user experience and engagement.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item  wow fadeInLeft" data-wow-delay="0.7s" >
                            <div className="icon icon_four"><img  className=" img-auto pad-8"  src={designicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Graphic/Print Design</h5>
                            <p className="f_300">Promotional materials and digital graphics solutions from best graphic designers.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item   wow fadeInLeft" data-wow-delay="0.5s" >
                            <div className="icon icon_five"><img  className=" img-auto pad-8"  src={designicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Video Production</h5>
                            <p className="f_300">For an event film making to promotonal videos with animations.</p>
                        </div>
                    </div>
                   
                </div>

  <h2 id="developmentid" onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="   pad-top-50 f_size_30 f_600 t_color3  l_height45 text-center mb_90 wow fadeInUp ">DEVELOPMENT </ReactRevealText> </h2> 
               
                <div className="row p_service_info">
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item  wow fadeInLeft" data-wow-delay="0.3s" >
                            <div className="icon icon_one"><img  className=" img-auto pad-8"  src={developmenticon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">API &amp; CMS</h5>
                            <p className="f_300">We develop secure and scalable backend, content management for front-end workflow.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item   wow fadeInLeft" data-wow-delay="0.5s" >
                            <div className="icon icon_two"><img  className=" img-auto pad-8"  src={developmenticon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Mobile App Development</h5>
                            <p className="f_300">Scalable mobile apps with best technology stack we develop.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item wow fadeInLeft" data-wow-delay="0.4s" >
                            <div className="icon icon_three"><img  className=" img-auto pad-8"  src={developmenticon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">eCommerce</h5>
                            <p className="f_300">With Opensource to custom eCommerce sollutions we design for best customer experiance.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item  wow fadeInLeft" data-wow-delay="0.7s" >
                            <div className="icon icon_four"><img  className=" img-auto pad-8"  src={developmenticon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Hosting &amp; Deployment</h5>
                            <p className="f_300">Secure, scalable and affordable hosting solutions we provide.</p>
                        </div>
                    </div>
                   
                </div>

  <h2 id="marketingid" onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="  pad-top-50 f_size_30 f_600 t_color3 l_height45 text-center mb_90 wow fadeInUp  ">DIGITAL MARKETING </ReactRevealText> </h2> 
                
                <div className="row p_service_info">
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item  wow fadeInLeft" data-wow-delay="0.3s" >
                            <div className="icon icon_one"><img  className=" img-auto pad-8"  src={marketingicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Search Engine Optimization</h5>
                            <p className="f_300">Making your business list in search engine's directory and ranking up.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item   wow fadeInLeft" data-wow-delay="0.5s" >
                            <div className="icon icon_two"><img  className=" img-auto pad-8"  src={marketingicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Adwords</h5>
                            <p className="f_300">Best advertising solution out there for your online business.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item wow fadeInLeft" data-wow-delay="0.4s" >
                            <div className="icon icon_three"><img  className=" img-auto pad-8"  src={marketingicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Pay-Per-Click</h5>
                            <p className="f_300">Advertising your business with flexible solution for getting traffic to your business.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item  wow fadeInLeft" data-wow-delay="0.7s" >
                            <div className="icon icon_four"><img  className=" img-auto pad-8"  src={marketingicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Email Marketing</h5>
                            <p className="f_300">Strategic lead management formula with our email marketing bring wonderfull results.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item   wow fadeInLeft" data-wow-delay="0.5s" >
                            <div className="icon icon_five"><img  className=" img-auto pad-8"  src={marketingicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Display Marketing</h5>
                            <p className="f_300">Banner advertisements and visual engagement advetising solution.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item wow fadeInLeft" data-wow-delay="0.7s" >
                            <div className="icon icon_six"><img  className=" img-auto pad-8"  src={marketingicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Social Media Marketing</h5>
                            <p className="f_300">Making use of social media platforms we have great strategies to generate leads.</p>
                        </div>
                    </div>
                </div>

  <h2  id="businessid" onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="  pad-top-50 f_size_30 f_600 t_color3 l_height45 text-center mb_90 wow fadeInUp  ">BUSINESS </ReactRevealText> </h2> 
              
                <div className="row p_service_info">
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item  wow fadeInLeft" data-wow-delay="0.3s" >
                            <div className="icon icon_one"><img  className=" img-auto pad-8"  src={businessicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">E-Fillings</h5>
                            <p className="f_300">Basics to advanced paper works your business requires, We've got you covered.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item   wow fadeInLeft" data-wow-delay="0.5s" >
                            <div className="icon icon_two"><img  className=" img-auto pad-8"  src={businessicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Business Consulting</h5>
                            <p className="f_300">Face the hurdles and challenges of business with the support of our well experianced strategists.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item wow fadeInLeft" data-wow-delay="0.4s" >
                            <div className="icon icon_three"><img  className=" img-auto pad-8"  src={businessicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Content Writing</h5>
                            <p className="f_300">Preparing the contenet and presenting it the best way.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 text-center-webkit">
                        <div className="p_service_item  wow fadeInLeft" data-wow-delay="0.7s" >
                            <div className="icon icon_four"><img  className=" img-auto pad-8"  src={businessicon} alt=""/></div>
                            <h5 className="f_600 f_p t_color3">Analytics &amp; Reporting</h5>
                            <p className="f_300">Research and analysis brings out wonderfull results. Work with best talents out there.</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>


 <section style={{       background:` rgba(251, 251, 253, 0.85)`  }}  className="prototype_service_area_three bg_color">
        <div className="containerx">
            <div className="prototype_service_info">
                <div className="symbols-pulse active">
                    <div className="pulse-1"></div>
                    <div className="pulse-2"></div>
                    <div className="pulse-3"></div>
                    <div className="pulse-4"></div>
                    <div className="pulse-x"></div>
                </div>
                  <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className=" f_size_30 f_600 t_color3 l_height45 text-center mb_90 wow fadeInUp  ">Industries we work with </ReactRevealText> </h2> 
              
                <div className="row p_service_info">
                      <div className="col-lg-5 col-sm-6 text-center-webkit">
                        <div className="p_service_item   wow fadeInLeft" data-wow-delay="0.5s" >
                        <img  className=" img-auto"  src={healthcare} alt=""/>
                            <h5 className="f_600  pad-top-40  f_p t_color3">Healthcare</h5>
                           
                        </div>
                   
                    </div><div className="col-lg-5  martop-lg-200  col-sm-6 text-center-webkit">
                        <div className="p_service_item   wow fadeInLeft" data-wow-delay="0.5s" >
                        <img  className=" img-auto"  src={ecommerce} alt=""/>
                            <h5 className="f_600  pad-top-40  f_p t_color3">e-Commerce</h5>
                           
                        </div>
                    </div><div className="col-lg-5 minusmartop-sm-200  col-sm-6 text-center-webkit">
                        <div className="p_service_item   wow fadeInLeft" data-wow-delay="0.5s" >
                        <img  className=" img-auto"  src={startup} alt=""/>
                            <h5 className="f_600  pad-top-40   f_p t_color3">Start Ups</h5>
                           
                        </div>
                    </div><div className="col-lg-5  col-sm-6 text-center-webkit">
                        <div className="p_service_item   wow fadeInLeft" data-wow-delay="0.5s" >
                        <img  className=" img-auto"  src={realestate} alt=""/>
                            <h5 className="f_600  pad-top-40  f_p t_color3">Real Estate</h5>
                           
                        </div>
                    </div><div className="col-lg-5 minusmartop-sm-200 col-sm-6 text-center-webkit">
                        <div className="p_service_item   wow fadeInLeft" data-wow-delay="0.5s" >
                        <img  className=" img-auto"  src={logistics} alt=""/>
                            <h5 className="f_600  pad-top-40  f_p t_color3">Logistics</h5>
                           
                        </div>
                    </div>
                    <div className="col-lg-5  col-sm-6 text-center-webkit">
                        <div className="p_service_item   wow fadeInLeft" data-wow-delay="0.5s" >
                        <img  className=" img-auto"  src={education} alt=""/>
                            <h5 className="f_600  pad-top-40  f_p t_color3">Education</h5>
                           
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

export default Services;
