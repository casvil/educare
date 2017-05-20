const app = require('koa');
const router = require('koa-router')();
const mockData = require('./mock');

// GET a question based on id and its answers
router.get('/questions/:id', (ctx, next) => {

  // Get data from db and filter by question_id
  let question = mockData.questions.filter((question) => {
    return question.id == ctx.params.id;
  });

  let answers = mockData.answers.filter((answer) => {
    return answer.question_id == ctx.params.id;
  });

  if (!question.length) ctx.status = 404;
  else ctx.response.body = { question, answers };
});

// get questions based on a category
// get /questions/:category

// post a question
// post /questions/:category

// post an answer to an specific question
// post /answers/:q_id


// Extra
// post /ratings/:a_id
// get /ratings/:a_id


// get all questions
// .get('/questions', (ctx, next) => {
//   ctx.response.body = db.msgs;
// })



// router.post('/messages', ctrlMessages.postMsgs);
// router.get('/messages', ctrlMessages.getAll);
// router.post('/all', ctrlMessages.postAll);

module.exports = router;
