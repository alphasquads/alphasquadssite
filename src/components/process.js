import React, { Component } from 'react';
import { Link } from 'gatsby';
import ReactRevealText from   'react-reveal-text';

import featureworkbg from "../content/img/featureworkbg.webp"
import featuresbg from "../content/img/featuresbg.webp"
import processimgjp from "../content/img/processimgjp.webp"
import work1 from "../content/img/work1.png"
import work2 from "../content/img/work2.webp"
import icon01 from "../content/img/icon01.png"
import dot from "../content/img/dot.png"
import work3 from "../content/img/work3.png"
import icon02 from "../content/img/icon02.png"
import icon3 from "../content/img/icon3.png"

import "./xxx.css"




    class Process extends Component {
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




    <section style={{       background:` rgba(251, 251, 253, 0.85)`  }} className="feature_work_area fwa_2"> 
    <img  className="  layer layer_1 img-auto position-absolute"  src={featureworkbg} alt=""/>        <div className="containerx">  <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className=" tittle  ">The Process </ReactRevealText> </h2> 
          
            <div className="row">
                <div className="col-lg-6 feature_img wow fadeInLeft" >
                <img  className=" fetures_bg layer img-auto"  src={featuresbg} alt=""/>
                <img  className="  img-auto"  src={processimgjp} alt=""/>
                </div>
                <div className="col-lg-6 feature_content wow fadeInRight" >  <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="   ">Global reach with one solution. </ReactRevealText> </h2> 
                  
                    <p>With technology and trust it is easy to get work done in this fast connected world. Let’s discover, build and grow your  business.</p>
                    <Link to="/process#processid" className="btn_hover agency_banner_btn wow fadeInLeft" activeStyle={{
            color: "#5e2ced",
          }}> See how </Link>
                </div>
            </div>
        </div>
    </section>





      
        

<section id="processid" style={{       background:` rgba(251, 251, 253, 0.85)`  }} className="agency_featured_area ">
        <div className="containerx">
            <h2 className="f_size_30 f_600 t_color3 l_height40 text-center wow fadeInUp" data-wow-delay="0.3s" >You will be guided on every step forward to success</h2>
            <div className="features_info">
            <img  className="dot_img  img-auto"  src={dot} alt=""/>

               
                <div className="row agency_featured_item flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="agency_featured_img text-right wow fadeInRight" data-wow-delay="0.4s" >
                        <img  className="  img-auto"  src={work3} alt=""/>

                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="agency_featured_content pr_70 pl_70 wow fadeInLeft" data-wow-delay="0.6s" >
                            <div className="dot"><span className="dot1"></span><span className="dot2"></span></div>
                            <img  className="number  img-auto"  src={icon01} alt=""/>
  <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="   ">Making a contact with us. </ReactRevealText> </h2> 
                           
                            <p>The foremost step of getting started with your business is to contact us. Click on the contact us button and fill out the form with your and your requirements basic details.
                                This would cost just 2 minutes. After successful form submission an appointment call will be set for project requirement and estimations. 
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="row agency_featured_item agency_featured_item_two">
                    <div className="col-lg-6">
                        <div className="agency_featured_img text-right wow fadeInLeft" data-wow-delay="0.3s" >
                        <img  className="  img-auto"  src={work2} alt=""/>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="agency_featured_content pl_100 wow fadeInRight" data-wow-delay="0.5s" >
                            <div className="dot"><span className="dot1"></span><span className="dot2"></span></div>
                            <img  className="number  img-auto"  src={icon02} alt=""/>
  <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="   ">Working on the project. </ReactRevealText> </h2> 
                           
                            <p>After gathering your project requirements, strategic implementation will be started.
                                Design and prototypes will be arranged  to be confirmed by you.
                                 We will select the best suitable technology stack for your project and make the experienced squad work on that. </p>
                            
                        </div>
                    </div>
                </div>
                <div className="row agency_featured_item flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="agency_featured_img text-right wow fadeInRight" data-wow-delay="0.3s" >
                        
                        <img  className="  img-auto"  src={work1} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="agency_featured_content  pr_70 pl_70 wow fadeInLeft" data-wow-delay="0.5s" >
                            <div className="dot"><span className="dot1"></span><span className="dot2"></span></div>
                            <img  className=" number img-auto"  src={icon3} alt=""/>
  <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="   ">Delivering the project. </ReactRevealText> </h2> 
                            <p className="pad-bottom-40" >The made ready and well tested solution of your project will be delivererd to you. Any changes to the final product can be made as per your directions.
                                Also the neccessary services and updates to keep your project running will be handled by us. We handle the tech and you focus on your business logic.  </p>
                                <Link to="/contactus" className=" btn_hover agency_banner_btn wow fadeInLeft" activeStyle={{
            color: "#5e2ced",
          }}> Get in Touch </Link>
                        </div>
                    </div>
                </div>
                <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
            </div>
        </div>
    </section>


      

    </div>

    
);
}
}

export default Process;


