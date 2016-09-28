'use strict';
var pikePlaceMarket = {
  //numberOfCustomers: 'A random number of customers for each hour of operation that falls between the minimum and maximum hourly boundaries',
  numberOfCustomers:[],
  // getRandom:function(minimum,maximum){
  //   return Math.random()*(maximum-minimum)+minimum;
  // }
  //numberOfCups: 'The projected cups sold per hour at each location (based on the rate of cups/customer),
  // plus daily totals for each location and the company as a whole'],
  //for pikePlaceMarket Average Cups/Cust is 1.2
  numberOfCups :1.2 * numberOfCustomers,
  numberOfPounds:'you are right!',
  amountOfBeansInPounds: this.numberOfPounds * (1 / 16),
  amountOfToGo:[],
  //for pikePlaceMarket Average To-Go Pounds/Cust is 0.34
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
