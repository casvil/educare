'use strict';

const app = require('koa');
const router = require('koa-router')();
const mockData = require('./mock');
const db = require('./model/question');
const question = require('./controller/question');

// GET a question and its answers, based on question :id
router.get('/questions/:id', question.getOne);

// GET questions based on a :category
router.get('/questions/cat/:category', question.getCategoryQuestions);

// POST a question
router.post('/questions', question.postOne);

//
// post /answers/:q_id
// post /ratings/:a_id
// get /ratings/:a_id
//

module.exports = router;
