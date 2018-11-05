import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styled from 'styled-components';
import { theme, mixins, media, Nav } from '../styles';

const MenuContainer = styled.div`
  position: fixed;
  
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${theme.transition};
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  display: none;
  ${media.tablet`display: block; bottom: 0;`};
`;
const Sidebar = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color:#fbfbfda3;
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${theme.fonts.SFMono};
  box-shadow: -2px 0px 4px ${theme.colors.transNavy};
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 75vw;`};
  ${media.tiny`padding: 10px;`};
`;
const NavLinks = styled(Nav)`
  ${mixins.flexBetween};
  flex-direction: column;
  text-align: center;
`;
const NavList = styled.ol`
  width: 100%;
`;
const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: ${theme.fontSizes.large};
  counter-increment: item 1;
  ${media.thone`
    margin: 0 auto 10px;
    font-size: ${theme.fontSizes.medium};
  `};
  ${media.tiny`
    font-size: ${theme.fontSizes.smallish};
  `};
  &:before {
    display: block;
    content: '0' counter(item) '.';
    color: ${theme.colors.green};
    font-size: ${theme.fontSizes.small};
    margin-bottom: 5px;
  }
`;
const NavLink = styled.div`
  ${mixins.link};
  background: #8c4eff2e;;
  padding:  20px;
  width: 100%;
`;
const ResumeLink = styled.div`
  ${mixins.bigButton};
  padding: 18px 50px;
  margin: 10% auto 0;
  width: max-content;
`;

class Menu extends Component {
  static propTypes = {
    isHome: PropTypes.bool,
    menuOpen: PropTypes.bool.isRequired,
    navLinks: PropTypes.array.isRequired,
    handleMenuClick: PropTypes.func.isRequired,
  };

  render() {
    const {  menuOpen, navLinks, handleMenuClick } = this.props;

    return (
      <MenuContainer
        menuOpen={menuOpen}
        onClick={handleMenuClick}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 1 : -1}>
        <Sidebar>
          <NavLinks>
            { (
              <NavList>
                {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <NavListItem key={i}>
               <NavLink>       <Link to={url}>{name}</Link></NavLink>
                    </NavListItem>
                  ))}
              </NavList>
            )}
            <ResumeLink>
            <Link to="/contactus" >  Contact Us </Link>
            </ResumeLink>
          </NavLinks>
        </Sidebar>
      </MenuContainer>
    );
  }
}

export default Menu;
