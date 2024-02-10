import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const StudentMenu = () => {
  //   const detailInfo = ['학생 목표', '현재 약속', '수업 리스트'];
  const studentGoal = useSelector((state) => state.studentGoal);

  console.log(studentGoal);
  return (
    <div>
      <Toggle>
        <h3>{studentGoal.title}</h3>
        <ul>
          <li>{studentGoal.studentGoal1}</li>
          <li>{studentGoal.studentGoal2}</li>
          <li>{studentGoal.studentGoal3}</li>
        </ul>
      </Toggle>
    </div>
  );
};

export default StudentMenu;

const Toggle = styled.div`
  border: 1px solid #e7ecf0;
  width: 80%;
`;
