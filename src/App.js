import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import styled from 'styled-components';
import Nav2 from './components/Nav2';
import Home from './pages/Home';
import StudentInfo from './pages/StudentInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ConsultMadal from './components/ConsultMadal';
import DailyObserve from './pages/DailyObserve';
import SubmitDailyObserve from './pages/SubmitDailyObserve';
import SubmitComplete from './pages/SubmitComplete';
import DashBoard from './pages/dashBoard/DashBoard';
import Braedcrumbs from './components/Braedcrumbs';

function App() {
  const [isClick, setIsClick] = useState(false);
  const handleToggle = () => {
    console.log('handleToggle clicked');
    setIsClick(!isClick);
  };
  return (
    <Container>
      <Consult>
        <FontAwesomeIcon icon={faComments} onClick={handleToggle} />
      </Consult>
      {isClick && <ConsultMadal isClick={isClick} setIsClick={setIsClick} />}
      <NavContainer>
        <Nav />
        <AppContainer>
          <Nav2 />
          <Braedcrumbs />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/student/:id" element={<StudentInfo />} />
            <Route path="/dailyObserve" element={<DailyObserve />} />
            <Route path="/submitDailyObserve" element={<SubmitDailyObserve />} />
            <Route path="/submitComplete" element={<SubmitComplete />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </AppContainer>
      </NavContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
`;

const NavContainer = styled.div`
  display: flex;
  overflow-y: hidden;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  width: 100vw;
`;

const Consult = styled.div`
  cursor: pointer;
  position: fixed;
  right: 80px;
  bottom: 80px;
  font-size: 35px;
  padding: 15px;
  background-image: linear-gradient(to top, #60c3e6, #a8dbec);
  border-radius: 50%;
  z-index: 20;
  color: #f9fefd;
  &:hover {
    color: #3f4e8a;
  }
`;
