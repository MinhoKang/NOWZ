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
    <AccordionContainer>
      <AccordionHeader>
        <h3>{item.title}</h3>
        <p>
          <FontAwesomeIcon icon={item.isOpen ? faCaretUp : faCaretDown} onClick={handleToggle} />
        </p>
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
`;

const AccordionHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  > p {
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
  }
`;

const AccordionContent = styled.div`
  padding: 10px;
`;
