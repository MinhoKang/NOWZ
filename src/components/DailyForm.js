import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DailyForm = () => {
  const questions = useSelector((state) => state.dailyObserve);
  console.log(questions);
  const politeQuestions = useSelector((state) => state.dailyObserve[0]);
  console.log(politeQuestions);
  const answers = useSelector((state) => state.dailyAnswer);
  console.log(answers);
  const navi = useNavigate();

  const [questionLength, SetQuestionLength] = useState(questions.length);
  const [clickCount, setClickCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log(clickCount);
    setSubmitted(true);
    setClickCount(clickCount + 1);
  };
  const handlePrev = () => {};

  return (
    <div>
      <h2>부모님에게 예의</h2>
      <form>
        {politeQuestions.map((item) => (
          <QuestionContainer key={item.id}>
            <QuestionTitle>
              {item.id}. {item.question}
            </QuestionTitle>

            {item.type === 'textarea' ? (
              <Textarea name={`question-${item.id}`} />
            ) : item.type === 'checkbox' ? (
              item.answer.map((answer, index) => (
                <div key={index}>
                  <Fieldset>
                    <input
                      type="checkbox"
                      id={`question-${item.id}-${index}`}
                      name={`question-${item.id}`}
                      value={answer}
                      required
                    />
                    <AnswerLabel htmlFor={`question-${item.id}-${index}`}>{answer}</AnswerLabel>
                  </Fieldset>
                </div>
              ))
            ) : (
              item.answer.map((answer, index) => (
                <Fieldset>
                  <div key={index}>
                    <input
                      type="radio"
                      id={`question-${item.id}-${index}`}
                      name={`question-${item.id}`}
                      value={answer}
                      required
                    />
                    <AnswerLabel htmlFor={`question-${item.id}-${index}`}>{answer}</AnswerLabel>
                  </div>
                </Fieldset>
              ))
            )}
          </QuestionContainer>
        ))}

        {clickCount < 1 ? (
          <BtnContainer alignRight={clickCount < 1}>
            <SubmitBtn type="submit" onClick={handleSubmit}>
              다음으로
            </SubmitBtn>
          </BtnContainer>
        ) : (
          <BtnContainer>
            <SubmitBtn type="submit" onClick={handlePrev}>
              이전으로
            </SubmitBtn>
            <SubmitBtn type="submit" onClick={handleSubmit}>
              {clickCount === questionLength ? '제출하기' : '다음으로'}
            </SubmitBtn>
          </BtnContainer>
        )}
      </form>
    </div>
  );
};

export default DailyForm;

const QuestionContainer = styled.section`
  padding: 10px;
`;

const QuestionTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 20px;
  border-radius: 10px;
`;

const AnswerLabel = styled.label`
  font-size: 18px;
  margin-left: 10px;
  cursor: pointer;
`;

const Fieldset = styled.fieldset`
  border: none;
`;

const BtnContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: ${(props) => (props.alignRight ? 'flex-end' : 'space-between')};
`;

const SubmitBtn = styled.button`
  display: block;
  padding: 10px 20px;
  border: none;
  background-image: linear-gradient(to top, #5fc3e6, #bae1ed);
  color: #f9fefd;
  cursor: pointer;
`;
