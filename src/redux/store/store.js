import { configureStore, createSlice } from '@reduxjs/toolkit';

let accordionMenuSlice = createSlice({
  name: 'accordionMenuSlice',
  initialState: [
    {
      id: 0,
      title: '학생 목표',
      text: ['지각하지 않기', '하루 자기개발 4시간 이상', '방정리 하기'],
      isOpen: false,
    },
    {
      id: 1,
      title: '현재 약속',
      text: [
        '지각하면 핸드폰 제출',
        '한 달 평균 학습시간 7시간 이상이면 하루 휴가 부여',
        '6월 모의고사 수학 1등급이면 핸드폰 변경. 2등급 이하면 수능까지 핸드폰 압수',
      ],
      isOpen: false,
    },
    {
      id: 2,
      title: '수업 리스트',

      text: ['월목: 수학(효민T) 13시', '수: 영어(수인T) 15시', '월금: 국어(민석T) 20시'],
      isOpen: false,
    },
  ],
  reducers: {
    accordionMenu: (state, action) => {
      state.accordionMenu = action.payload;
    },
    toggleAccordionItem: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state[index].isOpen = !state[index].isOpen;
      }
    },
  },
});

let dailyObserveSlice = createSlice({
  name: 'dailyObserveSlice',
  initialState: [
    [
      {
        id: 1,
        topic: 'polite',
        type: 'radio',
        question: '부모님에게 욕설',
        answer: [
          '씨발, 병신 등 욕설을 부모에게 함',
          '부모 앞에서 들리게 혼잣말로 욕설',
          '보이지 않는 곳에서 부모님 들리게 욕설',
          '욕설은 없지만 큰 소리로 짜증',
          '가벼운 짜증',
          '없음',
        ],
      },
      {
        id: 2,
        topic: 'polite',
        type: 'textarea',
        question: '부모 지향 욕설 중 없음 외에 답변한 경우, 구체적으로 상황을 알려주세요.',
      },
      {
        id: 3,
        topic: 'polite',
        type: 'checkbox',
        question: '부모 폭행 (복수 선택 가능)',
        answer: [
          '흉기로 폭행',
          '손으로 폭행',
          '부모 앞에서 물건을 부숨',
          '때리겠다고 말로 협박',
          '때린다고 시늉(몸짓)',
          '없음',
        ],
      },
      {
        id: 4,
        topic: 'polite',
        type: 'textarea',
        question: '부모 폭행 중 없음 외에 답변한 경우, 구체적으로 상황을 알려주세요.',
      },
      {
        id: 5,
        topic: 'polite',
        type: 'radio',
        question: '존댓말 (수치가 정확하지 않아도 괜찮습니다, 부모님께서 느끼시는대로 써주세요!)',
        answer: [
          '사용 빈도 0%',
          '사용 빈도 20%',
          '사용 빈도 40%',
          '사용 빈도 60%',
          '사용 빈도 80%',
          '사용 빈도 100%',
        ],
      },
      {
        id: 6,
        topic: 'polite',
        type: 'textarea',
        question: '존댓말 중 없음 외에 답변한 경우, 구체적으로 상황을 알려주세요.',
      },
    ],
    [
      {
        id: 1,
        question: '귀가(통금)',
        topic: 'life',
        answer: [
          '통금 시간을 1시간 정도 어김',
          '통금 시간을 2시간 정도 어김',
          '통금 시간에 대한 개념이 없고 제멋대로, 들어오긴 함',
          '외박을 하고 싶을 때 아무 때나 함',
          '통금은 지킨다',
        ],
      },
      {
        id: 2,
        question: '취침',
        topic: 'life',
        answer: [
          '낮밤이 바뀌어 있고, 본인이 원할 때 자고 원할 때 일어남',
          '4시~6시',
          '2~4시',
          '0시~2시',
          '0시 이전',
        ],
      },
      {
        id: 3,
        question: '기상',
        topic: 'life',
        answer: [
          '아무리 깨워도 일어나지 못 함(안 일어남)',
          '깨워서 일어났지만, 짜증내면서 일어남',
          '계속 깨우면 겨우 일어나긴 함',
          '깨우면 가끔 한 번에 일어남',
          '깨우면 한 번에 일어남',
          '스스로 일어남',
        ],
      },
      {
        id: 4,
        question: '식사 예절(복수 선택 가능)',
        topic: 'life',
        answer: [
          '같이 밥을 먹지 않음',
          '밥 먹으면서 핸드폰 사용',
          '본인이 사용한 식기류를 치우지 않음',
          '더럽게 먹음',
          '핸드폰은 사용하지 않지만 대화는 없음',
          '본인이 사용한 식기류 치움',
          '문제 없음',
        ],
      },
    ],
  ],
  reducers: {
    dailyObserve: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});
let dailyAnswerSlice = createSlice({
  name: 'dailyAnswerSlice',
  initialState: [
    [
      {
        id: 0,
        topic: 'polite',
        question: '부모님에게 욕설',
        answer: '',
      },
      {
        id: 1,
        topic: 'polite',
        question: '부모 지향 욕설 중 없음 외에 답변한 경우, 구체적으로 상황을 알려주세요.',
        answer: '',
      },
      {
        id: 2,
        topic: 'polite',
        question: '부모 폭행 (복수 선택 가능)',
        answer: [],
      },
      {
        id: 3,
        topic: 'polite',
        question: '부모 폭행 중 없음 외에 답변한 경우, 구체적으로 상황을 알려주세요.',
        answer: '',
      },
      {
        id: 4,
        topic: 'polite',
        question: '존댓말 (수치가 정확하지 않아도 괜찮습니다, 부모님께서 느끼시는대로 써주세요!)',
        answer: '',
      },
      {
        id: 5,
        topic: 'polite',
        question: '존댓말 중 없음 외에 답변한 경우, 구체적으로 상황을 알려주세요.',
        answer: [],
      },
    ],
  ],
  reducers: {
    dailyAnswer: (state, action) => {
      state.dailyAnswer = action.payload;
    },
  },
});

export const { toggleAccordionItem } = accordionMenuSlice.actions;

export default configureStore({
  reducer: {
    accordionMenu: accordionMenuSlice.reducer,
    dailyObserve: dailyObserveSlice.reducer,
    dailyAnswer: dailyAnswerSlice.reducer,
  },
});
