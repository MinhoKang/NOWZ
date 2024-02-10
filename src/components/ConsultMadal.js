import { faHeadphones, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const ConsultMadal = ({ setIsClick, isClick }) => {
  return (
    <Container>
      <Title>
        <span>
          <FontAwesomeIcon icon={faHeadphones} />
        </span>
        <p>상담원 연결</p>
        <CloseIcon onClick={() => setIsClick(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseIcon>
      </Title>
      <Chat>d</Chat>
    </Container>
  );
};

export default ConsultMadal;

const Container = styled.div`
  width: 300px;
  height: 350px;
  position: fixed;
  background-color: red;
  z-index: 50;
  right: 100px;
  bottom: 100px;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > span {
    font-size: 25px;
  }
  > p {
    font-size: 18px;
  }
`;

const CloseIcon = styled.p`
  font-size: 18px;
  cursor: pointer;
`;

const Chat = styled.div`
  width: 100%;
  height: 100vh;
  background-color: blue;
  margin-top: 20px;
`;
