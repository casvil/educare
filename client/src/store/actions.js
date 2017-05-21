'use strict';

export const changeCategory = (category) => {
  return {
    type: 'CHANGE_CATEGORY',
    category: category
  }
}

// export const showAnswers = (questionid) => {
//   return {
//     type: 'SHOW_ANSWERS',
//     answers: answers
//   }
// }
