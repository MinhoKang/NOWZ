import React, { useEffect, useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import monthData from '../../data/monthData.json';
import dayData from '../../data/dayData.json';
import weekData from '../../data/weekData.json';
import { da } from '@faker-js/faker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const DashBoard = () => {
  const tardyTrueCounts = dayData.map((month) => {
    const trueCount = Object.values(month.tardy).filter((value) => value === true).length;
    return trueCount;
  });
  const tardyFalseCounts = dayData.map((month) => {
    const falseCount = Object.values(month.tardy).filter((value) => value === false).length;
    return falseCount;
  });
  const studyTime = dayData.map((month) => {
    if (!month || !month.study) return 0;
    let initialTime = 0;
    const totalStudyTime = Object.values(month.study).reduce((acc, cur) => acc + cur, initialTime);
    return totalStudyTime;
  });
  const programTime = dayData.map((month) => {
    if (!month || !month.program) return 0;
    let initialTime = 0;
    const totalProgramTime = Object.values(month.program).reduce(
      (acc, cur) => acc + cur,
      initialTime
    );
    return totalProgramTime;
  });
  const allowanceCounts = dayData.map((month) => {
    if (!month || !month.allowance) return 0;
    let initialTime = 0;
    const totalAllowanceTime = Object.values(month.allowance).reduce(
      (acc, cur) => acc + cur,
      initialTime
    );
    return totalAllowanceTime;
  });
  const [zpt, setZpt] = useState(0);
  const [zScore, setZScore] = useState(0);

  // ZPT
  useEffect(() => {
    const totalZpt = weekData.reduce((acc, month) => {
      return acc + Object.values(month.zpt).reduce((sum, weekZpt) => sum + weekZpt, 0);
    }, 0);

    setZpt(totalZpt);
  }, []);

  // ZSCORE
  useEffect(() => {
    const totalZScore = weekData.reduce((acc, month) => {
      return acc + Object.values(month.zScore).reduce((sum, weekZScore) => sum + weekZScore, 0);
    }, 0);

    setZScore(totalZScore);
  }, []);

  const koreanGrades = weekData.map((item) => {
    if (item.weekendTestGrade) {
      const koreanWeekGrades = Object.values(item.weekendTestGrade).map((week) => {
        return week.korean ? week.korean : 0;
      });
      return koreanWeekGrades.reduce((acc, cur) => acc.concat(cur), []);
    } else {
      return [];
    }
  });
  const koreanGradeArr = [].concat(...koreanGrades);
  const weekX = weekData.map((data) =>
    Object.keys(data.weekendTestGrade).map((week) => `${data.label} ${week}`)
  );
  const weekArr = [].concat(...weekX);

  const englishGrades = weekData.map((item) => {
    if (item.weekendTestGrade) {
      const englishWeekGrades = Object.values(item.weekendTestGrade).map((week) => {
        return week.english ? week.english : 0;
      });
      return englishWeekGrades.reduce((acc, cur) => acc.concat(cur), []);
    } else {
      return [];
    }
  });
  const englishGradeArr = [].concat(...englishGrades);

  const mathGrades = weekData.map((item) => {
    if (item.weekendTestGrade) {
      const mathWeekGrades = Object.values(item.weekendTestGrade).map((week) => {
        return week.math ? week.math : 0;
      });
      return mathWeekGrades.reduce((acc, cur) => acc.concat(cur), []);
    } else {
      return [];
    }
  });
  const mathGradeArr = [].concat(...mathGrades);

  return (
    <GridContainer>
      <ChartContainer>
        <Line
          data={{
            labels: monthData.map((data) => data.label),
            datasets: [
              {
                label: '로드맵 레벨',
                data: monthData.map((data) => data.roadmapLevel),
              },
            ],
          }}
        />
      </ChartContainer>
      <ChartContainer>
        <Bar
          data={{
            labels: dayData.map((data) => data.label),
            datasets: [
              {
                label: '정시 등원',
                data: tardyTrueCounts,
              },
              {
                label: '지각',
                data: tardyFalseCounts,
              },
            ],
          }}
        />
      </ChartContainer>
      <ChartContainer>
        <Bar
          data={{
            labels: dayData.map((data) => data.label),
            datasets: [
              {
                label: '학습',
                data: studyTime,
              },
              {
                label: '프로그램',
                data: programTime,
              },
            ],
          }}
          options={{
            // responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
          }}
        />
      </ChartContainer>
      <ChartContainer>
        <Line
          data={{
            labels: dayData.map((data) => data.label),
            datasets: [
              {
                fill: true,
                label: '용돈',
                data: allowanceCounts,
              },
            ],
          }}
          responsive={{
            // responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Chart.js Line Chart',
              },
            },
          }}
        />
      </ChartContainer>
      <ZContainer>
        <NowPoint>
          <span>ZPT</span> <p>{zpt}</p>
        </NowPoint>

        <NowPoint>
          <span> ZSCORE</span> <p>{zScore}</p>
        </NowPoint>
      </ZContainer>
      <ChartContainer>
        <Line
          data={{
            labels: weekArr,
            datasets: [
              { label: '국어', data: koreanGradeArr },
              {
                label: '영어',
                data: englishGradeArr,
              },
              {
                label: '수학',
                data: mathGradeArr,
              },
            ],
          }}
        />
      </ChartContainer>
    </GridContainer>
  );
};

export default DashBoard;
const GridContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px 20px;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ZContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

const NowPoint = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 80px;
  border-radius: 10px;
  background-image: linear-gradient(to bottom, #60c3e6, #bce3f0);
  > span {
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > p {
    font-size: 25px;
    color: #3f4e8a;
    font-weight: bold;
  }
  &:hover {
    span {
      color: #dbdcdf;
    }
  }
`;

const ChartContainer = styled.div`
  width: 30vw;
  box-shadow: 0px 0px 5px 0px gray;

  border-radius: 10px;
`;
