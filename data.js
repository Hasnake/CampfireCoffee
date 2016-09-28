'use strict';
var store = {
  name:'Pike Place Market',
  minCustomersPerHour : null,
  maxCustomersPerHour:null,
  averageCupsPerCust:null,
  averagetogoPoundsPerCust:null,


  numberOfCustomers: function (){
    return Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + (this.minCustomersPerHour);},

  numberOfCupsSoldPerHour :function() {
    this.averageCupsPerCust * this.numberOfCustomers;},

  numberOfPoundsSoldPerHour :function(){
    this.averagetogoPoundsPerCust * this.numberOfCustomers;},
  amountOfBeansInPoundsNeededForCups :function(){
    this.numberOfCupsSoldPerHour / 16;},
  numberOfEmployees: function(){
    (this.numberOfCustomers / 30);},
  totalAmountOfBeansInPoundsSoldPerHour:function(){
    (this.amountOfBeansInPoundsNeededForCups) + (this.numberOfPoundsSoldPerHour);
  }
};

console.log(store.numberOfCustomers(35,14));
console.log(store.numberOfCupsSoldPerHour(1.2));
console.log(store.numberOfPoundsSoldPerHour(0.34));
console.log(store.amountOfBeansInPoundsNeededForCups());
console.log(store.numberOfEmployees());
