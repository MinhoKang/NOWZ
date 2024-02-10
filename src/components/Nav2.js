import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';

const Nav2 = () => {
  return (
    <NavContainer>
      <NavList>
        <ListItem margin={10}>
          <FontAwesomeIcon icon={faCalendar} />
          캘린더
        </ListItem>
        <ListItem margin={20}>
          <FontAwesomeIcon icon={faBell} />
          알림
        </ListItem>
        <ListItem margin={30}>
          <FontAwesomeIcon icon={faUser} />
        </ListItem>
      </NavList>
    </NavContainer>
  );
};

export default Nav2;

const NavContainer = styled.nav`
  height: 80px;
  width: 100%;
  border-bottom: 1px solid #e7ecf0;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  /* margin: 0px; */
  margin-right: ${(props) => props.margin}px;
`;

const UserImg = styled.img``;

const Button = styled.button`
  padding: 3px 10px;
`;
