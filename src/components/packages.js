import React, { Component } from 'react';
import svgtick from "../content/svg/svgtick.svg"
import developeractivity from "../content/svg/developeractivity.webp"
import dashboard from "../content/svg/dashboard.svg"
import wireframe from "../content/svg/wireframe.webp"
import { Link } from 'gatsby';
import featureworkbg from "../content/img/featureworkbg.webp"
import featuresbg from "../content/img/featuresbg.webp"
import packagesimgjp from "../content/img/packagesimgjp.webp"
import one from "../content/img/one.png"
import two from "../content/img/two.png"
import three from "../content/img/three.png"
import "./xxx.css"
import ReactRevealText from   'react-reveal-text';




class Packages extends Component {

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
    <img  className="  layer layer_1 img-auto position-absolute"  src={featureworkbg} alt="bg image"/>

        <div className="containerx">
          <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className=" tittle  ">Packages </ReactRevealText> </h2> 
           
            <div className="row">
                <div className="col-lg-6 feature_img wow fadeInLeft" >
                <img  className=" fetures_bg layer img-auto"  src={featuresbg} alt="bg image"/>
                <img  className="  img-auto"  src={packagesimgjp} alt=" package image"/>
                </div>
                <div className="col-lg-6 feature_content wow fadeInRight" >
                  <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="   ">Global reach with one partership. </ReactRevealText> </h2> 
                   
                    <p>Below are mentioned details about the packages starting at very reasonable pricing. Making it easier for any business to get up and running. </p>
                    <Link to="/packages#packagesid" className="btn_hover agency_banner_btn wow fadeInLeft" activeStyle={{
            color: "#5e2ced",
          }}> Explore </Link>
                </div>
            </div>
        </div>
    </section>





      <section id="packagesid" style={{       background:` rgba(251, 251, 253, 0.15)`  }}  className="s_pricing_area sec_pad">
        <div className="containerx custom_containerx">
          
            <div className="row mb_30">
                <div className="col-lg-4 col-sm-6">
                    <div className="s_pricing-item">
                    <img  className="img-auto"  src={two} alt="starter image"/>
                       
                        
                        <h5 className="f_p f_600 f_size_20 t_color mb-0 mt_40">Starter</h5>
                        <p className="f_p f_300">Create your first online presence</p>
                        <div className="price f_size_40 f_p f_700">Rs. 3499/-<sub className="f_300 f_size_16"></sub></div>
                        <ul className="list-unstyled mt_30">
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Static Website</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Template design</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Basic logo </li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Resume page</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Form submissions</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Portfolio page</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Free Hosting upto 1000 visitors</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Free support</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Free support</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Best Speed score</li>

                        </ul>
                        <Link className="price_btn btn_hover mt_30" to="/contactus" >Choose This Plan</Link>
                      
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="s_pricing-item">
                    <img  className="img-auto"  src={one} alt="professional image"/>
                        <div className="tag_label">Popular</div>
                      
                        <h5 className="f_p f_600 f_size_20 t_color mb-0 mt_40">Professional</h5>
                        <p className="f_p f_300">Essential Business kit</p>
                        <div className="price f_size_40 f_p f_700">Rs. 9999/-<sub className="f_300 f_size_16"></sub></div>
                        <ul className="list-unstyled  f_size_20 mt_30">
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Custom Website</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>JAM stack</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Personal Dashboard</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Domain Name</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Business E-mail</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>e-Commerce</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Promo Card</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Promo FLyer</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Animated Video</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Basic Marketing</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Custom Logo</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Insta promo</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Banner design</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Free hosting upto 1000 visitors</li>
                            <li><img  className=" svgtick-price"  src={svgtick} alt="tick icon"/>Best Speed score</li>
                            </ul>
                        <Link className="price_btn btn_hover mt_30" to="/contactus" >Choose This Plan</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="s_pricing-item">
                    <img  className="img-auto"  src={three} alt="business image"/>
                        
                        <h5 className="f_p f_600 f_size_20 t_color mb-0 mt_40">Business</h5>
                        <p className="f_p f_300">Experience the best from us.</p>
                        <div className="price f_size_40 f_p f_700">Contact to get Quote<sub className="f_300 f_size_16"></sub></div>
                        <ul className="list-unstyled mt_30">
                            <li></li>
                           
                        </ul>
                        <Link className="price_btn btn_hover mt_30" to="/contactus" >Choose This Plan</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
        


<section style={{       background:` rgba(251, 251, 253, 0.85)`  }}  className="service_details_area sec_pad">
        <div className="containerx">
            <div className="row flex-row-reverse service_details_item">
                <div className="col-lg-6">
                    <div className="service_details_img ml-0">
                    <img  className=" img-auto"  src={wireframe} alt="wire frame image"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="service_details ">
                      <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="f_p f_600 f_size_30 t_color3 l_height40    ">Your website could be live within 48 hours </ReactRevealText> </h2> 
                       
                        <p className="f_300 mb_50">Your customers are out there on the internet, searching for you. The sooner you’ve established your online presence with us, the sooner they’ll find you. And you can do what you do best.</p>
                        <ul className="list-unstyled mb-30 pl-0 pr_20">
                            <li><img  className=" svgtick"  src={svgtick} alt="tick icon"/>A professional website to showcase what you do to the world. Up to 5 pages with descriptions and images we put together for you (typically: Home, Services, Gallery, Reviews, Contact).</li>
                            <li><img  className=" svgtick"  src={svgtick} alt="tick icon"/> A theme you like. We have a library of effective designs with a range of layouts and colours, which we select for you to align with your personal preferences and requirements.</li>
                            
                            <li><img  className=" svgtick"  src={svgtick} alt="tick icon"/>Google-friendly content, so your customers can find you.</li>
                          
                           
                        </ul>
                    </div>
                </div>
            </div>

             <div className="row flex-row-reverse service_details_item">
              
                <div className="col-lg-6">
                    <div className="service_details  ">
                      <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className=" f_p f_600 f_size_30 t_color3 l_height40 mb_20  ">We sort out all the technical stuffs </ReactRevealText> </h2> 
                     
                        <ul className="list-unstyled mb-30 pl-0 pl_20">
                        <li><img  className=" svgtick"  src={svgtick} alt="tick icon"/> A built-in contact form and location info, so your customers can get in touch with you.</li>
                            <li><img  className=" svgtick"  src={svgtick} alt="tick icon"/>Your domain (the “www...” thing) will be registered directly to you, rather than through a third party, so it’s yours to keep.</li>
                          
                            <li><img  className=" svgtick"  src={svgtick} alt="tick icon"/> Edits and updates with support from our brilliant team of experts.</li>
                            <li><img  className=" svgtick"  src={svgtick} alt="tick icon"/>A design that's clear and easy to use. Optimised for mobile phones as well as bigger screens.</li>
                           
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="service_details_img ml-0">
                    <img  className=" img-auto"  src={developeractivity} alt="developer image"/>
                    </div>
                </div>
            </div>


            <div className="row service_details_item">
                <div className="col-lg-6">
                    <div className="service_details_img">
                    <img  className=" img-auto"  src={dashboard} alt="dashboard image"/>
                    </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="service_details">
                      <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="  f_p f_600 f_size_30 t_color3 l_height40 mb-30 ">Dashboard to manage workflow </ReactRevealText> </h2> 
                       
                        <p className="f_300 mb_40">An easy way to add new content. This means you can add or change images, text, contact information, send in reviews you’ve gathered, edit your services, or add optional extras such as a social media feed.
<br/>More accurate edits. When you tell us what changes you want through your Dashboard, rather than by phone or email, there’s less room for error.
<br/>Faster edits. We can jump on them right away, because your request zips straight through to our dedicated technical team (unlike phone or email requests).
</p>
                         
                    </div>
                </div>
            </div>
        </div>
    </section>



    </div>

    
    );
  }
}

export default Packages;
