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

  //   updateAccordionMenuItem: (state, action) => {
  //     const { id, title, studentGoal1, studentGoal2, studentGoal3 } = action.payload;
  //     const itemIndex = state.items.findIndex((item) => item.id === id);
  //     if (itemIndex !== -1) {
  //       state.items[itemIndex] = { id, title, studentGoal1, studentGoal2, studentGoal3 };
  //     }
  //   },
  // Add other reducers for adding/removing items if needed
});

export const { toggleAccordionItem } = accordionMenuSlice.actions;

export default configureStore({
  reducer: {
    accordionMenu: accordionMenuSlice.reducer,
  },
});
