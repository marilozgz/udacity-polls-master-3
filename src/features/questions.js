import { createSlice } from "@reduxjs/toolkit";
import { formatQuestion, QuestionState } from "../utils/_DATA";

const initialState = {
  questions: QuestionState,
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    getQuestions: (state, action) => {
      state.questions = action.payload;
    },
    answerQuestion: (state, { payload }) => {
      const { optionType, user, id } = payload;
      state.questions[id][optionType].votes.push(user);
    },
    addQuestion: {
      reducer: (state, { payload }) => {
        state.questions[payload.id] = payload;
      },
      prepare: ({
        optionOne: optionOneText,
        optionTwo: optionTwoText,
        author,
        id,
      }) => {
        return {
          payload: {
            ...formatQuestion({ optionOneText, optionTwoText, author, id }),
          },
        };
      },
    },
  },
});

export const { getQuestions, addQuestion, answerQuestion } =
  questionSlice.actions;





export default questionSlice.reducer;
