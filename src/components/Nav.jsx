import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const GlobalNav = styled.header`
    width: 100%;
    height: 44px;
    background: #333;
    display: flex;
    justify-content: center;
`;

const MainWrapper = styled.nav`
    width: 980px;
    height: 100%;    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22px;
    box-sizing: border-box;
`;

const LinkWrapper = styled.a`
    text-decoration: none;
    color: #fff;
    font-size: ${({ fontSize }) => fontSize}px;
    font-weight: 400;
`;

const links = [
  {
    link: '/mac',
    text: 'Mac',
  },
  {
    link: '/ipad',
    text: 'iPad',
  },
  {
    link: '/iphone',
    text: 'iPhone',
  },
  {
    link: '/watch',
    text: 'Watch',
  },
  {
    link: '/tv',
    text: 'TV',
  },
  {
    link: '/music',
    text: 'Music',
  },
  {
    link: '/support',
    text: 'Support',
  },
];

function Nav() {
  return (
    <GlobalNav>
      <MainWrapper>
        <LinkWrapper fontSize={20} href="/"><Link to="/"><i className="fab fa-apple" /></Link></LinkWrapper>
        {links.map(link => (
          <NavLink
            activeStyle={{ color: 'grey' }}
            style={{ textDecoration: 'none', color: 'white', fontSize: 14 }}
            to={link.link}
          >
            {link.text}
          </NavLink>
        ))}
        <LinkWrapper fontSize={14} href=""><i className="fas fa-search" /></LinkWrapper>
        <LinkWrapper fontSize={14} href=""><i className="fas fa-shopping-bag" /></LinkWrapper>
      </MainWrapper>
    </GlobalNav>
  );
}

export default Nav;
