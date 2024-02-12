import React from 'react';
import styled from 'styled-components';

const DailyObserve = () => {
  const dailyObserveFaq = [
    {
      title: '일일 관찰',
      text: '  일일관찰이란 집에서 관찰할 수 있는 학생의 행동을 기록하는 방법입니다. 일일관찰을 통해 방정리, 식사 예절, 존댓말 여부 등을 파악해서 학생 파악에 도움을 줄 수 있습니다.',
    },
    {
      title: '일일관찰을 제출하지 않을 경우 불이익이 있나요?',
      text: ' 불이익은 없습니다. 하지만, 일일관찰이 제대로 제출되지 않는다면, 집에서 발생하는 문제들을 파악하기 힘들게 됩니다.',
    },
    {
      title: '일일관찰은 얼마나 한 번 제출해야 하나요?',
      text: ' 일일관찰은 매일 제출해주셔야 합니다. 센터에서 관찰하기 힘든 행동 데이터를 수집하고, 이를 바탕으로 보다 나은 학생 매니징 방향성과 목표를 설정할 수 있습니다.',
    },
  ];
  return (
    <Container>
      <h2>일일 관찰</h2>
      {dailyObserveFaq.map((item, index) => (
        <Faq>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <hr />
        </Faq>
      ))}
      <a href="/submitDailyObserve">일일관찰 제출</a>
    </Container>
  );
};

export default DailyObserve;
const Container = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > a {
    margin: auto;
    text-decoration-line: none;
    color: #f9fefd;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    background-image: linear-gradient(to top, #5fc3e6, #bae1ed);
  }
`;

const Faq = styled.section`
  padding: 20px 30px;
  > h3 {
    margin-bottom: 10px;
  }
  > p {
    margin-bottom: 30px;
  }
`;
