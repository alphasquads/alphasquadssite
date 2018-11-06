import React, { Component } from 'react';
import { Link } from 'gatsby';
import "./xxx.css"
import ReactRevealText from   'react-reveal-text';

import alphasquadlogo2 from "../content/svg/alphasquadlogo2.svg"



    class Footer extends Component {
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
    <footer style={{       background:` rgba(251, 251, 253, 0.85)`  }} className="footer_area">
  <div className="containerx">
     <div className="email_us text-center"> 
     <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="  f_p f_size_30 pad-bottom-40 l_height50 f_600 t_color ">Ready to start something new and amazing with us? </ReactRevealText> </h2> 
    
    <Link to="/contactus" className="btn_hover agency_banner_btn wow fadeInLeft" activeStyle={{
            color: "#5e2ced",
          }}> Get in Touch </Link>
     </div>
      <div className="footer_inner row"> 
          <div className="col-lg-4 col-md-6 footer_logo">
          <img  className=" img-auto"  src={alphasquadlogo2} alt="alphassquad logo"/>
             
          </div>
          <div className="footer_widget pad-top-40 footer_logo col-lg-4 col-sm-6">
             
              <ul className=" pad-top-40 footer_nav"> 
                  <li><Link to="/" >Home</Link></li>
                  <li><Link to="/services" >Services</Link></li>
                  <li><Link to="/packages" >Packages</Link></li>
                  <li><Link to="/process" >Process</Link></li>
                  <li><Link to="/contactus" >Contact us</Link></li>
                  <li><Link to="/careers" >Careers</Link></li>
              </ul>
          </div>  
          <div className="col-lg-4 col-md-6 footer_logo">
          <p> Internet businesses are growing faster than the rest of the economy. </p>
              <h6><svg className="social-ico mr-40-px  " xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 510 510">

	<g id="place">
		<path d="M255,0C155.55,0,76.5,79.05,76.5,178.5C76.5,311.1,255,510,255,510s178.5-198.9,178.5-331.5C433.5,79.05,354.45,0,255,0z     M255,242.25c-35.7,0-63.75-28.05-63.75-63.75s28.05-63.75,63.75-63.75s63.75,28.05,63.75,63.75S290.7,242.25,255,242.25z" fill="#FFFFFF"/>
	</g>

</svg>INDIA</h6> 
              <ul className="footer_social"> 
                  <li><a href="https://www.facebook.com/AlphaSqads"><svg className="social-ico"  xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 510 510" >

	<g id="post-facebook">
		<path d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z     M433.5,51v76.5h-51c-15.3,0-25.5,10.2-25.5,25.5v51h76.5v76.5H357V459h-76.5V280.5h-51V204h51v-63.75    C280.5,91.8,321.3,51,369.75,51H433.5z" fill="#FFFFFF"/>
	</g>

</svg></a></li>
                  <li><a href="https://www.linkedin.com/in/alpha-squads-34b919174/"><svg className="social-ico" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 510 510" >

	<g id="post-linkedin">
		<path d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z     M153,433.5H76.5V204H153V433.5z M114.75,160.65c-25.5,0-45.9-20.4-45.9-45.9s20.4-45.9,45.9-45.9s45.9,20.4,45.9,45.9    S140.25,160.65,114.75,160.65z M433.5,433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25,17.851-38.25,38.25V433.5H204    V204h76.5v30.6c12.75-20.4,40.8-35.7,63.75-35.7c48.45,0,89.25,40.8,89.25,89.25V433.5z" fill="#FFFFFF"/>
	</g>

</svg>
</a></li>
                  <li><a href="https://twitter.com/Alpha_Squads   "><svg className="social-ico" xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 510 510" >

	<g id="post-twitter">
		<path d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z     M400.35,186.15c-2.55,117.3-76.5,198.9-188.7,204C165.75,392.7,132.6,377.4,102,359.55c33.15,5.101,76.5-7.649,99.45-28.05    c-33.15-2.55-53.55-20.4-63.75-48.45c10.2,2.55,20.4,0,28.05,0c-30.6-10.2-51-28.05-53.55-68.85c7.65,5.1,17.85,7.65,28.05,7.65    c-22.95-12.75-38.25-61.2-20.4-91.8c33.15,35.7,73.95,66.3,140.25,71.4c-17.85-71.4,79.051-109.65,117.301-61.2    c17.85-2.55,30.6-10.2,43.35-15.3c-5.1,17.85-15.3,28.05-28.05,38.25c12.75-2.55,25.5-5.1,35.7-10.2    C425.85,165.75,413.1,175.95,400.35,186.15z" fill="#FFFFFF"/>
	</g>

</svg></a></li>
                  <li><a href="https://github.com/alphasquads"><svg className="social-ico" xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 438.536 438.536" >

	<g>
		<path d="M158.173,352.599c-3.049,0.568-4.381,1.999-3.999,4.281c0.38,2.283,2.093,3.046,5.138,2.283    c3.049-0.76,4.38-2.095,3.997-3.997C162.931,353.074,161.218,352.216,158.173,352.599z" fill="#FFFFFF"/>
		<path d="M141.898,354.885c-3.046,0-4.568,1.041-4.568,3.139c0,2.474,1.619,3.518,4.853,3.138c3.046,0,4.57-1.047,4.57-3.138    C146.753,355.553,145.134,354.502,141.898,354.885z" fill="#FFFFFF"/>
		<path d="M119.629,354.022c-0.76,2.095,0.478,3.519,3.711,4.284c2.855,1.137,4.664,0.568,5.424-1.714    c0.572-2.091-0.666-3.61-3.711-4.568C122.197,351.265,120.39,351.922,119.629,354.022z" fill="#FFFFFF"/>
		<path d="M414.41,24.123C398.326,8.042,378.964,0,356.309,0H82.225C59.577,0,40.208,8.042,24.123,24.123    C8.042,40.207,0,59.576,0,82.225v274.088c0,22.65,8.042,42.017,24.123,58.098c16.084,16.084,35.454,24.126,58.102,24.126h63.953    c4.184,0,7.327-0.144,9.42-0.424c2.092-0.288,4.184-1.526,6.279-3.717c2.096-2.187,3.14-5.376,3.14-9.562    c0-0.568-0.05-7.046-0.144-19.417c-0.097-12.375-0.144-22.176-0.144-29.41l-6.567,1.143c-4.187,0.76-9.469,1.095-15.846,0.999    c-6.374-0.096-12.99-0.76-19.841-1.998c-6.855-1.239-13.229-4.093-19.13-8.562c-5.898-4.477-10.085-10.328-12.56-17.559    l-2.856-6.571c-1.903-4.373-4.899-9.229-8.992-14.554c-4.093-5.332-8.232-8.949-12.419-10.852l-1.999-1.428    c-1.331-0.951-2.568-2.098-3.711-3.429c-1.141-1.335-1.997-2.669-2.568-3.997c-0.571-1.335-0.097-2.43,1.427-3.289    c1.524-0.855,4.281-1.279,8.28-1.279l5.708,0.855c3.808,0.76,8.516,3.042,14.134,6.851c5.614,3.806,10.229,8.754,13.846,14.843    c4.38,7.806,9.657,13.75,15.846,17.843c6.184,4.097,12.419,6.143,18.699,6.143s11.704-0.476,16.274-1.424    c4.565-0.954,8.848-2.385,12.847-4.288c1.713-12.751,6.377-22.559,13.988-29.41c-10.848-1.143-20.602-2.854-29.265-5.14    c-8.658-2.286-17.605-5.995-26.835-11.136c-9.234-5.14-16.894-11.512-22.985-19.13c-6.09-7.618-11.088-17.61-14.987-29.978    c-3.901-12.375-5.852-26.652-5.852-42.829c0-23.029,7.521-42.637,22.557-58.814c-7.044-17.32-6.379-36.732,1.997-58.242    c5.52-1.714,13.706-0.428,24.554,3.855c10.85,4.286,18.794,7.951,23.84,10.992c5.046,3.042,9.089,5.614,12.135,7.71    c17.705-4.949,35.976-7.423,54.818-7.423c18.841,0,37.115,2.474,54.821,7.423l10.849-6.852c7.426-4.57,16.18-8.757,26.269-12.562    c10.088-3.806,17.795-4.854,23.127-3.14c8.562,21.51,9.328,40.922,2.279,58.241c15.036,16.179,22.559,35.786,22.559,58.815    c0,16.18-1.951,30.505-5.852,42.969c-3.898,12.467-8.939,22.463-15.13,29.981c-6.184,7.519-13.894,13.843-23.124,18.986    c-9.232,5.137-18.178,8.853-26.84,11.132c-8.661,2.286-18.414,4.004-29.263,5.147c9.891,8.562,14.839,22.072,14.839,40.538v68.238    c0,3.237,0.472,5.852,1.424,7.851c0.958,1.998,2.478,3.374,4.571,4.141c2.102,0.76,3.949,1.235,5.571,1.424    c1.622,0.191,3.949,0.287,6.995,0.287h63.953c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102    V82.225C438.533,59.576,430.491,40.204,414.41,24.123z" fill="#FFFFFF"/>
		<path d="M86.793,319.195c-1.331,0.948-1.141,2.471,0.572,4.565c1.906,1.902,3.427,2.189,4.57,0.855    c1.331-0.948,1.141-2.471-0.575-4.569C89.458,318.336,87.936,318.049,86.793,319.195z" fill="#FFFFFF"/>
		<path d="M77.374,312.057c-0.57,1.335,0.096,2.478,1.999,3.426c1.521,0.955,2.762,0.767,3.711-0.568    c0.57-1.335-0.096-2.478-1.999-3.433C79.182,310.91,77.945,311.102,77.374,312.057z" fill="#FFFFFF"/>
		<path d="M95.646,330.331c-1.715,0.948-1.715,2.666,0,5.137c1.713,2.478,3.328,3.142,4.853,1.998c1.714-1.334,1.714-3.142,0-5.427    C98.978,329.571,97.359,328.993,95.646,330.331z" fill="#FFFFFF"/>
		<path d="M105.641,343.174c-1.714,1.526-1.336,3.327,1.142,5.428c2.281,2.279,4.185,2.566,5.708,0.849    c1.524-1.519,1.143-3.326-1.142-5.42C109.068,341.751,107.164,341.463,105.641,343.174z" fill="#FFFFFF"/>
	</g>

</svg></a></li> 
              </ul>
          </div> 
        
      </div>
  </div> 
   
  <div className="copy_right"> 
      <p>Copyrights 2018 <a href="#">Alpha</a> Squads</p> 
  </div>
</footer>
  </div>
 );
}
}
export default Footer;
