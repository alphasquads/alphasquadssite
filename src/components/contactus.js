import React, { Component } from 'react';
import { Link } from 'gatsby';
import contactusimgjp from "../content/img/contactusimgjp.webp"
import featureworkbg from "../content/img/featureworkbg.webp"
import featuresbg from "../content/img/featuresbg.webp"
import "./xxx.css"
import ReactRevealText from   'react-reveal-text';




class Contactus extends Component {

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
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="tittle   ">Let's Talk </ReactRevealText> </h2> 
            <div className="row">
                <div className="col-lg-6 feature_img wow fadeInLeft" >
                <img  className=" fetures_bg layer img-auto"  src={featuresbg} alt=""/>
                <img  className="  img-auto"  src={contactusimgjp} alt=""/>
                </div>
                <div className="col-lg-6 feature_content wow fadeInRight" >
                <h2  onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>      <ReactRevealText show={this.state.show}  className="   ">Having an Idea? </ReactRevealText> </h2> 
                    <p> Get started with us. Let us find out what's your problem,
make a plan how to solve it,
and implement the plan to fix it. </p>
                    <Link to="/contactus#contactusid" className="btn_hover agency_banner_btn wow fadeInLeft" activeStyle={{
            color: "#5e2ced",
          }}> Let's Start </Link>
                </div>
            </div>
        </div>
    </section>


<section id="contactusid" className="contact_info_area sec_pad bg_color">
        <div className="containerx">
            
            <div className="contact_form">
                <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mt_100 mb_40">Leave a Message</h2>
                <form action="contact_process.php" className="contact_form_box" method="post" id="contactForm" noValidate="novalidate">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group text_box">
                                <input type="text" id="name" name="name" placeholder="Your Name"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group text_box">
                                <input type="text" name="email" id="email" placeholder="Your Email"/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group text_box">
                            <input type="text" id="number" name="number" placeholder="Mobile Number"/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group text_box">
                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message . . ."></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn_three">Send Message</button>
                </form>
            </div>
        </div>
    </section>

 

    </div>

    
    );
  }
}

export default Contactus;
