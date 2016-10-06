'use strict';

var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm',
'1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm'];

var round = function(number, precision) {
  return parseFloat(number.toFixed(precision));
};
var randomInteger = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
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
}

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

Store.prototype.cupsConsumedEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.cupsEachHour.push(round((this.customerEachHour[i] * this.averageCupsPerCust),1));
  }
};

Store.prototype.dailyCups = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalCupsPerDay += this.cupsEachHour[i];
  }
};

Store.prototype.togoLbsPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    // this.togoPoundsPerHour.push(parseFloat((this.customerEachHour[i] * this.averageTogoPoundsPerCust).toFixed(1)));
    this.togoPoundsPerHour.push(round(this.customerEachHour[i] * this.averageTogoPoundsPerCust, 1));
  }
};

Store.prototype.dailyLbs = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalTogoPoundsPerDay += round(this.togoPoundsPerHour[i], 1);
  }
};

Store.prototype.beansForCupsPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.BeansPerHourForMakingCups.push(round((this.cupsEachHour[i] / 16), 1));
  }
};

Store.prototype.beansForCupsDay = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalBeansPerDayForMakingCups += this.BeansPerHourForMakingCups[i];
  }
};

Store.prototype.amountOfBeansRequiredEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.beansPerHour.push(round((this.togoPoundsPerHour[i] + this.BeansPerHourForMakingCups[i]), 1));
  }
};

Store.prototype.amountOfBeansRequiredInaDay = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalBeansPerDay += this.beansPerHour[i];
  }
};

Store.prototype.amountOfEmployeesRequiredPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.employeesPerHour.push(Math.ceil(this.customerEachHour[i] / 30));
  }
};

Store.prototype.amountOfEmployeesRequiredInaDay = function() {
  for (var i = 0; i < hours.length; i++) {
    this.employeesPerDay += this.employeesPerHour[i];
  }
};

Store.prototype.callAllMethods = function() {
  this.numberOfCustomersInEachHour();
  this.totalDailyCustomers();
  this.cupsConsumedEachHour();
  this.dailyCups();
  this.togoLbsPerHour();
  this.dailyLbs();
  this.beansForCupsPerHour();
  this.beansForCupsDay();
  this.amountOfBeansRequiredEachHour();
  this.amountOfBeansRequiredInaDay();
  this.amountOfEmployeesRequiredPerHour();
  this.amountOfEmployeesRequiredInaDay();
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
}
makeItAllHappen();

//Summary
//1.creates a prototype, and an object of that type, the 'Store'.
//2.writing methods
//

//working on the Tables.

var CoffeeShope = {
  name: 'Campfire Coffee',
  dailyTotalBeans: 0,
  hourlyTotalBeans: [ ],
  totalDailyEmployees: 0,
  totalHourlyEmployees: [ ]
};

CoffeeShope.dailyTotalBeansForEachStore = function() {
  for (var i = 0; i < allStores.length; i++) {
    this.dailyTotalBeans += allStores[i].totalBeansPerDay;
  }
};

CoffeeShope.hourlyBeanRequiredInEachStore = function() {
  for (var h = 0; h < hours.length; h++) {
    var counter = 0;
    for (var s = 0; s < allStores.length; s++) {
      counter += allStores[s].beansPerHour[h];
    }
    this.hourlyTotalBeans.push(round(counter, 1));
  }
};

CoffeeShope.amountOfDailyTotalEmployeeInEachStore = function() {
  for (var i = 0; i < allStores.length; i++) {
    this.totalDailyEmployees += allStores[i].employeesPerDay;
  }
};

CoffeeShope.hourlyEmployeesInEachStore = function() {
  for (var i = 0; i < hours.length; i++) {
    var counter = 0;
    for (var j = 0; j < allStores.length; j++) {
      counter += allStores[j].employeesPerHour[i];
    }
    this.totalHourlyEmployees.push(counter);
  }
};

function coffeeShopeAllMethods() {
  CoffeeShope.dailyTotalBeansForEachStore();
  CoffeeShope.hourlyBeanRequiredInEachStore();
  CoffeeShope.amountOfDailyTotalEmployeeInEachStore();
  CoffeeShope.hourlyEmployeesInEachStore();
}
coffeeShopeAllMethods();

//Rendering a table is building the HTML page in javascript and then inserted it into the DOM.
// Document object Model specifies the browser should create a model of an HTML page and how javascript can access
// and update the contents of a web page while it is in the browser window.
var form = document.getElementById('form');

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

function makeRow(idName, tContent1, tContent2, tContent3) {
  var tableEl = document.getElementById(idName);

  var rowEl = createParentElement('tr');
  makeAnElementWithText(rowEl, 'td', tContent1);
  makeAnElementWithText(rowEl, 'td', tContent2);
  loopForTableText(rowEl, 'td', tContent3);
  tableEl.appendChild(rowEl);
}

makeRow('lbs-head',' ', 'Daily Location Total', hours);//The heading part for the PoundsOfBeans table.

function makeTheStoreRows() {
  for (var i = 0; i < allStores.length; i++) {
    makeRow('lbs-body', allStores[i].name,round(allStores[i].totalBeansPerDay,1), allStores[i].beansPerHour);
  }
}

makeTheStoreRows();

makeRow('lbs-foot', 'Daily Total', round(CoffeeShope.dailyTotalBeans,1), CoffeeShope.hourlyTotalBeans);//The last row.

makeRow('emp-head', ' ', 'Total', hours);


function makeTheEmployeeRows() {
  for (var i = 0; i < allStores.length; i++) {
    makeRow('emp-body', allStores[i].name, allStores[i].employeesPerDay, allStores[i].employeesPerHour);
  }
}

makeTheEmployeeRows();

makeRow('emp-foot', 'Totals', CoffeeShope.totalDailyEmployees, CoffeeShope.totalHourlyEmployees);

//Adding the submit add Event listner

// function handleButtonClick(event) {
//   alert('the button has been clicked. now we are having fun');
//   console.log(event.target);
// }

function zeroTotals() {
  CoffeeShope.dailyTotalBeans = 0;
  CoffeeShope.hourlyTotalBeans = [];
  CoffeeShope.totalDailyEmployees = 0;
  CoffeeShope.totalHourlyEmployees = [ ];
}

function handleNewLbsRow(newStore) {
  makeRow('lbs-body', newStore.name, round(newStore.totalBeansPerDay, 1), newStore.beansPerHour);
  zeroTotals();
  coffeeShopeAllMethods();
  document.getElementById('lbs-foot').innerHTML = '';
  makeRow('lbs-foot', 'Daily Total', round(CoffeeShope.dailyTotalBeans,1), CoffeeShope.hourlyTotalBeans);
}

function handleNewEmpRow(newStore) {
  makeRow('emp-body', newStore.name, newStore.employeesPerDay, newStore.employeesPerHour);
  zeroTotals();
  coffeeShopeAllMethods();
  document.getElementById('emp-foot').innerHTML = '';
  makeRow('emp-foot', 'Totals', CoffeeShope.totalDailyEmployees, CoffeeShope.totalHourlyEmployees);
}

function handleFormSubmit(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var Min = parseFloat(event.target.Min.value);
  var Max = parseFloat(event.target.Max.value);
  var avgCupsperCust = parseFloat(event.target.avgCupsperCust.value);
  var avgTogoperCust = parseFloat(event.target.avgTogoperCust.value);
  var newStore = new Store(name, Min, Max, avgCupsperCust, avgTogoperCust);
  newStore.callAllMethods();
  handleNewLbsRow(newStore);
  handleNewEmpRow(newStore);
}
form.addEventListener('submit', handleFormSubmit);

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
