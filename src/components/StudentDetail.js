import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { faCaretDown, faCaretUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const StudentDetail = ({ isClick, setIsClick }) => {
  const studentDetails = useSelector((state) => state.studentDetails);
  const [openToggle, setOpenToggle] = useState(null);

  const toggleDetailItem = (sectionIndex) => {
    setOpenToggle((prevIndex) => (prevIndex === sectionIndex ? null : sectionIndex));
  };
  const getDayStatus = (value) => {
    const dayStatusList = [];
    for (const [day, isAttendance] of Object.entries(value)) {
      dayStatusList.push(`${day}: ${isAttendance ? '등원일' : '등원일 아님'}`);
    }
    return dayStatusList;
  };
  return (
    <Container>
      <Close>
        <FontAwesomeIcon icon={faTimes} onClick={() => setIsClick(false)} />
      </Close>
      {studentDetails.map((section, sectionIndex) => (
        <ConentContainer key={sectionIndex}>
          <Content active={openToggle === sectionIndex}>
            <SectionContainer active={openToggle === sectionIndex}>
              <SectionTitle active={openToggle === sectionIndex}>{section.title}</SectionTitle>
              <ToggleIcon active={openToggle === sectionIndex}>
                <FontAwesomeIcon
                  icon={openToggle === sectionIndex ? faCaretUp : faCaretDown}
                  onClick={() => toggleDetailItem(sectionIndex)}
                />
              </ToggleIcon>
            </SectionContainer>
            {openToggle === sectionIndex &&
              section.detail.map((detail, detailIndex) => (
                // <DetailItem key={detailIndex}>
                //   <DetailTitle>{detail.title}</DetailTitle>
                //   {detail.title === '등원일' ? (
                //     <div>{getDayStatus(detail.value)}</div>
                //   ) : (
                //     <>
                //       {typeof detail.value === 'object' ? (
                //         <>
                //           {Object.entries(detail.value).map(([day, time]) => (
                //             <div key={day}>
                //               {day}: {time}
                //             </div>
                //           ))}
                //         </>
                //       ) : (
                //         <DetailValue>{detail.value}</DetailValue>
                //       )}
                //     </>
                //   )}
                //   <div icon={faTimes} onClick={() => toggleDetailItem(sectionIndex)} />
                // </DetailItem>
                <DetailItem key={detailIndex}>
                  <DetailTitle>{detail.title}</DetailTitle>
                  {detail.title === '등원일' ? (
                    <div>
                      {getDayStatus(detail.value).map((status, index) => (
                        <div key={index}>{status}</div>
                      ))}
                    </div>
                  ) : (
                    <>
                      {typeof detail.value === 'object' ? (
                        <>
                          {Object.entries(detail.value).map(([day, time]) => (
                            <div key={day}>
                              {day}: {time}
                            </div>
                          ))}
                        </>
                      ) : (
                        <DetailValue>{detail.value}</DetailValue>
                      )}
                    </>
                  )}
                  <div icon={faTimes} onClick={() => toggleDetailItem(sectionIndex)} />
                </DetailItem>
              ))} 
          </Content>
        </ConentContainer>
      ))}
    </Container>
  );
};

export default StudentDetail;

const Container = styled.div`
  /* background-color: rgba(30, 30, 32, 0.9); */
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ConentContainer = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: red; */
  background-color: rgba(30, 30, 32, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.section`
  background-color: white;
  width: 50%;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid ${(props) => (props.active ? '#5ec3e6' : 'transparent')};
  /* border: 10px solid black; */
  transition: border-color 0.1s ease;
`;

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  margin: 0px 15px 0px 0px;
  color: ${(props) => (props.active ? '#5ec3e6' : 'black')};
`;

const ToggleIcon = styled.div`
  padding: 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => (props.active ? '#5ec3e6' : 'black')};
`;

const DetailItem = styled.div`
  margin-bottom: 10px;
`;

const DetailTitle = styled.span`
  font-weight: bold;
`;

const DetailValue = styled.span`
  margin-left: 10px;
`;

const Close = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 25px;
`;
