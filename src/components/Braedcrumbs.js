import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import styled from 'styled-components';

const Braedcrumbs = () => {
  const location = useLocation();
  const [path, setPath] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/dashboard':
        setPath('대시보드');
        break;
      case '/dailyObserve':
        setPath('일일관찰');
        break;
      default:
        setPath('');

        break;
    }
  }, [location.pathname]);

  return (
    <Container>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="/">
          <FontAwesomeIcon icon={faHouse} />
        </BreadcrumbItem>

        <BreadcrumbItem tag="a" href="#">
          {path}
        </BreadcrumbItem>
      </Breadcrumb>
    </Container>
  );
};

export default Braedcrumbs;

const Container = styled.div`
  position: absolute;
  top: 100px;
  left: 40px;
`;
