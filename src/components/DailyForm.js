import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DailyForm = () => {
  const questions = useSelector((state) => state.dailyObserve);
  console.log(questions);
  const politeQuestions = useSelector((state) => state.dailyObserve[0]);
  console.log(politeQuestions);
  const lifeQuestions = useSelector((state) => state.dailyObserve[1]);
  console.log(lifeQuestions);
  const answers = useSelector((state) => state.dailyAnswer);
  console.log(answers);
  const navi = useNavigate();

  const [questionLength, SetQuestionLength] = useState(questions.length);
  const [clickCount, setClickCount] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    console.log(clickCount);
    setClickCount(clickCount + 1);
    console.log(event.target.innerText);
    if (clickCount == questionLength) {
      setSubmitted(true);
    }
    if (event.target.innerText == '제출하기') {
      navi('/submitComplete');
    }
  };
  const handlePrev = () => {
    setClickCount(clickCount - 1);
  };

  const progress = Math.floor((clickCount / questionLength) * 100);

  return (
    <div>
      <ProgressContainer>
        <ProgressText>진행도: {progress.toFixed(0)}%</ProgressText>
        <ProgressBar>
          <ProgressFill progress={progress} />
        </ProgressBar>
      </ProgressContainer>
      {clickCount === 1 && (
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
                        />
                        <AnswerLabel htmlFor={`question-${item.id}-${index}`}>{answer}</AnswerLabel>
                      </Fieldset>
                    </div>
                  ))
                ) : (
                  item.answer.map((answer, index) => (
                    <Fieldset key={index}>
                      <div>
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

            {clickCount < 2 ? (
              <BtnContainer alignRight={clickCount < 2}>
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
      )}

      {clickCount > 1 && (
        <div>
          <h2>생활</h2>
          <form>
            {lifeQuestions.map((item) => (
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
                        />
                        <AnswerLabel htmlFor={`question-${item.id}-${index}`}>{answer}</AnswerLabel>
                      </Fieldset>
                    </div>
                  ))
                ) : (
                  item.answer.map((answer, index) => (
                    <Fieldset key={index}>
                      <div>
                        <input
                          type="radio"
                          id={`question-${item.id}-${index}`}
                          name={`question-${item.id}`}
                          value={answer}
                        />
                        <AnswerLabel htmlFor={`question-${item.id}-${index}`}>{answer}</AnswerLabel>
                      </div>
                    </Fieldset>
                  ))
                )}
              </QuestionContainer>
            ))}

            {clickCount < 2 ? (
              <BtnContainer alignRight={clickCount < 2}>
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
      )}
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
  border-radius: 10px;
  cursor: pointer;
`;

const ProgressContainer = styled.div`
  margin-bottom: 20px;
`;

const ProgressText = styled.div`
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  width: 50vw;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: #5fc3e6;
`;
