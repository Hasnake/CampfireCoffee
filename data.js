'use strict';
var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm',];

var randomInteger = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
// var round = function (num, prec) {
//   return parseFloat(num.toFixed(prec));
// };

var allStores = [ ];

function Store(name, minCust, maxCust, custCups, custLbs) {
  this.name = name;
  this.minCustPerHour = minCust;
  this.maxCustPerHour = maxCust;
  this.averageCupsPerCust = custCups;
  this.averageTogoPoundsPerCust = custLbs;
  this.customerEachHour = [ ];
  this.totalCustPerDay = 0;
  this.cupsEachHour = [ ];
  this.totalCupsPerDay = 0;
  this.togoPoundsPerHour = [ ];
  this.totalTogoPoundsPerDay = 0;
  this.BeansPerHourForMakingCups = [ ];
  this.totalBeansPerDayForMakingCups = 0;
  this.beansPerHour = [ ];
  this.totalBeansPerDay = 0;
  this.employeesPerHour = [ ];
  this.employeesPerDay = 0;
  allStores.push(this);
};

Store.prototype.numberOfCustomersInEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.customerEachHour.push(randomInteger(this.minCustPerHour, this.maxCustPerHour));
  }
};

Store.prototype.totalDailyCustomers = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalCustPerDay += this.customerEachHour[i];
  }
};

Store.prototype.cupsPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.cupsEachHour.push(parseFloat((this.customerEachHour[i] * this.averageCupsPerCust).toFixed(1)));
  }
};

Store.prototype.dailyCups = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalCupsPerDay += this.cupsEachHour[i];
  }
};

Store.prototype.togoLbsPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.togoPoundsPerHour.push(parseFloat((this.customerEachHour[i] * this.averageTogoPoundsPerCust).toFixed(1)));
  }
};

Store.prototype.dailyLbs = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalTogoPoundsPerDay += parseFloat((this.togoPoundsPerHour[i]).toFixed(1));
  }
};

Store.prototype.beansForCupsPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.BeansPerHourForMakingCups.push(parseFloat((this.cupsEachHour[i] / 16).toFixed(1)));
  }
};

Store.prototype.beansForCupsDay = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalBeansPerDayForMakingCups += this.BeansPerHourForMakingCups[i];
  }
};

Store.prototype.howManyBeansPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.beansPerHour.push(parseFloat((this.togoPoundsPerHour[i] + this.BeansPerHourForMakingCups[i]).toFixed(1)));
  }
};

Store.prototype.howManyBeansDelivered = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalBeansPerDay += this.beansPerHour[i];
  }
};

Store.prototype.howManyEmployeesPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.employeesPerHour.push(Math.ceil(this.customerEachHour[i] / 30));
  }
};

Store.prototype.howManyEmployeesPerDay = function() {
  for (var i = 0; i < hours.length; i++) {
    this.employeesPerDay += this.employeesPerHour[i];
  }
};

Store.prototype.callAllMethods = function() {
  this.numberOfCustomersInEachHour();
  this.totalDailyCustomers();
  this.cupsPerHour();
  this.dailyCups();
  this.togoLbsPerHour();
  this.dailyLbs();
  this.beansForCupsPerHour();
  this.beansForCupsDay();
  this.howManyBeansPerHour();
  this.howManyBeansDelivered();
  this.howManyEmployeesPerHour();
  this.howManyEmployeesPerDay();
};

new Store('Pike Place Market', 14, 35, 1.2, 0.34);
new Store('Capitol Hill', 12, 28, 3.2, 0.03);
new Store('Seattle Public Library', 9, 45, 2.6, 0.02);
new Store('South Lake Union', 5, 18, 1.3, 0.04);
new Store('Sea-Tac Airport', 28, 44, 1.1, 0.41);

function makeItAllHappen() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].callAllMethods();
  }
};
makeItAllHappen();

//get reference to table element
var tableEl = document.getElementById('generated-table');

function makeRow(obj) {
  //make a row
  var rowEl = document.createElement('tr');

  //REPEAT THIS PART
    //make a cell
  var nameCell = document.createElement('td');
    //give content to cell
  nameCell.textContent = obj.name;
    //append cell to the row
  rowEl.appendChild(nameCell);

  var priceCell = document.createElement('td');
  priceCell.textContent = obj.price;
  rowEl.appendChild(priceCell);

  var taxEl = document.createElement('td');
  taxEl.textContent = obj.tax;
  rowEl.appendChild(taxEl);

  var totalEl = document.createElement('td');
  totalEl.textContent = obj.total;
  rowEl.appendChild(totalEl);

  //append row to the table
  tableEl.appendChild(rowEl);
}

function makeTable() {
  for (var item in allItems) {

    makeRow(item);
  }
}

makeTable();
