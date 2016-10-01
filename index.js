'use strict';
var image1El = document.createElement('IMG');
image1El.textContent = 'Public facing Page';
image1El.src = 'campfire-coffee.jpg';
document.body.appendChild(image1El);
var h1El = document.createElement('h1');
h1El.textContent = 'Public facing Page';
document.body.appendChild(h1El);
var t = document.createTextNode('This is the public page for the camfire coffee project.');
document.body.appendChild(t);

var h2El = document.createElement('h1');
h2El.textContent = 'Internal page';
document.body.appendChild(h2El);

var a = document.createElement('a');
var linkText = document.createTextNode('Internal page');
a.appendChild(linkText);
a.title = 'Internal page' ;
a.href = 'data.html';
document.body.appendChild(a);

var storeLocations = ['Pike Place Market','Capitol Hill','Seattle Public Library','South Lake Union','SeaTac Airport'];
var storeLocationsEl = document.getElementById('storeLocations');
var ulEl = document.createElement('ul');
for (var i = 0;i < storeLocations.length;i++){
  var liEl = document.createElement('li');
  liEl.textContent = storeLocations[i];
  ulEl.appendChild(liEl);
}
storeLocationsEl.appendChild(ulEl);





// var minCustomersPerHour=14,
// var	maxCustomersPerHour=[35,28,45,18,44]
// var	averageCupsPerCust=[1.2,3.2,2.6,1.3,1.1]
// var averagetogoPoundsPerCust=[0.34,0.03,0.02,0.04,0.41]
// store = {
//   //numberOfCustomers: 'A random number of customers for each hour of operation that falls
//   // between the minimum and maximum hourly boundaries',
 // numberOfCustomers:function getRandomArbitrary(min, max) {
 // var numberOfCustomers = Math.random() * (max - min) + min;
 // return numberOfCustomers
 // }
//   getRandomArbitrary(14,35)
//
//   numberOfCupsSoldPerHour :1.2 * this.numberOfCustomers;
//   //numberOfCups: 'The projected cups sold per hour at each location (based on the rate of cups/customer),
//   // plus daily totals for each location and the company as a whole'],
//   //for pikePlaceMarket Average Cups/Cust is 1.2
//
//   numberOfPoundsSoldPerHour:0.34 * this.numberOfCustomers;
//   //The projected pounds sold per hour at each location (based on the rate of to-go pounds/customer),
//   // plus daily totals for each location and the company as a whole.
//   //for pikePlaceMarket Average To-Go Pounds/Cust=0.34
//   amountOfBeansInPoundsNeededForCups=this.numberOfCupsSoldPerHour/16;
//   //The total amount of beans needed to make cups
//   //(remember: 1 pound of beans makes 16 cups) and fulfill to-go bean orders - hourly, daily, and companywide totals
//   totalAmountOfBeansInPoundsSoldPerHour: (this.amountOfBeansInPoundsNeededForCups+(this.numberOfPoundsSoldPerHour);
//
// numberOfEmployees=(this.numberOfCustomers/30);
//   //The number of employees she will need at each location, each hour.
//   //Assume that each customer will require an average of two minutes of a single employee's time.
//   //This number needs to be rounded up to the nearest integer since it requires, for instance, 5 people to adequately do the work of 4.2 people.
// console.log(numberOfCustomers,numberOfCupsSoldPerHour,amountOfBeansInPoundsNeededForCups,totalAmountOfBeansInPoundsSoldPerHour);
