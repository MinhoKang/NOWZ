import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSchool, faShoePrints, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import AccordionItem from '../components/AccordionItem';

const Home = () => {
  const infoList = [
    { label: '지각여부', icon: faStopwatch },
    { label: '등원시간', icon: faSchool },
    { label: '하원시간', icon: faShoePrints },
    { label: '자기개발시간', icon: faClock },
  ];
  const accordionMenu = useSelector((state) => state.accordionMenu);
  console.log(accordionMenu);
  return (
    <Container>
      <StudentInfo>
        <StudentPictureContainer>
          <StudentPicture
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="학생 사진"
          />
        </StudentPictureContainer>

        <TimeInfoContainer>
          <Font fontSize={30}>Luke Cobb</Font>
          <div>현재 상태: 공부 중</div>
          <TimeInfo>
            {infoList.map((item, index) => (
              <Item key={index}>
                <FontAwesomeIcon icon={item.icon} />
                <Font fontSize={18}>{item.label}</Font>
                <Font fontSize={22}>10:30</Font>
              </Item>
            ))}
          </TimeInfo>
        </TimeInfoContainer>
      </StudentInfo>
      <InfoDetail>
        {accordionMenu.map((item, index) => (
          <AccordionItem key={index} item={item} />
        ))}
      </InfoDetail>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StudentInfo = styled.div`
  display: flex;
`;

const StudentPictureContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 30px;
`;

const StudentPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Font = styled.p`
  font-size: ${(props) => props.fontSize}px;
  display: flex;
  flex-direction: column;
`;

const TimeInfo = styled.div`
  display: flex;
  box-shadow: 0px 0px 10px 0px gray;
  padding: 30px;
  border-radius: 20px;
`;

const TimeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
`;

const InfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;
