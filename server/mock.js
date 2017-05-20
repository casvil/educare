let questions = [
  {
    id: 1,
    user_id: 1,
    body: 'What is the capital of Catalunya?',
    image: '/blablabla.png',
    category: 'Humanities'
  },
  {
    id: 2,
    user_id: 1,
    body: 'What is the population of Barcelona?',
    image: '/blablabla.png',
    category: 'Humanities'
  },
  {
    id: 3,
    user_id: 2,
    body: 'What is the population of Catalunya?',
    image: '/blablabla.png',
    category: 'Humanities'
  },
  {
    id: 4,
    user_id: 3,
    body: 'What are mammals?',
    image: '/blablabla.png',
    category: 'Nature'
  }
];

let answers = [
  {
    id: 1,
    question_id: 1,
    body: 'The capital of Catalunya is Barcelona'
  },
  {
    id: 2,
    question_id: 1,
    body: 'The capital of Catalunya is Girona'
  },
  {
    id: 3,
    question_id: 2,
    body: 'Barcelona has a population of 2 million people'
  },
  {
    id: 4,
    question_id: 3,
    body: 'There is a lot of people living in Catalunya'
  },
  {
    id: 5,
    question_id: 3,
    body: 'There are 7.5 catalans in Catalunya'
  }
];

let mock = {
  questions,
  answers
};

module.exports = mock;
