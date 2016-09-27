'use strict';
var cityQuestion = {
  questionText: 'What cities have I lived in?',
  correctAnswers: ['chicago', 'st paul', 'seattle', 'boston'],
  rightFeedback:'you are right!',
  wrongFeedback: 'you are wrong!',
  userAnswer: null,
  totalCorrect: 0,
  askQuestion: function() {
    this.userAnswer = prompt(this.questionText);
  },
  checkAnswer: function(answer) {
    if (this.correctAnswers.indexOf(answer) > -1) {
      console.log(this.rightFeedback);
      this.totalCorrect += 1;
    } else {
      console.log(this.wrongFeedback);
    }
  }
};

cityQuestion.askQuestion();
cityQuestion.checkAnswer(cityQuestion.userAnswer);
