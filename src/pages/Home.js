import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faClock,
  faExclamation,
  faSchool,
  faShoePrints,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import AccordionItem from '../components/AccordionItem';
import { useState } from 'react';
import StudentDetail from '../components/StudentDetail';

const Home = () => {
  const infoList = [
    { label: '지각여부', icon: faStopwatch, time: true },
    { label: '등원시간', icon: faSchool, time: '10:30' },
    { label: '하원시간', icon: faShoePrints, time: '19:30' },
    { label: '자기개발시간', icon: faClock, time: '4:21' },
  ];
  const accordionMenu = useSelector((state) => state.accordionMenu);
  console.log(accordionMenu);
  const [isClick, setIsClick] = useState(false);
  return (
    <Container>
      {isClick && <StudentDetail isClick={isClick} setIsClick={setIsClick} />}
      <StudentInfo>
        <StudentPictureContainer>
          <StudentPicture
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="학생 사진"
          />
        </StudentPictureContainer>

        <TimeInfoContainer>
          <NameContainer>
            <Font fontSize={30} fontWeight={'bold'}>
              Luke Cobb
            </Font>
            <ShowDetail>
              <FontAwesomeIcon icon={faExclamation} onClick={() => setIsClick(true)} />
            </ShowDetail>
          </NameContainer>
          <Badge>
            <BadgeIcon>
              <FontAwesomeIcon icon={faCircle} />
            </BadgeIcon>
            <p>미등원</p>
          </Badge>
          <TimeInfo>
            {infoList.map((item, index) => (
              <Item key={index}>
                <Icon>
                  <FontAwesomeIcon icon={item.icon} />
                </Icon>
                <Font fontSize={16} fontWeight={'normal'}>
                  {item.label}
                </Font>
                <Font fontSize={22} fontWeight={'normal'}>
                  {typeof item.time === 'boolean' ? (item.time ? '지각' : '정시 등원') : item.time}
                </Font>
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
  font-weight: ${(props) => props.fontWeight};
  display: flex;
  flex-direction: column;
`;

const TimeInfo = styled.div`
  display: flex;
  box-shadow: 0px 0px 5px 0px gray;
  padding: 20px;
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

const ShowDetail = styled.span`
  padding: 10px;
  width: 4px;
  height: 4px;
  margin-left: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  background-color: #adb2bb;
  border-radius: 50%;
  cursor: pointer;
  transform: rotate(180deg);
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  color: #74cae8;
  font-size: 25px;
  margin-bottom: 5px;
`;

const Badge = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 13px;
  background-color: #fff3f3;
  padding: 6px 2px;
  width: 100px;
  border-radius: 10px;
  > p {
    margin-left: 10px;
    font-size: 15px;
    color: #ef5a5c;
  }
`;

const BadgeIcon = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ef5a5c;
`;
