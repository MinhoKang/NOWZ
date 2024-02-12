import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggleAccordionItem } from '../redux/store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleAccordionItem({ id: item.id }));
  };
  console.log(item.text);
  console.log(item);
  return (
    <AccordionContainer isOpen={item.isOpen}>
      <AccordionHeader isOpen={item.isOpen}>
        <h3>{item.title}</h3>
        <ToggleIcon isOpen={item.isOpen}>
          <FontAwesomeIcon icon={item.isOpen ? faCaretUp : faCaretDown} onClick={handleToggle} />
        </ToggleIcon>
      </AccordionHeader>
      {item.isOpen && (
        <AccordionContent>
          {item.text.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </AccordionContent>
      )}
    </AccordionContainer>
  );
};

export default AccordionItem;

const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 800px;
  border-radius: 20px;
  padding: 10px;
  border: 2px solid ${(props) => (props.isOpen ? '#5ec3e6' : 'transparent')};
  box-shadow: 0px 0px 5px 0px gray;
`;

const AccordionHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  > h3 {
    color: ${(props) => (props.isOpen ? '#5ec3e6' : 'black')};
  }
`;

const AccordionContent = styled.div`
  padding: 10px;
  transition: all 1s;
`;

const ToggleIcon = styled.div`
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  color: ${(props) => (props.isOpen ? '#5ec3e6' : 'black')};
`;
