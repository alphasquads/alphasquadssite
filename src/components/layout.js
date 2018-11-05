import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Head from '../components/head';
import Header from '../components/header';
import Social from '../components/social';
import Email from '../components/email';
import Footer from '../components/footer';
import alphasquadlogo from "../content/svg/alphasquadlogo.svg"
import { nav } from '../config';

import { GlobalStyle } from '../styles';



class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object,
  };

 
  

  render() {
    const { children, location } = this.props;
   

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
                siteUrl
                description
              }
            }
          }
        `}
        render={({ site }) => (
          <div id="root">
            <Head metaData={site.siteMetadata} />

            <GlobalStyle />

           

           
              <div className="container">
             <img  className=" img-auto" style={{ width: `100%`,
position: `fixed`,
alignIitems: `center`,
height: `100%`,
top: `0%`, 
zIndex:`-111`}} src={alphasquadlogo} alt=""/> 
                <Header location={location} navLinks={nav} />
                <Social />
                <Email />
                {children}
                <Footer />
              </div>
        
          </div>
        )}
      />
    );
  }
}

export default Layout;
