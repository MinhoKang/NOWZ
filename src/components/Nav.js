import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import {
  faGraduationCap,
  faChartLine,
  faScaleBalanced,
  faEye,
  faComment,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navi = useNavigate();
  const menu = [
    { title: '학생 정보', icon: faGraduationCap, link: '/' },
    { title: '대시보드', icon: faChartLine, link: '/dashboard' },
    { title: '센터 규칙', icon: faScaleBalanced, link: '/' },
    { title: '일일관찰', icon: faEye, link: '/dailyObserve' },
    { title: '상담 내용', icon: faComment, link: '/' },
    { title: '공지사항', icon: faCheck, link: '/' },
  ];

  return (
    <NavBar>
      <Logo onClick={() => navi('/')}>Z</Logo>

      <MenuList>
        {menu.map((item, index) => (
          <MenuItem key={index} onClick={() => navi(item.link)}>
            <FontAwesomeIcon icon={item.icon} />
            <Title>{item.title}</Title>
          </MenuItem>
        ))}
      </MenuList>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.div`
  min-width: 80px;
  max-width: 80px;
  height: 100vh;
  background-image: linear-gradient(to bottom, #e9faff, #fdfdfe);
  border-right: 1px solid #e7ecf0;
`;

const Logo = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  color: #5ec3e6;
`;

const MenuList = styled.ul`
  margin-top: 10px;
`;

const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  font-size: 20px;
  color: #5ec3e6;
  cursor: pointer;
  &:hover {
    background-color: #e7ecf0;
  }
`;

const Title = styled.p`
  /* background-color: #5ec3e6; */
  color: black;
  border-radius: 5px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  font-weight: bold;
`;
