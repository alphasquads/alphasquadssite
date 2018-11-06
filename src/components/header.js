import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { throttle } from '../utils';

import { headerHeight } from '../config';


import Menu from '../components/menu';
import alphasquadlogo2 from "../content/svg/alphasquadlogo2.svg"
import styled from 'styled-components';
import { theme, mixins, media, Nav } from '../styles';

const HeaderContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;

  padding: 0px 25px;
  background-color:
  ${props =>
    props.scrollDirection === 'up' ?    `${theme.colors.white}`:'transparent' }; 
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props =>
    props.scrollDirection === 'none' ? theme.headerHeight : theme.headerScrollHeight};
  box-shadow: ${props =>
    props.scrollDirection === 'up' ? `0 6px 4px #5e2ced12` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.headerScrollHeight}` : '0px')}
  );
  ${media.desktop`padding: 0 40px;bottom: 0;
  background:white;
  height: ${props =>
    props.scrollDirection === 'none' ? theme.headerHeight : theme.headerScrollHeight};
  box-shadow: ${props =>
    props.scrollDirection === 'up' ? `0 2px 4px ${theme.colors.shadowNavy}` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `${theme.headerScrollHeight}` : '0px')}
  );`};
  ${media.tablet`padding: 0 25px;  bottom: 0;`};
`;
const Navbar = styled(Nav)`
  ${mixins.flexBetween};
  font-family: ${theme.fonts.SFMono};
  color: ${theme.colors.lightestSlate};
  counter-reset: item 0;
  position: relative;
  z-index: 12;
`;
const Logo = styled.div`
  ${mixins.flexCenter};
`;
const LogoLink = styled(Link)`
  color: ${theme.colors.green};
  width: 190px;
  height: 190px;
  margin-top:-17px;
 
  &:hover,
  &:focus {
    svg {
      fill: ${theme.colors.transGreen};
    }
  }
  svg {
    fill: none;
    transition: ${theme.transition};
    user-select: none;
  }
`;
const Hamburger = styled.div`
  ${mixins.flexCenter};
 
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background:white;
  display: none;
  ${media.tablet`display: flex;`};
`;
const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;
const HamburgerInner = styled.div`
  background-color: ${theme.colors.green};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${theme.colors.green};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? theme.hamBeforeActive : theme.hamBefore)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? theme.hamAfterActive : theme.hamAfter)};
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;
const NavList = styled.ol`
  div {
    ${mixins.flexBetween};
  }
`;
const NavListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${theme.fontSizes.smallish};
  counter-increment: item 1;
 
 
  margin-left:30px;
  margin-right:30px;
  font: 500 14px "Poppins", sans-serif;
   
    background: #5e2ced;
    box-shadow: 0px 20px 30px 0px rgba(169, 141, 247, 0.52);
    
    padding: 10px 10px;
    border: 1px solid #5e2ced;
    transition: all 0.2s linear;
    cursor: pointer;
    &:hover {
      color: #fff;
      border-radius: 7px;
      box-shadow: none;
      background: #5e2cedbd;
    }
`;

const ResumeButton = styled.div`
${media.thone`display: none;`};
${media.phablet`display: none;`};
${media.tiny`display: none;`};

`;
const ResumeLink = styled.div`
background-color: white;
border: 1px solid #5e2ced;
border-radius: 2px;
padding: 13px 17px;
font-family: SF Mono,Fira Code,Fira Mono,Roboto Mono,Lucida Console,Monaco,monospace;
line-height: 1;
-webkit-text-decoration: none;
text-decoration: none;
cursor: pointer;
-webkit-transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
color: #5e2ced;
margin-left: 10px;
font-size: 17px;
  &:hover {
    border-radius:30px;
    color: #fff;
    box-shadow: none;
    background:white;
    box-shadow: inset 0px 20px 30px 0px #5e2ced47;
  }
`;

const DELTA = 5;

class Header extends Component {
  static propTypes = {
    location: PropTypes.object,
    navLinks: PropTypes.array.isRequired,
  };

  state = {
    lastScrollTop: 0,
    scrollDirection: 'none',
    menuOpen: false,
    isMounted: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 100);

    window.addEventListener('scroll', () => throttle(this.handleScroll()));
    window.addEventListener('resize', () => throttle(this.handleResize()));
    window.addEventListener('keydown', () => this.handleKeydown());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
    window.removeEventListener('resize', () => this.handleResize());
    window.removeEventListener('keydown', () => this.handleKeydown());
  }

  handleScroll = () => {
    const { lastScrollTop, menuOpen, scrollDirection } = this.state;
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (fromTop > lastScrollTop && fromTop > headerHeight) {
      if (scrollDirection !== 'down') {
        this.setState({ scrollDirection: 'down' });
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        this.setState({ scrollDirection: 'up' });
      }
    }

    this.setState({ lastScrollTop: fromTop });
  };

  handleResize = () => {
    const { menuOpen } = this.state;

    if (window.innerWidth > 768 && menuOpen) {
      this.toggleMenu();
    }
  };

  handleKeydown = evt => {
    const { menuOpen } = this.state;

    if (!menuOpen) {
      return;
    }

    if (evt.key === 'Escape' || evt.key === 'Esc') {
      this.toggleMenu();
    }
  };

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleMenuClick = e => {
    const target = e.target;
    const isLink = target.hasAttribute('href');
    const isContainer = target.classList && target.classList[0].includes('MenuContainer');

    if (isLink || isContainer) {
      this.toggleMenu();
    }
  };

  render() {
    const { scrollDirection, menuOpen, isMounted } = this.state;
    const { navLinks } = this.props;
    

    return (
      <HeaderContainer ref={el => (this.header = el)} scrollDirection={scrollDirection}>
        <Helmet>
          <body className={menuOpen ? 'blur' : ''} />
        </Helmet>
        <Navbar>
          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={3000}>
                <Logo>
                  <LogoLink to="/" aria-label="Home">
                  <img  className=" img-auto"  src={alphasquadlogo2} alt="alphasquad logo"/>
                  </LogoLink>
                </Logo>
              </CSSTransition>
            )}
          </TransitionGroup>


              <NavLinks>
            { (
              <NavList>
                <TransitionGroup>
                  {isMounted &&
                    navLinks &&
                    navLinks.map(({ url, name }, i) => (
                      <CSSTransition key={i} classNames="fadedown" timeout={3000}>
                        <NavListItem key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                          <Link style={{ color: `white` }} to={url} activeStyle={{
            padding: "5px",
          }}>{name}</Link>
                        </NavListItem>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </NavList>
            )}
            
          </NavLinks>


          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={3000}>
                <Hamburger onClick={this.toggleMenu}>
                  <HamburgerBox>
                    <HamburgerInner menuOpen={menuOpen} />
                  </HamburgerBox>
                </Hamburger>
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup >
              {isMounted && (
                <CSSTransition  classNames="fadedown" timeout={3000} >
                  <ResumeButton style={{ transitionDelay: `600ms` }}>
                  <ResumeLink> <Link to="/contactus" >
                      CONTACT
                    </Link> </ResumeLink>
                  </ResumeButton>
                </CSSTransition>
              )}
            </TransitionGroup>

        </Navbar>

        <Menu
          
          navLinks={navLinks}
          menuOpen={menuOpen}
          handleMenuClick={e => this.handleMenuClick(e)}
        />
      </HeaderContainer>
    );
  }
}

export default Header;
