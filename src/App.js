import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import styled from 'styled-components';
import Nav2 from './components/Nav2';
import Home from './pages/Home';
import StudentInfo from './pages/StudentInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import ConsultMadal from './components/ConsultMadal';

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
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/student/:id" element={<StudentInfo />} />
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
`;
