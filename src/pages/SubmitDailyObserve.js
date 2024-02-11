import React from 'react';
import styled from 'styled-components';
import DailyForm from '../components/DailyForm';

const SubmitDailyObserve = () => {
  // 학생 로드맵이 기존에 작성되어 있어서 레벨이 정해짐
  // 정해진 레벨에 따라 미리 정해진 질문이 필터링
  // 필터링된 질문들만 보이도록

  return (
    <Container>
      <DailyForm />
      {}
    </Container>
  );
};

export default SubmitDailyObserve;

const Container = styled.div`
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
