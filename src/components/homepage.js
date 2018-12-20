import React, { Component } from 'react';

import ReactRevealText from   'react-reveal-text';
import { Link } from 'gatsby';
import design from "../content/svg/design.webp"
import development from "../content/svg/development.svg"
import marketing from "../content/svg/marketing.webp"
import business from "../content/svg/business.svg"
import strategy from "../content/svg/strategy.webp"
import scaling from "../content/svg/scaling.svg"
import designicon from "../content/svg/designicon.svg"
import developmenticon from "../content/svg/developmenticon.svg"
import marketingicon from "../content/svg/marketingicon.svg"
import businessicon from "../content/svg/businessicon.svg"
import heroimg from "../content/svg/heroimg.webp"

import featureworkbg from "../content/img/featureworkbg.webp"
import bannerbg from "../content/img/bannerbg.webp"
import bannerlayer1 from "../content/img/bannerlayer1.webp"
import designdeambg from "../content/img/designdeambg.webp"
import homepagehandshake from "../content/img/homepagehandshake.webp"

import "./xxx.css"
class Homepage extends Component {
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

 
         


    <section className="agency_banner_area bg_color">
    <img  className="  layer layer_1 img-auto position-absolute"  src={featureworkbg} alt="bg img"/>
    <img  className=" banner_shap img-auto "  src={bannerbg} alt="banner background"/>
        <div className="containerx custom_containerx">
            <div className="row">
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="agency_content">
                    <h2 onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="f_700 t_color3 mb_40 wow fadeInLeft "> Omnichannel solutions for Brands &amp; Services </ReactRevealText> </h2> 
                        <p className="f_300 f_size_30 l_height28 wow fadeInLeft" data-wow-delay="0.4s" >Creating best in class beautiful digital products engineered to drive growth for your business.</p>
                        <div className="action_btn d-flex align-items-center mt_60">
                         <Link className="btn_hover agency_banner_btn wow fadeInLeft"  style={{ color: `white`, background: `#5e2ced` }} to="/contactus" activeStyle={{
            background: "white",
          }}> Get in Touch </Link>
                           
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 text-right">
                <img  className="  protype_img wow pad-top-60 fadeInRight img-auto"  src={heroimg} alt="hero dashboard image"/>                </div>
            </div>
           
        </div>
    </section>

<section style={{       background:` rgba(251, 251, 253, 0.85)`, paddingBottom:`150px`  }}  className="design_team_area pad-bottom-50">
<img  className=" layer layer_1 img-auto "  src={bannerlayer1} alt="bg img"/>
<img  className=" layer layer_2 img-auto "  src={designdeambg} alt="bg img"/>
        
        <div className="containerx">
        <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="wow fadeInUp ">We’re your Digital Partner </ReactRevealText> </h2> 
            <p className="wow fadeInUp" data-wow-delay="0.2s" >We provide high quality and cost effective services essential for any business to get started &amp; scale. Being a digital partner, you can handover the technical stuff to us so that you can completely focus on Business logic. </p>
            <div className="team_designer">
                <div className="video_area">
                    <h3>Helping people to shape their business in new diemensions.</h3> 
                    <Link to="/services" className="popup-youtube" ><svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 507.451 507.45" >

	<g id="settings">
		<path d="M440.813,280.5c0-7.65,2.55-15.3,2.55-25.5s0-17.85-2.55-25.5l53.55-43.35c5.1-5.1,5.1-10.2,2.55-15.3l-51-89.25    c-2.55-2.55-7.649-5.1-15.3-2.55l-63.75,25.5c-12.75-10.2-28.05-17.85-43.35-25.5l-10.2-66.3C315.863,5.1,308.212,0,303.113,0    h-102c-5.101,0-12.75,5.1-12.75,10.2l-10.2,68.85c-15.3,5.1-28.05,15.3-43.35,25.5l-61.2-25.5c-7.65-2.55-12.75,0-17.851,5.1    l-51,89.25c-2.55,2.55,0,10.2,5.1,15.3l53.55,40.8c0,7.65-2.55,15.3-2.55,25.5s0,17.85,2.55,25.5l-53.55,43.35    c-5.1,5.101-5.1,10.2-2.55,15.301l51,89.25c2.55,2.55,7.649,5.1,15.3,2.55l63.75-25.5c12.75,10.2,28.05,17.85,43.35,25.5    l10.2,66.3c0,5.1,5.1,10.2,12.75,10.2h102c5.101,0,12.75-5.101,12.75-10.2l10.2-66.3c15.3-7.65,30.6-15.3,43.35-25.5l63.75,25.5    c5.101,2.55,12.75,0,15.301-5.101l51-89.25c2.55-5.1,2.55-12.75-2.551-15.3L440.813,280.5z M252.113,344.25    c-48.45,0-89.25-40.8-89.25-89.25s40.8-89.25,89.25-89.25s89.25,40.8,89.25,89.25S300.563,344.25,252.113,344.25z" fill="#FFFFFF"/>
	</g>

</svg>
</Link>
                   
                    <h6>Explore Services in detail. </h6>
                </div>
                <div className="designe_img">
                <img  className="  img-auto "  src={homepagehandshake} alt="handshake image"/>
                  
                </div>
            </div>
        </div>
    </section>



<section style={{       background:` transparent`
     }}  className="service_area sec_pad">
        <div className="containerx custom_containerx p0">
            <div style={{       background:` rgba(251, 251, 253, 0.71)`}}  className="sec_title text-center">
            <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="f_p  f_700 t_color2 ">Services </ReactRevealText> </h2> 
                <p style={{       fontSize:`18px`, fontWeight:`500`}} className="f_300 f_size_16 l_height30">Below are mentioned our core services. Click on to explore more services.</p>
            </div>
            <div className="row service_info mt_70 mb_30">
             <div className="col-lg-3 col-sm-6 mb-30">
                 <div className="service_item border-r30-s1">
                        <div className="icon s_icon_one"><img  className="  pad-8"  src={designicon} alt="design icon"/></div>
                        <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Design</h4>
                         <p >An impressive visual experience has a significant effect. We trust that incredible structure can change the manner in which customers and brands connect with one another.</p> 
                         <Link to="/services#designid">    <img  className=" img-auto"  src={design} alt="design image"/></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-30">
                    <div className="service_item border-r30-s1">
                        <div className="icon s_icon_two"><img  className="  pad-8"  src={developmenticon} alt="development icon"/>
</div>
                        <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Development</h4>
                        <p>Crisp thoughts, advancement, the most recent technology, and a comprehension of the business, are crucial to creating forefront applications. From back end to front end, we have it covered.</p>
                         <Link to="/services#developmentid"> <img  className=" img-auto"  src={development} alt="development image"/></Link>
                      </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-30">
                    <div className="service_item border-r30-s1">
                        <div className="icon s_icon_three"><img  className="  pad-8"  src={marketingicon} alt="marketing icon"/>
</div>
                        <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Digital <br/> Marketing</h4>
                        <p>We don't simply build your activity, we focus on the movement you need. From statistical surveying to advertising idea, we execute promoting techniques that drive conversions.</p>
                       <Link to="/services#marketingid">   <img  className=" img-auto"  src={marketing} alt="marketing image"/></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-30">
                    <div className="service_item border-r30-s1">
                        <div className="icon s_icon_four"><img  className="  pad-8"  src={businessicon} alt="business icon"/></div>
                        <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Business</h4>
                        <p>Business paperwork, analytics &amp; investigation sit at the base of every business. With the roadmap known it's easy to run business with confidence.</p>
                        <Link to="/services#businessid">  <img  className=" img-auto"  src={business} alt="business image"/></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>


<section  style={{       background:` rgba(251, 251, 253, 0.74)`
     }}  className="features_area sec_pad">
        <div className="containerx">
            <div className="row feature_info">
                <div className="col-lg-6">
                    <div className="feature_img f_img_one">
                    <img  className="text-center img-auto"  src={strategy} alt="strategy image"/>
                     </div>
                </div>
                <div className="col-lg-6">
                    <div className="f_content">
                        <div className="icon">
                        <div className=" icon-s1"><svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 561 561" >

<g id="gps-fixed">
    <path d="M280.5,178.5c-56.1,0-102,45.9-102,102c0,56.1,45.9,102,102,102c56.1,0,102-45.9,102-102    C382.5,224.4,336.6,178.5,280.5,178.5z M507.45,255C494.7,147.9,410.55,63.75,306,53.55V0h-51v53.55    C147.9,63.75,63.75,147.9,53.55,255H0v51h53.55C66.3,413.1,150.45,497.25,255,507.45V561h51v-53.55    C413.1,494.7,497.25,410.55,507.45,306H561v-51H507.45z M280.5,459C181.05,459,102,379.95,102,280.5S181.05,102,280.5,102    S459,181.05,459,280.5S379.95,459,280.5,459z" fill="#FFFFFF"/>
</g>

</svg>
</div>
                        </div>
                        <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="f_600 f_size_30">Strategy </ReactRevealText> </h2> 
                        <p className="f_300">With regards to the achievement of your site, application or programming, procedure is everything. It's an establishment for your prosperity. it's do or kick the bucket.

We comprehend business. That is the reason we start each venture with a workshop — creating a stand-out, novel procedure that is intended to enable you to win</p>
                    </div>
                </div>
            </div>
            <div className="row feature_info flex-row-reverse mt_130">
                <div className="col-lg-6 ">
                    <div className="feature_img f_img_two">
                    <img  className="text-center img-auto"  src={development} alt="development image"/>    </div>
                </div>
                <div className="col-lg-6">
                    <div className="f_content">
                        <div className="icon">
                            
                            <div className=" icon-s2"><svg className="pad-8" xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 408 408" >

<g id="keyboard-control">
    <path d="M51,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S79.05,153,51,153z M357,153c-28.05,0-51,22.95-51,51    s22.95,51,51,51s51-22.95,51-51S385.05,153,357,153z M204,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51    S232.05,153,204,153z" fill="#FFFFFF"/>
</g>

</svg>
</div>
                        </div>
                        <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="f_600 f_size_30">Development </ReactRevealText> </h2> 
                        <p className="f_300">Best squad is needed to implement on best designed strategy. We reach out to the best Dev Squad out there who know very well the stack on which the project is based on and have the tough experiance with it. Working
                        with us you will never have to worry about fraud and over-paying for the need. </p>
                    </div>
                </div>
            </div>
            <div className="row feature_info mt_130">
                <div className="col-lg-6">
                    <div className="feature_img f_img_one">
                    <img  className=" img-auto text-center"  src={marketing} alt="marketing image"/>
                     </div>
                </div>
                <div className="col-lg-6">
                    <div className="f_content">
                        <div className="icon">
                        <div className=" icon-s3"><svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 561 561">

	<g id="cast">
		<path d="M510,51H51C22.95,51,0,73.95,0,102v76.5h51V102h459v357H331.5v51H510c28.05,0,51-22.95,51-51V102    C561,73.95,538.05,51,510,51z M0,433.5V510h76.5C76.5,466.65,43.35,433.5,0,433.5z M0,331.5v51c71.4,0,127.5,56.1,127.5,127.5h51    C178.5,410.55,99.45,331.5,0,331.5z M0,229.5v51c127.5,0,229.5,102,229.5,229.5h51C280.5,354.45,155.55,229.5,0,229.5z" fill="#FFFFFF"/>
	</g>

</svg>

</div>
                        </div>
                        <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="f_600 f_size_30">Marketing </ReactRevealText> </h2> 
                       
                        <p className="f_300">Marketing is tied in with interfacing with individuals and helping them tackle their issues.

The best promoting engages clients and influences them to feel sure and savvy. We make encounters that pull in, draw in, and change over.</p>
                    </div>
                </div>
            </div>
            <div className="row feature_info flex-row-reverse mt_130">
                <div className="col-lg-6 ">
                    <div className="feature_img f_img_two">
                    <img  className="text-center img-auto"  src={scaling} alt="scaling image"/>    </div>
                </div>
                <div className="col-lg-6">
                    <div className="f_content">
                        <div className="icon">
                        <div className=" icon-s4"><svg className="pad-8" xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 535.5 535.5" s>

<g id="send">
    <polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75   " fill="#FFFFFF"/>
</g>

</svg>
</div>
                        </div>
                        
                        <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="f_600 f_size_30">Scaling </ReactRevealText> </h2> 
                        <p className="f_300">A dedicated squad experianced in analytics and decision making we have as per customer requirement. Also, We make sure the development is scalable and provide maintenance and necessary support for scaling requirements. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    

<section style={{       background:` #fbfbfde6`
     }} className="agency_service_area bg_color">
        <div className="containerx custom_containerx">
       
        <div className="sec_title text-center"> <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="f_p f_size_30 l_height50 f_700 t_color2 ">Hire JAM Squad </ReactRevealText> </h2> 
        <p className="f_400 f_size_20 l_height30 mb_20">Having an existing Website or just getting started, kickstart with JAM stack. This is much faster, secure, cost effective &amp; scalable than wordpress or other cms. Explore the packages for exciting offer on JAM and hosting.</p></div>
             <div className="row mb_30">
                <div className="col-lg-3 col-sm-6">
                    <div className="p_service_item agency_service_item text-center text-center-webkit pr_70 wow fadeInUp" data-wow-delay="0.3s" >
                        <div className="icon">
                        <svg aria-hidden="true" data-prefix="fas" data-icon="tachometer-alt" className="svg-inline--fa fa-tachometer-alt fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="url(#skyGradient)" d="M295.973 160H180.572L215.19 30.184C219.25 14.956 207.756 0 192 0H56C43.971 0 33.8 8.905 32.211 20.828l-31.996 240C-1.704 275.217 9.504 288 24.004 288h118.701L96.646 482.466C93.05 497.649 104.659 512 119.992 512c8.35 0 16.376-4.374 20.778-11.978l175.973-303.997c9.244-15.967-2.288-36.025-20.77-36.025z" ></path>
    
    <defs>
            <linearGradient id="skyGradient" x1="100%" y1="100%">
              <stop offset="0%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;blue;red;red;black;red;red;purple;lightblue" dur="14s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue" dur="14s" repeatCount="indefinite" />
                <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
    </defs>
    </svg>
                          
                        </div>
                        <h5 className="f_600 f_p t_color3">Blazing Performance</h5>
                        <p>Websites built with static site generators are characterized by insanely fast loading times.</p>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="p_service_item agency_service_item text-center text-center-webkit pl_20 pr_70 wow fadeInUp" data-wow-delay="0.4s" >
                        <div className="icon">
                             <svg aria-hidden="true" data-prefix="fas" data-icon="tachometer-alt" className="svg-inline--fa fa-tachometer-alt fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"><path fill="url(#skyGradient)" d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" ></path>
    
    <defs>
            <linearGradient id="skyGradient" x1="100%" y1="100%">
              <stop offset="0%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;blue;red;red;black;red;red;purple;lightblue" dur="14s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue" dur="14s" repeatCount="indefinite" />
                <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
    </defs>
    </svg>
                        </div>
                        <h5 className="f_600 f_p t_color3">Security</h5>
                        <p>Being static means being secure. You're gaining immunity to malicious injections.</p>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="p_service_item agency_service_item text-center text-center-webkit pl_20 pr_70 wow fadeInUp" data-wow-delay="0.6s" >
                        <div className="icon">
                             <svg aria-hidden="true" data-prefix="fas" data-icon="tachometer-alt" className="svg-inline--fa fa-tachometer-alt fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" 
                             viewBox="0 0 576 512"><path fill="url(#skyGradient)" d="M537.585 226.56C541.725 215.836 544 204.184 544 192c0-53.019-42.981-96-96-96-19.729 0-38.065 5.954-53.316 16.159C367.042 64.248 315.288 32 256 32c-88.366 0-160 71.634-160 160 0 2.728.07 5.439.204 8.133C40.171 219.845 0 273.227 0 336c0 79.529 64.471 144 144 144h368c70.692 0 128-57.308 128-128 0-61.93-43.983-113.586-102.415-125.44z" ></path>
    <defs>
            <linearGradient id="skyGradient" x1="100%" y1="100%">
              <stop offset="0%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;blue;red;red;black;red;red;purple;lightblue" dur="14s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue" dur="14s" repeatCount="indefinite" />
                <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
    </defs>
    </svg>
                        </div>
                        <h5 className="f_600 f_p t_color3">Scalability</h5>
                        <p>Your website's gaining popularity? No complex code has to be run each time a visitor hits it. That means more money stays in your wallet.</p>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="p_service_item agency_service_item text-center text-center-webkit pl_50 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="icon">
                             <svg aria-hidden="true" data-prefix="fas" data-icon="tachometer-alt" className="svg-inline--fa fa-tachometer-alt fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"><path fill="url(#skyGradient)" d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z" ></path>
    <defs>
            <linearGradient id="skyGradient" x1="100%" y1="100%">
              <stop offset="0%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;blue;red;red;black;red;red;purple;lightblue" dur="14s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue" dur="14s" repeatCount="indefinite" />
                <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
    </defs>
    </svg>
                        </div>
                        <h5 className="f_600 f_p t_color3">Auto Backups</h5>
                        <p>Something went wrong? If you store your project on Git getting back to previous version will take you literally 30 seconds</p>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="p_service_item agency_service_item text-center text-center-webkit pr_70 wow fadeInUp" data-wow-delay="0.3s" >
                        <div className="icon">
                        <svg aria-hidden="true" data-prefix="fas" data-icon="tachometer-alt" className="svg-inline--fa fa-tachometer-alt fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512"><path fill="url(#skyGradient)" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" ></path>
    <defs>
            <linearGradient id="skyGradient" x1="100%" y1="100%">
              <stop offset="0%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;blue;red;red;black;red;red;purple;lightblue" dur="14s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue" dur="14s" repeatCount="indefinite" />
                <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
    </defs>
    </svg>
                        </div>
                        <h5 className="f_600 f_p t_color3">Ease of Change</h5>
                        <p>With decoupled CMS you don't have to re-implement the whole CMS once you decide to redesign your website.</p>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="p_service_item agency_service_item text-center text-center-webkit pl_20 pr_70 wow fadeInUp" data-wow-delay="0.4s" >
                        <div className="icon">
                             <svg aria-hidden="true" data-prefix="fas" data-icon="tachometer-alt" className="svg-inline--fa fa-tachometer-alt fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"><path fill="url(#skyGradient)" d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z" ></path>
    <defs>
            <linearGradient id="skyGradient" x1="100%" y1="100%">
              <stop offset="0%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;blue;red;red;black;red;red;purple;lightblue" dur="14s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue" dur="14s" repeatCount="indefinite" />
                <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
    </defs>
    </svg>
                        </div>
                        <h5 className="f_600 f_p t_color3">Easy Maintenance</h5>
                        <p>There is no need for updates and technical maintenance of a headless CMS.</p>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="p_service_item agency_service_item text-center text-center-webkit pl_20 pr_70 wow fadeInUp" data-wow-delay="0.6s" >
                        <div className="icon">
                             <svg aria-hidden="true" data-prefix="fas" data-icon="tachometer-alt" className="svg-inline--fa fa-tachometer-alt fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512"><path fill="url(#skyGradient)" d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z" ></path>
    <defs>
            <linearGradient id="skyGradient" x1="100%" y1="100%">
              <stop offset="0%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;blue;red;red;black;red;red;purple;lightblue" dur="14s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue" dur="14s" repeatCount="indefinite" />
                <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
    </defs>
    </svg>
                        </div>
                        <h5 className="f_600 f_p t_color3">No platform limitations</h5>
                        <p>With headless CMS you don't have to deal with platforms like Wordpress, Drupal and Joomla and accept their flaws.</p>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="p_service_item agency_service_item text-center text-center-webkit pl_50 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="icon">
                             <svg aria-hidden="true" data-prefix="fas" data-icon="tachometer-alt" className="svg-inline--fa fa-tachometer-alt fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"><path fill="url(#skyGradient)" d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM456 96H344c-21.4 0-32.1 25.9-17 41l32.9 32.9-72 72.9-55.6-55.6c-4.7-4.7-12.2-4.7-16.9 0L96.4 305c-4.7 4.6-4.8 12.2-.2 16.9l28.5 29.4c4.7 4.8 12.4 4.9 17.1.1l82.1-82.1 55.5 55.5c4.7 4.7 12.3 4.7 17 0l109.2-109.2L439 249c15.1 15.1 41 4.4 41-17V120c0-13.3-10.7-24-24-24z" ></path>
    <defs>
            <linearGradient id="skyGradient" x1="100%" y1="100%">
              <stop offset="0%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;blue;red;red;black;red;red;purple;lightblue" dur="14s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="lightblue" stopOpacity=".5">
                <animate attributeName="stop-color" values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue" dur="14s" repeatCount="indefinite" />
                <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
    </defs>
    </svg>
                        </div>
                        <h5 className="f_600 f_p t_color3">Increased productivity</h5>
                        <p>It's generally easier and takes less time to set up, configure and deploy a headless CMS.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

        


          <section className="app_featured_area">
        <div className="triangle_shape"></div>
        <div className="containerx">
            <div className="row flex-row-reverse app_feature_info">
                <div className="col-lg-6">
                    <div className="app_fetured_item">
                        <div className="app_item item_one style1" data-parallax="{&quot;x&quot;: 0, &quot;y&quot;: 50}" >
                        <svg  className="hw-50"  xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 507.45 507.45" >

	<g id="share-alt">
		<path d="M408,178.5c-20.4,0-38.25,7.65-51,20.4L175.95,94.35c2.55-5.1,2.55-12.75,2.55-17.85C178.5,33.15,145.35,0,102,0    S25.5,33.15,25.5,76.5S58.65,153,102,153c20.4,0,38.25-7.65,51-20.4l181.05,104.55c-2.55,5.1-2.55,12.75-2.55,17.85    c0,5.1,0,12.75,2.55,17.85L153,379.95c-12.75-12.75-30.6-20.4-51-20.4c-40.8,0-73.95,33.15-73.95,73.95S61.2,507.45,102,507.45    s73.95-33.15,73.95-73.95c0-5.1,0-10.2-2.55-17.85L354.45,308.55c12.75,12.75,30.6,20.4,51,20.4c43.35,0,76.5-33.15,76.5-76.5    C481.95,209.1,451.35,178.5,408,178.5z" fill="#FFFFFF"/>
	</g>

</svg>

                            <h6 className="f_p f_400 f_size_16 w_color l_height45">Community</h6>
                        </div>
                        <div className="app_item item_two style2" data-parallax="{&quot;x&quot;: 0, &quot;y&quot;: -30}" >
                        <svg  className="hw-50"  xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 408 408" >

	<g id="person-outline">
		<path d="M204,48.45c30.6,0,53.55,22.95,53.55,53.55S234.6,155.55,204,155.55c-30.6,0-53.55-22.95-53.55-53.55    S173.4,48.45,204,48.45 M204,277.95c76.5,0,155.55,38.25,155.55,53.55v28.05H48.45V331.5C48.45,316.2,127.5,277.95,204,277.95     M204,0c-56.1,0-102,45.9-102,102s45.9,102,102,102c56.1,0,102-45.9,102-102S260.1,0,204,0L204,0z M204,229.5    c-68.85,0-204,33.15-204,102V408h408v-76.5C408,262.65,272.85,229.5,204,229.5L204,229.5z" fill="#FFFFFF"/>
	</g>

</svg>
                            <h6 className="f_p f_400 f_size_16 w_color l_height45">Honest pricing</h6>
                        </div>
                        <div className="app_item item_three style3" data-parallax="{&quot;x&quot;: 50, &quot;y&quot;: 10}" >
                        <svg  className="hw-50"  xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 510 510" >

	<g id="games">
		<path d="M331.5,140.25V0h-153v140.25l76.5,76.5L331.5,140.25z M140.25,178.5H0v153h140.25l76.5-76.5L140.25,178.5z M178.5,369.75    V510h153V369.75l-76.5-76.5L178.5,369.75z M369.75,178.5l-76.5,76.5l76.5,76.5H510v-153H369.75z" fill="#FFFFFF"/>
	</g>

</svg>
                            <h6 className="f_p f_400 f_size_16 w_color l_height45">Management</h6>
                        </div>
                        <div className="app_item item_four style4" data-parallax="{&quot;x&quot;: -20, &quot;y&quot;: 50}">
                        <svg className="hw-50" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 448.8 448.8" >

	<g id="done">
		<polygon points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55   " fill="#FFFFFF"/>
	</g>

</svg>

                            <h6 className="f_p f_400 f_size_16 w_color l_height45">Satisfaction</h6>
                        </div>
                    </div>
                </div>
                <div style={{   
    background: `#ffffffb5` }} className="col-lg-6">
                    <div className="app_featured_content">
                    <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="f_p f_size_30 f_700 t_color3 l_height45 pr_70 mb-30 ">Why choose us? </ReactRevealText> </h2> 
                        <p  style={{    fontSize: `20px`,
    fontWeight: `600`,
     }} className="f_300">Our first and foremost priority is the customer satisfaction. It's a very well experianced fact that every successful business are grown only because of their good relationship with customers. We just don't want to be 
                        another agency in market. Our vision and mission is to try our best to deliver results to customers. Work done from us will be worth of money you spend. Honesty and transparency is our strong point.     </p>
                       
                    </div>
                </div>
            </div>
           
        </div>
    </section>
        




      
       
    </div>

    
    );
  }
}

export default Homepage;
