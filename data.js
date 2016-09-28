'use strict';
var h1El = document.createElement('h1');
h1El.textContent = 'Internal Data Page';
document.body.appendChild(h1El);
var store = {
  name:'Pike Place Market',
  minCustomersPerHour : 14,
  maxCustomersPerHour:35,
  averageCupsPerCust:1.2,
  averagetogoPoundsPerCust:0.34,
  //time:['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 am','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm','9:00 pm'],


  numberOfCustomers: function (){
    return Math.floor((Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + (this.minCustomersPerHour)));},

  numberOfCupsSoldPerHour :function() {
    return Math.round(this.averageCupsPerCust * this.numberOfCustomers() * 10) / 10;},

  numberOfPoundsSoldPerHour :function(){
    return Math.round(this.averagetogoPoundsPerCust * this.numberOfCustomers() * 10) / 10;},
  amountOfBeansInPoundsNeededForCups :function(){
    return Math.round(this.numberOfCupsSoldPerHour() / 16 * 10) / 10;},
  numberOfEmployees: function(){
    return Math.round((this.numberOfCustomers() / 30) * 10) / 10;},
  totalAmountOfBeansInPoundsSoldPerHour:function(){
    return Math.round((this.amountOfBeansInPoundsNeededForCups()) + (this.numberOfPoundsSoldPerHour()) * 10) / 10;
  }
};

var ulEl = document.createElement('ul');
ulEl.textContent = 'Pike Place Market';
document.body.appendChild(ulEl);

for (var i = 6 ;i < 21;i++){
  {
    var liEl = document.createElement('li');
    liEl.textContent = (i + ',' + store.totalAmountOfBeansInPoundsSoldPerHour() + ' lbs[' +
store.numberOfCustomers() + ' customers,' +
store.numberOfCupsSoldPerHour() + ' cups(' +
store.numberOfPoundsSoldPerHour() + ' lbs),' +
store.amountOfBeansInPoundsNeededForCups() + ' lbs to-go]');
  }
  ulEl.appendChild(liEl);
}
