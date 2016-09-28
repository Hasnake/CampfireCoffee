'use strict';
var store = {
  name:'Pike Place Market',
  minCustomersPerHour : 14,
  maxCustomersPerHour:35,
  averageCupsPerCust:1.2,
  averagetogoPoundsPerCust:0.34,


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

console.log(store.totalAmountOfBeansInPoundsSoldPerHour() + 'lbs[',
store.numberOfCustomers() + ' customers,' ,
store.numberOfCupsSoldPerHour() + ' cups(' +
store.numberOfPoundsSoldPerHour() + ' lbs),',
store.amountOfBeansInPoundsNeededForCups() + ' lbs to-go]');
