'use strict';

var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm',
'1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm',];

var round = function(number, precision) {
  return parseFloat(number.toFixed(precision));
};

//In the random number function,the plus 1 is to exclude the maximum boundary.
//The Math.Floor is returning A number representing the largest integer less than or equal to the specified number.
// Math.floor( 45.95); //  45
// Math.floor( 45.05); //  45
// Math.floor(  4   ); //   4
// Math.floor(-45.05); // -46
// Math.floor(-45.95); // -46
// The Math.ceil return the smallest integer greater than or equal to the given number.
//Math.ceil(.95);    // 1
// Math.ceil(-7.004); // -7

var randomInteger = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// There are different ways to create new objects:
// 1.Define and create a single object, using an object literal.
//Object initialiser or literal way.
// { [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }
// example: var person = {
// firstName:"John",
 // lastName:"Doe",
 // age:50,
 // eyeColor:"blue",
// };
// 2.Define and create a single object, with the keyword new.
// 3.Define an object constructor, and then create objects of the constructed type.

//  Called as a constructor
// new Object([value])

var allStores = [ ];

//The following code creates a prototype,'Store', and an object of that type, the 'Store'.
//The code then displays the constructor property for the object 'Store'.
//All objects in JavaScript are descended from Object;
//all objects inherit methods and properties from 'Object.prototype'.
function Store(name, min, max, avgCupsperCust, avgTogoperCust) {
  //
  this.name = name;
  this.minCustPerHour = min;
  this.maxCustPerHour = max;
  this.averageCupsPerCust = avgCupsperCust;
  this.averageTogoPoundsPerCust = avgTogoperCust;
  //
  this.customerEachHour = [ ];
  this.totalCustPerDay = 0;
  this.cupsEachHour = [ ];//new Arry();
  this.totalCupsPerDay = 0;
  this.togoPoundsPerHour = [ ];
  this.totalTogoPoundsPerDay = 0;
  this.BeansPerHourForMakingCups = [ ];
  this.totalBeansPerDayForMakingCups = 0;
  this.beansPerHour = [ ];
  this.totalBeansPerDay = 0;
  this.employeesPerHour = [ ];
  this.employeesPerDay = 0;
  //The push() method adds new items to the end of an array, and returns the new length.
  //The pop() method removes the last element from an array:
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

//Summary
//1.creates a prototype, and an object of that type, the 'Store'.
//2.writing methods
//








//working on the Tables.

var allCoffeeShopes = [ ];

function CoffeeShope(name) {
  this.name = name;
  //
  this.dailyTotalBeans = 0;
  this.hourlyTotalBeans = [ ];
  this.totalDailyEmployees = 0;
  this.totalHourlyEmployees = [ ];
  allCoffeeShopes.push(this);
};

CoffeeShope.prototype.dailyTotalBeansCalc = function() {
  for (var i = 0; i < allStores.length; i++) {
    this.dailyTotalBeans += allStores[i].totalBeansPerDay;
  }
};

CoffeeShope.prototype.hourlyBeanTotalCalc = function() {
  for (var i = 0; i < hours.length; i++) {
    var counter = 0;
    for (var j = 0; j < allStores.length; j++) {
      counter += allStores[j].beansPerHour[i];
    }
    this.hourlyTotalBeans.push(round(counter, 1));
  }
};

CoffeeShope.prototype.dailyTotalStaffCalc = function() {
  for (var i = 0; i < allStores.length; i++) {
    this.totalDailyEmployees += allStores[i].employeesPerDay;
  }
};

CoffeeShope.prototype.hourlyStaffTotalCalc = function() {
  for (var i = 0; i < hours.length; i++) {
    var counter = 0;
    for (var j = 0; j < allStores.length; j++) {
      counter += allStores[j].employeesPerHour[i];
    }
    this.totalHourlyEmployees.push(counter);
  }
};

CoffeeShope.prototype.coffeeShopeAllMethods = function() {
  this.dailyTotalBeansCalc();
  this.dailyTotalStaffCalc();
  this.hourlyBeanTotalCalc();
  this.hourlyStaffTotalCalc();
};

function coffeeShopeCalcs() {
  for (var i = 0; i < allCoffeeShopes.length; i++) {
    allCoffeeShopes[i].coffeeShopeAllMethods();
  }
};

new CoffeeShope('Coffee Shop');
coffeeShopeCalcs();

//Rendering a table is building the HTML page in javascript and then inserted it into the DOM.
// Document object Model specifies the browser should create a model of an HTML page and how javascript can access
// and update the contents of a web page while it is in the browser window.

function populatingTheTable(idName) {
  return document.getElementById(idName);
};

function createParentElement(element) {
  return document.createElement(element);
}

function makeAnElementWithText(parent, element, content) {
  var makeTheElement = document.createElement(element);
  makeTheElement.textContent = content;
  parent.appendChild(makeTheElement);
}

function loopForTableText(parent, element, content) {
  for (var i = 0; i < hours.length; i++) {
    makeAnElementWithText(parent, element, content[i]);
  }
}

function makeTheFirstRow(idName,tContent1, tContent2, tContent3) {
  var tableEl = populatingTheTable(idName);

  var rowEl = createParentElement('tr');
  makeAnElementWithText(rowEl, 'td', tContent1);
  makeAnElementWithText(rowEl, 'td', tContent2);
  loopForTableText(rowEl, 'td', tContent3);
  tableEl.appendChild(rowEl);

}

makeTheFirstRow('PoundsOfBeans',' ', 'Daily Location Total', hours);//The heading part for the PoundsOfBeans table.

function makeTheStoreRows() {
  for (var i = 0; i < allStores.length; i++) {
    makeTheFirstRow('PoundsOfBeans', allStores[i].name,round(allStores[i].totalBeansPerDay,1), allStores[i].beansPerHour);
  }
}

makeTheStoreRows();

makeTheFirstRow('PoundsOfBeans', 'Daily Total', round(allCoffeeShopes[0].dailyTotalBeans,1), allCoffeeShopes[0].hourlyTotalBeans);//The last row.

makeTheFirstRow('employees', ' ', 'Total', hours);


function makeTheEmployeeRows() {
  for (var i = 0; i < allStores.length; i++) {
    makeTheFirstRow('employees', allStores[i].name, allStores[i].employeesPerDay, allStores[i].employeesPerHour);
  }
}

makeTheEmployeeRows();

makeTheFirstRow('employees', 'Totals', allCoffeeShopes[0].totalDailyEmployees, allCoffeeShopes[0].totalHourlyEmployees);
