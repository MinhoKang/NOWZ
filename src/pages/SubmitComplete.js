import React from 'react';
import styled from 'styled-components';

const SubmitComplete = () => {
  return (
    <Container>
      <h3 style={{ fontSize: '30px' }}>일일관찰 제출 완료</h3>
      <div>
        <GoHome href="/">학생 정보 보러 가기</GoHome>
      </div>
    </Container>
  );
};

export default SubmitComplete;

const Container = styled.div`
  margin: auto;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const GoHome = styled.a`
  display: block;
  padding: 10px 20px;
  border: none;
  background-image: linear-gradient(to top, #5fc3e6, #bae1ed);
  color: #f9fefd;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
`;
