import { faHeadphones, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const ConsultMadal = ({ setIsClick, isClick }) => {
  return (
    <Container>
      <Title>
        <div>
          <span>
            <FontAwesomeIcon icon={faHeadphones} />
          </span>
          <p>상담하기</p>
        </div>
        <CloseIcon onClick={() => setIsClick(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseIcon>
      </Title>
      <ChatBox>
        <Chat>
          <InlineForm>
            {' '}
            <ChatInput />
            <SendBtn>전송</SendBtn>
          </InlineForm>
        </Chat>
        <Chat>
          <div>
            <Consultant>Z</Consultant>
            <div>
              <p>안녕하세요. 무엇을 도와드릴까요?</p>
            </div>
          </div>
          <Chat2>
            <Consultant>P</Consultant>
            <div>
              <p>약속 내용은 잘 지켜지고 있나요?</p>
            </div>
          </Chat2>
          <div>
            <Consultant>Z</Consultant>
            <div>
              <p>네 잘 지키고 있습니다.</p>
            </div>
          </div>
        </Chat>
      </ChatBox>
    </Container>
  );
};

export default ConsultMadal;

const Container = styled.div`
  width: 300px;
  height: 350px;
  position: fixed;
  background-color: #e8faff;
  z-index: 50;
  right: 100px;
  bottom: 100px;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div > span {
    font-size: 25px;
  }
  > div > p {
    font-size: 18px;
    margin-left: 10px;
  }
  > div {
    display: flex;
    align-items: center;
  }
`;

const CloseIcon = styled.p`
  font-size: 18px;
  cursor: pointer;
`;

const ChatBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  margin-top: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column-reverse;
`;

const Chat = styled.div`
  padding: 20px 20px 10px 20px;
`;

const Consultant = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50%;
  background-image: linear-gradient(to top, #60c3e6, #a8dbec);
  margin-bottom: 5px;
`;

const Chat2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;
`;

const InlineForm = styled.div`
  display: flex;
`;

const SendBtn = styled.button.attrs({
  type: 'button',
})`
  padding: 3px;
  /* border: none; */
`;

const ChatInput = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: '상담원에게 상담 내용을 보내세요',
}))`
  /* border: none; */
  width: 80%;
  padding: 3px;
`;
