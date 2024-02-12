import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';

const Nav2 = () => {
  const navList = [
    {
      id: 1,
      icon: faCalendar,
      title: '캘린더',
    },
    {
      id: 2,
      icon: faBell,
      title: '알림',
    },
    {
      id: 3,
      icon: faUser,
      title: '마이 페이지',
    },
  ];
  return (
    <NavContainer>
      <NavList>
        {navList.map((item, index) => (
          <ListItem key={index}>
            <NavIcon>
              <FontAwesomeIcon icon={item.icon} />
            </NavIcon>
            {item.title}
          </ListItem>
        ))}
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
  display: flex;
  border: 1px solid #e1e3e5;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 14px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #e1e3e5;
  }
`;
const NavIcon = styled.div`
  color: #87d0e9;
  margin-right: 5px;
`;
