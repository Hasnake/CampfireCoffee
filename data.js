'use strict';
var h1El = document.createElement('h1');
h1El.textContent = 'Internal Page';
document.body.appendChild(h1El);
var h2El = document.createElement('h1');
h2El.textContent = 'Beans Needed By Location Each Day';
document.body.appendChild(h2El);

var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm',];

var randomInteger = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
var round = function (num, prec) {
  return parseFloat(num.toFixed(prec));
};

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

// function makeRow() {
  //make a row
var row0El = document.createElement('tr');
var row1El = document.createElement('tr');
var row2El = document.createElement('tr');
var row3El = document.createElement('tr');
var row4El = document.createElement('tr');
var row5El = document.createElement('tr');



  //REPEAT THIS PART
    //make a cell
var shopesCell = document.createElement('td');
shopesCell.textContent = allStores[0].name;//give content to cell
row0El.appendChild(shopesCell);//append cell to the row

var dailyLocationTotalCell = document.createElement('td');  //make a cell
dailyLocationTotalCell.textContent = round((allStores[0].totalBeansPerDay),1);//give content to cell
row0El.appendChild(dailyLocationTotalCell);  //append cell to the row

var hourlyBeanCell0 = document.createElement('td');
hourlyBeanCell0.textContent = allStores[0].beansPerHour[0];
row0El.appendChild(hourlyBeanCell0);

var hourlyBeanCell1 = document.createElement('td');
hourlyBeanCell1.textContent = allStores[0].beansPerHour[1];
row0El.appendChild(hourlyBeanCell1);

var hourlyBeanCell2 = document.createElement('td');
hourlyBeanCell2.textContent = allStores[0].beansPerHour[2];
row0El.appendChild(hourlyBeanCell2);

var hourlyBeanCell3 = document.createElement('td');
hourlyBeanCell3.textContent = allStores[0].beansPerHour[3];
row0El.appendChild(hourlyBeanCell3);

var hourlyBeanCell4 = document.createElement('td');
hourlyBeanCell4.textContent = allStores[0].beansPerHour[4];
row0El.appendChild(hourlyBeanCell4);

var hourlyBeanCell5 = document.createElement('td');
hourlyBeanCell5.textContent = allStores[0].beansPerHour[5];
row0El.appendChild(hourlyBeanCell5);

var hourlyBeanCell6 = document.createElement('td');
hourlyBeanCell6.textContent = allStores[0].beansPerHour[6];
row0El.appendChild(hourlyBeanCell6);

var hourlyBeanCell7 = document.createElement('td');
hourlyBeanCell7.textContent = allStores[0].beansPerHour[7];
row0El.appendChild(hourlyBeanCell7);

var hourlyBeanCell8 = document.createElement('td');
hourlyBeanCell8.textContent = allStores[0].beansPerHour[8];
row0El.appendChild(hourlyBeanCell8);

var hourlyBeanCell9 = document.createElement('td');
hourlyBeanCell9.textContent = allStores[0].beansPerHour[9];
row0El.appendChild(hourlyBeanCell9);

var hourlyBeanCell10 = document.createElement('td');
hourlyBeanCell10.textContent = allStores[0].beansPerHour[10];
row0El.appendChild(hourlyBeanCell10);

var hourlyBeanCell11 = document.createElement('td');
hourlyBeanCell11.textContent = allStores[0].beansPerHour[11];
row0El.appendChild(hourlyBeanCell11);

var hourlyBeanCell12 = document.createElement('td');
hourlyBeanCell12.textContent = allStores[0].beansPerHour[12];
row0El.appendChild(hourlyBeanCell12);

var hourlyBeanCell13 = document.createElement('td');
hourlyBeanCell13.textContent = allStores[0].beansPerHour[13];
row0El.appendChild(hourlyBeanCell13);

var hourlyBeanCell14 = document.createElement('td');
hourlyBeanCell14.textContent = allStores[0].beansPerHour[14];
row0El.appendChild(hourlyBeanCell14);

var hourlyBeanCell15 = document.createElement('td');
hourlyBeanCell15.textContent = allStores[0].beansPerHour[15];
row0El.appendChild(hourlyBeanCell15);

//making the second row
var shopesCell1 = document.createElement('td');
shopesCell1.textContent = allStores[1].name;//give content to cell
row1El.appendChild(shopesCell1);//append cell to the row

var dailyLocationTotalCell1 = document.createElement('td');  //make a cell
dailyLocationTotalCell1.textContent = round((allStores[1].totalBeansPerDay),1);//give content to cell
row1El.appendChild(dailyLocationTotalCell1);  //append cell to the row

var hourlyBeanCell0A = document.createElement('td');
hourlyBeanCell0A.textContent = allStores[1].beansPerHour[0];
row1El.appendChild(hourlyBeanCell0A);

var hourlyBeanCell1A = document.createElement('td');
hourlyBeanCell1A.textContent = allStores[1].beansPerHour[1];
row1El.appendChild(hourlyBeanCell1A);

var hourlyBeanCell2A = document.createElement('td');
hourlyBeanCell2A.textContent = allStores[1].beansPerHour[2];
row1El.appendChild(hourlyBeanCell2A);

var hourlyBeanCell3A = document.createElement('td');
hourlyBeanCell3A.textContent = allStores[1].beansPerHour[3];
row1El.appendChild(hourlyBeanCell3A);

var hourlyBeanCell4A = document.createElement('td');
hourlyBeanCell4A.textContent = allStores[1].beansPerHour[4];
row1El.appendChild(hourlyBeanCell4A);

var hourlyBeanCell5A = document.createElement('td');
hourlyBeanCell5A.textContent = allStores[1].beansPerHour[5];
row1El.appendChild(hourlyBeanCell5A);

var hourlyBeanCell6A = document.createElement('td');
hourlyBeanCell6A.textContent = allStores[1].beansPerHour[6];
row1El.appendChild(hourlyBeanCell6A);

var hourlyBeanCell7A = document.createElement('td');
hourlyBeanCell7A.textContent = allStores[1].beansPerHour[7];
row1El.appendChild(hourlyBeanCell7A);

var hourlyBeanCell8A = document.createElement('td');
hourlyBeanCell8A.textContent = allStores[1].beansPerHour[8];
row1El.appendChild(hourlyBeanCell8A);

var hourlyBeanCell9A = document.createElement('td');
hourlyBeanCell9A.textContent = allStores[1].beansPerHour[9];
row1El.appendChild(hourlyBeanCell9A);

var hourlyBeanCell10A = document.createElement('td');
hourlyBeanCell10A.textContent = allStores[1].beansPerHour[10];
row1El.appendChild(hourlyBeanCell10A);

var hourlyBeanCell11A = document.createElement('td');
hourlyBeanCell11A.textContent = allStores[1].beansPerHour[11];
row1El.appendChild(hourlyBeanCell11A);

var hourlyBeanCell12A = document.createElement('td');
hourlyBeanCell12A.textContent = allStores[1].beansPerHour[12];
row1El.appendChild(hourlyBeanCell12A);

var hourlyBeanCell13A = document.createElement('td');
hourlyBeanCell13A.textContent = allStores[1].beansPerHour[13];
row1El.appendChild(hourlyBeanCell13A);

var hourlyBeanCell14A = document.createElement('td');
hourlyBeanCell14A.textContent = allStores[1].beansPerHour[14];
row1El.appendChild(hourlyBeanCell14A);

var hourlyBeanCell15A = document.createElement('td');
hourlyBeanCell15A.textContent = allStores[1].beansPerHour[15];
row1El.appendChild(hourlyBeanCell15A);

//making the third row
var shopesCellB = document.createElement('td');
shopesCellB.textContent = allStores[2].name;//give content to cell
row2El.appendChild(shopesCellB);//append cell to the row

var dailyLocationTotalCellB = document.createElement('td');  //make a cell
dailyLocationTotalCellB.textContent = round((allStores[2].totalBeansPerDay),1);//give content to cell
row2El.appendChild(dailyLocationTotalCellB);  //append cell to the row

var hourlyBeanCell0B = document.createElement('td');
hourlyBeanCell0B.textContent = allStores[2].beansPerHour[0];
row2El.appendChild(hourlyBeanCell0B);

var hourlyBeanCell1B = document.createElement('td');
hourlyBeanCell1B.textContent = allStores[2].beansPerHour[1];
row2El.appendChild(hourlyBeanCell1B);

var hourlyBeanCell2B = document.createElement('td');
hourlyBeanCell2B.textContent = allStores[2].beansPerHour[2];
row2El.appendChild(hourlyBeanCell2B);

var hourlyBeanCell3B = document.createElement('td');
hourlyBeanCell3B.textContent = allStores[2].beansPerHour[3];
row2El.appendChild(hourlyBeanCell3B);

var hourlyBeanCell4B = document.createElement('td');
hourlyBeanCell4B.textContent = allStores[2].beansPerHour[4];
row2El.appendChild(hourlyBeanCell4B);

var hourlyBeanCell5B = document.createElement('td');
hourlyBeanCell5B.textContent = allStores[2].beansPerHour[5];
row2El.appendChild(hourlyBeanCell5B);

var hourlyBeanCell6B = document.createElement('td');
hourlyBeanCell6B.textContent = allStores[2].beansPerHour[6];
row2El.appendChild(hourlyBeanCell6B);

var hourlyBeanCell7B = document.createElement('td');
hourlyBeanCell7B.textContent = allStores[2].beansPerHour[7];
row2El.appendChild(hourlyBeanCell7B);

var hourlyBeanCell8B = document.createElement('td');
hourlyBeanCell8B.textContent = allStores[2].beansPerHour[8];
row2El.appendChild(hourlyBeanCell8B);

var hourlyBeanCell9B = document.createElement('td');
hourlyBeanCell9B.textContent = allStores[2].beansPerHour[9];
row2El.appendChild(hourlyBeanCell9B);

var hourlyBeanCell10B = document.createElement('td');
hourlyBeanCell10B.textContent = allStores[2].beansPerHour[10];
row2El.appendChild(hourlyBeanCell10B);

var hourlyBeanCell11B = document.createElement('td');
hourlyBeanCell11B.textContent = allStores[2].beansPerHour[11];
row2El.appendChild(hourlyBeanCell11B);

var hourlyBeanCell12B = document.createElement('td');
hourlyBeanCell12B.textContent = allStores[2].beansPerHour[12];
row2El.appendChild(hourlyBeanCell12B);

var hourlyBeanCell13B = document.createElement('td');
hourlyBeanCell13B.textContent = allStores[2].beansPerHour[13];
row2El.appendChild(hourlyBeanCell13B);

var hourlyBeanCell14B = document.createElement('td');
hourlyBeanCell14B.textContent = allStores[2].beansPerHour[14];
row2El.appendChild(hourlyBeanCell14B);

var hourlyBeanCell15B = document.createElement('td');
hourlyBeanCell15B.textContent = allStores[2].beansPerHour[15];
row2El.appendChild(hourlyBeanCell15B);

//making the fourth row
var shopesCellC = document.createElement('td');
shopesCellC.textContent = allStores[3].name;//give content to cell
row3El.appendChild(shopesCellC);//append cell to the row

var dailyLocationTotalCellC = document.createElement('td');  //make a cell
dailyLocationTotalCellC.textContent = round((allStores[3].totalBeansPerDay),1);//give content to cell
row3El.appendChild(dailyLocationTotalCellC);  //append cell to the row

var hourlyBeanCell0C = document.createElement('td');
hourlyBeanCell0C.textContent = allStores[3].beansPerHour[0];
row3El.appendChild(hourlyBeanCell0C);

var hourlyBeanCell1C = document.createElement('td');
hourlyBeanCell1C.textContent = allStores[3].beansPerHour[1];
row3El.appendChild(hourlyBeanCell1C);

var hourlyBeanCell2C = document.createElement('td');
hourlyBeanCell2C.textContent = allStores[3].beansPerHour[2];
row3El.appendChild(hourlyBeanCell2C);

var hourlyBeanCell3C = document.createElement('td');
hourlyBeanCell3C.textContent = allStores[3].beansPerHour[3];
row3El.appendChild(hourlyBeanCell3C);

var hourlyBeanCell4C = document.createElement('td');
hourlyBeanCell4C.textContent = allStores[3].beansPerHour[4];
row3El.appendChild(hourlyBeanCell4C);

var hourlyBeanCell5C = document.createElement('td');
hourlyBeanCell5C.textContent = allStores[3].beansPerHour[5];
row3El.appendChild(hourlyBeanCell5C);

var hourlyBeanCell6C = document.createElement('td');
hourlyBeanCell6C.textContent = allStores[3].beansPerHour[6];
row3El.appendChild(hourlyBeanCell6C);

var hourlyBeanCell7C = document.createElement('td');
hourlyBeanCell7C.textContent = allStores[3].beansPerHour[7];
row3El.appendChild(hourlyBeanCell7C);

var hourlyBeanCell8C = document.createElement('td');
hourlyBeanCell8C.textContent = allStores[3].beansPerHour[8];
row3El.appendChild(hourlyBeanCell8C);

var hourlyBeanCell9C = document.createElement('td');
hourlyBeanCell9C.textContent = allStores[3].beansPerHour[9];
row3El.appendChild(hourlyBeanCell9C);

var hourlyBeanCell10C = document.createElement('td');
hourlyBeanCell10C.textContent = allStores[3].beansPerHour[10];
row3El.appendChild(hourlyBeanCell10C);

var hourlyBeanCell11C = document.createElement('td');
hourlyBeanCell11C.textContent = allStores[3].beansPerHour[11];
row3El.appendChild(hourlyBeanCell11C);

var hourlyBeanCell12C = document.createElement('td');
hourlyBeanCell12C.textContent = allStores[3].beansPerHour[12];
row3El.appendChild(hourlyBeanCell12C);

var hourlyBeanCell13C = document.createElement('td');
hourlyBeanCell13C.textContent = allStores[3].beansPerHour[13];
row3El.appendChild(hourlyBeanCell13C);

var hourlyBeanCell14C = document.createElement('td');
hourlyBeanCell14C.textContent = allStores[3].beansPerHour[14];
row3El.appendChild(hourlyBeanCell14C);

var hourlyBeanCell15C = document.createElement('td');
hourlyBeanCell15C.textContent = allStores[3].beansPerHour[15];
row3El.appendChild(hourlyBeanCell15C);


//making the fourth row
var shopesCellD = document.createElement('td');
shopesCellD.textContent = allStores[4].name;//give content to cell
row4El.appendChild(shopesCellD);//append cell to the row

var dailyLocationTotalCellD = document.createElement('td');  //make a cell
dailyLocationTotalCellD.textContent = round((allStores[4].totalBeansPerDay),1);//give content to cell
row4El.appendChild(dailyLocationTotalCellD);  //append cell to the row

var hourlyBeanCell0D = document.createElement('td');
hourlyBeanCell0D.textContent = allStores[4].beansPerHour[0];
row4El.appendChild(hourlyBeanCell0D);

var hourlyBeanCell1D = document.createElement('td');
hourlyBeanCell1D.textContent = allStores[4].beansPerHour[1];
row4El.appendChild(hourlyBeanCell1D);

var hourlyBeanCell2D = document.createElement('td');
hourlyBeanCell2D.textContent = allStores[4].beansPerHour[2];
row4El.appendChild(hourlyBeanCell2D);

var hourlyBeanCell3D = document.createElement('td');
hourlyBeanCell3D.textContent = allStores[4].beansPerHour[3];
row4El.appendChild(hourlyBeanCell3D);

var hourlyBeanCell4D = document.createElement('td');
hourlyBeanCell4D.textContent = allStores[4].beansPerHour[4];
row4El.appendChild(hourlyBeanCell4D);

var hourlyBeanCell5D = document.createElement('td');
hourlyBeanCell5D.textContent = allStores[4].beansPerHour[5];
row4El.appendChild(hourlyBeanCell5D);

var hourlyBeanCell6D = document.createElement('td');
hourlyBeanCell6D.textContent = allStores[4].beansPerHour[6];
row4El.appendChild(hourlyBeanCell6D);

var hourlyBeanCell7D = document.createElement('td');
hourlyBeanCell7D.textContent = allStores[4].beansPerHour[7];
row4El.appendChild(hourlyBeanCell7D);

var hourlyBeanCell8D = document.createElement('td');
hourlyBeanCell8D.textContent = allStores[4].beansPerHour[8];
row4El.appendChild(hourlyBeanCell8D);

var hourlyBeanCell9D = document.createElement('td');
hourlyBeanCell9D.textContent = allStores[4].beansPerHour[9];
row4El.appendChild(hourlyBeanCell9D);

var hourlyBeanCell10D = document.createElement('td');
hourlyBeanCell10D.textContent = allStores[4].beansPerHour[10];
row4El.appendChild(hourlyBeanCell10D);

var hourlyBeanCell11D = document.createElement('td');
hourlyBeanCell11D.textContent = allStores[4].beansPerHour[11];
row4El.appendChild(hourlyBeanCell11D);

var hourlyBeanCell12D = document.createElement('td');
hourlyBeanCell12D.textContent = allStores[4].beansPerHour[12];
row4El.appendChild(hourlyBeanCell12D);

var hourlyBeanCell13D = document.createElement('td');
hourlyBeanCell13D.textContent = allStores[4].beansPerHour[13];
row4El.appendChild(hourlyBeanCell13D);

var hourlyBeanCell14D = document.createElement('td');
hourlyBeanCell14D.textContent = allStores[4].beansPerHour[14];
row4El.appendChild(hourlyBeanCell14D);

var hourlyBeanCell15D = document.createElement('td');
hourlyBeanCell15D.textContent = allStores[4].beansPerHour[15];
row4El.appendChild(hourlyBeanCell15D);


  // making the fifth row
var shopesCellE = document.createElement('td');
shopesCellE.textContent = 'Totals';//give content to cell
row5El.appendChild(shopesCellE);//append cell to the row

var dailyLocationTotalCellE = document.createElement('td');  //make a cell
var total = 0;
for(var i = 0;i < allStores.length;i ++){
  total += allStores[i].totalBeansPerDay;
}
dailyLocationTotalCellE.textContent = round(total,1);//give content to cell
row5El.appendChild(dailyLocationTotalCellE);  //append cell to the row

var hourlyBeanCell0E = document.createElement('td');
var totalindexhour0 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour0 += allStores[i].beansPerHour[0];
}
hourlyBeanCell0E.textContent = round(totalindexhour0,1);
row5El.appendChild(hourlyBeanCell0E);
  //
var hourlyBeanCell1E = document.createElement('td');
var totalindexhour1 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour1 += allStores[i].beansPerHour[1];
}
hourlyBeanCell1E.textContent = round(totalindexhour1,1);
row5El.appendChild(hourlyBeanCell1E);

var hourlyBeanCell2E = document.createElement('td');
var totalindexhour2 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour2 += allStores[i].beansPerHour[2];
}
hourlyBeanCell2E.textContent = round(totalindexhour2,1);
row5El.appendChild(hourlyBeanCell2E);
  //
var hourlyBeanCell3E = document.createElement('td');
var totalindexhour3 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour3 += allStores[i].beansPerHour[3];
}
hourlyBeanCell3E.textContent = round(totalindexhour3,1);
row5El.appendChild(hourlyBeanCell3E);
  //
var hourlyBeanCell4E = document.createElement('td');
var totalindexhour4 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour4 += allStores[i].beansPerHour[4];
}
hourlyBeanCell4E.textContent = round(totalindexhour4,1);
row5El.appendChild(hourlyBeanCell4E);
  //
var hourlyBeanCell5E = document.createElement('td');
var totalindexhour5 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour5 += allStores[i].beansPerHour[5];
}
hourlyBeanCell5E.textContent = round(totalindexhour5,1);
row5El.appendChild(hourlyBeanCell5E);

var hourlyBeanCell6E = document.createElement('td');
var totalindexhour6 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour6 += allStores[i].beansPerHour[6];
}
hourlyBeanCell6E.textContent = round(totalindexhour6,1);
row5El.appendChild(hourlyBeanCell6E);

var hourlyBeanCell7E = document.createElement('td');
var totalindexhour7 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour7 += allStores[i].beansPerHour[7];
}
hourlyBeanCell7E.textContent = round(totalindexhour7,1);
row5El.appendChild(hourlyBeanCell7E);

var hourlyBeanCell8E = document.createElement('td');
var totalindexhour8 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour8 += allStores[i].beansPerHour[8];
}
hourlyBeanCell8E.textContent = round(totalindexhour8,1);
row5El.appendChild(hourlyBeanCell8E);

var hourlyBeanCell9E = document.createElement('td');
var totalindexhour9 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour9 += allStores[i].beansPerHour[9];
}
hourlyBeanCell9E.textContent = round(totalindexhour9,1);
row5El.appendChild(hourlyBeanCell9E);

var hourlyBeanCell10E = document.createElement('td');
var totalindexhour10 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour10 += allStores[i].beansPerHour[10];
}
hourlyBeanCell10E.textContent = round(totalindexhour10,1);
row5El.appendChild(hourlyBeanCell10E);

var hourlyBeanCell11E = document.createElement('td');
var totalindexhour11 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour11 += allStores[i].beansPerHour[11];
}
hourlyBeanCell11E.textContent = round(totalindexhour11,1);
row5El.appendChild(hourlyBeanCell11E);

var hourlyBeanCell12E = document.createElement('td');
var totalindexhour12 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour12 += allStores[i].beansPerHour[12];
}
hourlyBeanCell12E.textContent = round(totalindexhour12,1);
row5El.appendChild(hourlyBeanCell12E);

var hourlyBeanCell13E = document.createElement('td');
var totalindexhour13 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour13 += allStores[i].beansPerHour[13];
}
hourlyBeanCell13E.textContent = round(totalindexhour13,1);
row5El.appendChild(hourlyBeanCell13E);

var hourlyBeanCell14E = document.createElement('td');
var totalindexhour14 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour14 += allStores[i].beansPerHour[14];
}
hourlyBeanCell14E.textContent = round(totalindexhour14,1);
row5El.appendChild(hourlyBeanCell14E);

var hourlyBeanCell15E = document.createElement('td');
var totalindexhour15 = 0;
for(i = 0;i < allStores.length;i ++){
  totalindexhour15 += allStores[i].beansPerHour[15];
}
hourlyBeanCell15E.textContent = round(totalindexhour15,1);
row5El.appendChild(hourlyBeanCell15E);



//Table can be automated here.
tableEl.appendChild(row0El);
tableEl.appendChild(row1El);
tableEl.appendChild(row2El);
tableEl.appendChild(row3El);
tableEl.appendChild(row4El);
tableEl.appendChild(row5El);
document.body.appendChild(tableEl);




















//Making the second table.

var h2BEl = document.createElement('h1');
h2BEl.textContent = 'Baristas Needed By Location Each Day';
document.body.appendChild(h2BEl);

var table2El = document.getElementById('generated-tableB');
var row0BEl = document.createElement('tr');
var row1BEl = document.createElement('tr');
var row2BEl = document.createElement('tr');
var row3BEl = document.createElement('tr');
var row4BEl = document.createElement('tr');
var row5BEl = document.createElement('tr');

  //REPEAT THIS PART
    //make a cell
var bBshopesCell = document.createElement('td');
bBshopesCell.textContent = allStores[0].name;//give content to cell
row0BEl.appendChild(bBshopesCell);//append cell to the row

var bBdailyLocationTotalCell = document.createElement('td');  //make a cell
bBdailyLocationTotalCell.textContent = allStores[0].employeesPerDay;//give content to cell
row0BEl.appendChild(bBdailyLocationTotalCell);  //append cell to the row

var BhourlyBeanCell0 = document.createElement('td');
BhourlyBeanCell0.textContent = allStores[0].employeesPerHour[0];
row0BEl.appendChild(BhourlyBeanCell0);

var BhourlyBeanCell1 = document.createElement('td');
BhourlyBeanCell1.textContent = allStores[0].employeesPerHour[1];
row0BEl.appendChild(BhourlyBeanCell1);

var BhourlyBeanCell2 = document.createElement('td');
BhourlyBeanCell2.textContent = allStores[0].employeesPerHour[2];
row0BEl.appendChild(BhourlyBeanCell2);

var BhourlyBeanCell3 = document.createElement('td');
BhourlyBeanCell3.textContent = allStores[0].employeesPerHour[3];
row0BEl.appendChild(BhourlyBeanCell3);

var BhourlyBeanCell4 = document.createElement('td');
BhourlyBeanCell4.textContent = allStores[0].employeesPerHour[4];
row0BEl.appendChild(BhourlyBeanCell4);

var BhourlyBeanCell5 = document.createElement('td');
BhourlyBeanCell5.textContent = allStores[0].employeesPerHour[5];
row0BEl.appendChild(BhourlyBeanCell5);

var BhourlyBeanCell6 = document.createElement('td');
BhourlyBeanCell6.textContent = allStores[0].employeesPerHour[6];
row0BEl.appendChild(BhourlyBeanCell6);

var BhourlyBeanCell7 = document.createElement('td');
BhourlyBeanCell7.textContent = allStores[0].employeesPerHour[7];
row0BEl.appendChild(BhourlyBeanCell7);

var BhourlyBeanCell8 = document.createElement('td');
BhourlyBeanCell8.textContent = allStores[0].employeesPerHour[8];
row0BEl.appendChild(BhourlyBeanCell8);

var BhourlyBeanCell9 = document.createElement('td');
BhourlyBeanCell9.textContent = allStores[0].employeesPerHour[9];
row0BEl.appendChild(BhourlyBeanCell9);

var BhourlyBeanCell10 = document.createElement('td');
BhourlyBeanCell10.textContent = allStores[0].employeesPerHour[10];
row0BEl.appendChild(BhourlyBeanCell10);

var BhourlyBeanCell11 = document.createElement('td');
BhourlyBeanCell11.textContent = allStores[0].employeesPerHour[11];
row0BEl.appendChild(BhourlyBeanCell11);

var BhourlyBeanCell12 = document.createElement('td');
BhourlyBeanCell12.textContent = allStores[0].employeesPerHour[12];
row0BEl.appendChild(BhourlyBeanCell12);

var BhourlyBeanCell13 = document.createElement('td');
BhourlyBeanCell13.textContent = allStores[0].employeesPerHour[13];
row0BEl.appendChild(BhourlyBeanCell13);

var BhourlyBeanCell14 = document.createElement('td');
BhourlyBeanCell14.textContent = allStores[0].employeesPerHour[14];
row0BEl.appendChild(BhourlyBeanCell14);

var BhourlyBeanCell15 = document.createElement('td');
BhourlyBeanCell15.textContent = allStores[0].employeesPerHour[15];
row0BEl.appendChild(BhourlyBeanCell15);

//making the second row
var bBshopesCell1 = document.createElement('td');
bBshopesCell1.textContent = allStores[1].name;//give content to cell
row1BEl.appendChild(bBshopesCell1);//append cell to the row

var bBdailyLocationTotalCell1 = document.createElement('td');  //make a cell
bBdailyLocationTotalCell1.textContent = round((allStores[1].employeesPerDay),1);//give content to cell
row1BEl.appendChild(bBdailyLocationTotalCell1);  //append cell to the row

var bBhourlyBeanCell0A = document.createElement('td');
bBhourlyBeanCell0A.textContent = allStores[1].employeesPerHour[0];
row1BEl.appendChild(bBhourlyBeanCell0A);

var bBhourlyBeanCell1A = document.createElement('td');
bBhourlyBeanCell1A.textContent = allStores[1].employeesPerHour[1];
row1BEl.appendChild(bBhourlyBeanCell1A);

var bBhourlyBeanCell2A = document.createElement('td');
bBhourlyBeanCell2A.textContent = allStores[1].employeesPerHour[2];
row1BEl.appendChild(bBhourlyBeanCell2A);

var bBhourlyBeanCell3A = document.createElement('td');
bBhourlyBeanCell3A.textContent = allStores[1].employeesPerHour[3];
row1BEl.appendChild(bBhourlyBeanCell3A);

var bBhourlyBeanCell4A = document.createElement('td');
bBhourlyBeanCell4A.textContent = allStores[1].employeesPerHour[4];
row1BEl.appendChild(bBhourlyBeanCell4A);

var bBhourlyBeanCell5A = document.createElement('td');
bBhourlyBeanCell5A.textContent = allStores[1].employeesPerHour[5];
row1BEl.appendChild(bBhourlyBeanCell5A);

var bBhourlyBeanCell6A = document.createElement('td');
bBhourlyBeanCell6A.textContent = allStores[1].employeesPerHour[6];
row1BEl.appendChild(bBhourlyBeanCell6A);

var bBhourlyBeanCell7A = document.createElement('td');
bBhourlyBeanCell7A.textContent = allStores[1].employeesPerHour[7];
row1BEl.appendChild(bBhourlyBeanCell7A);

var bBhourlyBeanCell8A = document.createElement('td');
bBhourlyBeanCell8A.textContent = allStores[1].employeesPerHour[8];
row1BEl.appendChild(bBhourlyBeanCell8A);

var bBhourlyBeanCell9A = document.createElement('td');
bBhourlyBeanCell9A.textContent = allStores[1].employeesPerHour[9];
row1BEl.appendChild(bBhourlyBeanCell9A);

var bBhourlyBeanCell10A = document.createElement('td');
bBhourlyBeanCell10A.textContent = allStores[1].employeesPerHour[10];
row1BEl.appendChild(bBhourlyBeanCell10A);

var bBhourlyBeanCell11A = document.createElement('td');
bBhourlyBeanCell11A.textContent = allStores[1].employeesPerHour[11];
row1BEl.appendChild(bBhourlyBeanCell11A);

var bBhourlyBeanCell12A = document.createElement('td');
bBhourlyBeanCell12A.textContent = allStores[1].employeesPerHour[12];
row1BEl.appendChild(bBhourlyBeanCell12A);

var bBhourlyBeanCell13A = document.createElement('td');
bBhourlyBeanCell13A.textContent = allStores[1].employeesPerHour[13];
row1BEl.appendChild(bBhourlyBeanCell13A);

var bBhourlyBeanCell14A = document.createElement('td');
bBhourlyBeanCell14A.textContent = allStores[1].employeesPerHour[14];
row1BEl.appendChild(bBhourlyBeanCell14A);

var bBhourlyBeanCell15A = document.createElement('td');
bBhourlyBeanCell15A.textContent = allStores[1].employeesPerHour[15];
row1BEl.appendChild(bBhourlyBeanCell15A);

//making the third row
var bBshopesCellB = document.createElement('td');
bBshopesCellB.textContent = allStores[2].name;//give content to cell
row2BEl.appendChild(bBshopesCellB);//append cell to the row

var bBdailyLocationTotalCellB = document.createElement('td');  //make a cell
bBdailyLocationTotalCellB.textContent = round((allStores[2].employeesPerDay),1);//give content to cell
row2BEl.appendChild(bBdailyLocationTotalCellB);  //append cell to the row

var bBhourlyBeanCell0B = document.createElement('td');
bBhourlyBeanCell0B.textContent = allStores[2].employeesPerHour[0];
row2BEl.appendChild(bBhourlyBeanCell0B);

var bBhourlyBeanCell1B = document.createElement('td');
bBhourlyBeanCell1B.textContent = allStores[2].employeesPerHour[1];
row2BEl.appendChild(bBhourlyBeanCell1B);

var bBhourlyBeanCell2B = document.createElement('td');
bBhourlyBeanCell2B.textContent = allStores[2].employeesPerHour[2];
row2BEl.appendChild(bBhourlyBeanCell2B);

var bBhourlyBeanCell3B = document.createElement('td');
bBhourlyBeanCell3B.textContent = allStores[2].employeesPerHour[3];
row2BEl.appendChild(bBhourlyBeanCell3B);

var bBhourlyBeanCell4B = document.createElement('td');
bBhourlyBeanCell4B.textContent = allStores[2].employeesPerHour[4];
row2BEl.appendChild(bBhourlyBeanCell4B);

var bBhourlyBeanCell5B = document.createElement('td');
bBhourlyBeanCell5B.textContent = allStores[2].employeesPerHour[5];
row2BEl.appendChild(bBhourlyBeanCell5B);

var bBhourlyBeanCell6B = document.createElement('td');
bBhourlyBeanCell6B.textContent = allStores[2].employeesPerHour[6];
row2BEl.appendChild(bBhourlyBeanCell6B);

var bBhourlyBeanCell7B = document.createElement('td');
bBhourlyBeanCell7B.textContent = allStores[2].employeesPerHour[7];
row2BEl.appendChild(bBhourlyBeanCell7B);

var bBhourlyBeanCell8B = document.createElement('td');
bBhourlyBeanCell8B.textContent = allStores[2].employeesPerHour[8];
row2BEl.appendChild(bBhourlyBeanCell8B);

var bBhourlyBeanCell9B = document.createElement('td');
bBhourlyBeanCell9B.textContent = allStores[2].employeesPerHour[9];
row2BEl.appendChild(bBhourlyBeanCell9B);

var bBhourlyBeanCell10B = document.createElement('td');
bBhourlyBeanCell10B.textContent = allStores[2].employeesPerHour[10];
row2BEl.appendChild(bBhourlyBeanCell10B);

var bBhourlyBeanCell11B = document.createElement('td');
bBhourlyBeanCell11B.textContent = allStores[2].employeesPerHour[11];
row2BEl.appendChild(bBhourlyBeanCell11B);

var bBhourlyBeanCell12B = document.createElement('td');
bBhourlyBeanCell12B.textContent = allStores[2].employeesPerHour[12];
row2BEl.appendChild(bBhourlyBeanCell12B);

var bBhourlyBeanCell13B = document.createElement('td');
bBhourlyBeanCell13B.textContent = allStores[2].employeesPerHour[13];
row2BEl.appendChild(bBhourlyBeanCell13B);

var bBhourlyBeanCell14B = document.createElement('td');
bBhourlyBeanCell14B.textContent = allStores[2].employeesPerHour[14];
row2BEl.appendChild(bBhourlyBeanCell14B);

var bBhourlyBeanCell15B = document.createElement('td');
bBhourlyBeanCell15B.textContent = allStores[2].employeesPerHour[15];
row2BEl.appendChild(bBhourlyBeanCell15B);

//making the fourth row
var bBshopesCellC = document.createElement('td');
bBshopesCellC.textContent = allStores[3].name;//give content to cell
row3BEl.appendChild(bBshopesCellC);//append cell to the row

var bBdailyLocationTotalCellC = document.createElement('td');  //make a cell
bBdailyLocationTotalCellC.textContent = round((allStores[3].employeesPerDay),1);//give content to cell
row3BEl.appendChild(bBdailyLocationTotalCellC);  //append cell to the row

var bBhourlyBeanCell0C = document.createElement('td');
bBhourlyBeanCell0C.textContent = allStores[3].employeesPerHour[0];
row3BEl.appendChild(bBhourlyBeanCell0C);

var bBhourlyBeanCell1C = document.createElement('td');
bBhourlyBeanCell1C.textContent = allStores[3].employeesPerHour[1];
row3BEl.appendChild(bBhourlyBeanCell1C);

var bBhourlyBeanCell2C = document.createElement('td');
bBhourlyBeanCell2C.textContent = allStores[3].employeesPerHour[2];
row3BEl.appendChild(bBhourlyBeanCell2C);

var bBhourlyBeanCell3C = document.createElement('td');
bBhourlyBeanCell3C.textContent = allStores[3].employeesPerHour[3];
row3BEl.appendChild(bBhourlyBeanCell3C);

var bBhourlyBeanCell4C = document.createElement('td');
bBhourlyBeanCell4C.textContent = allStores[3].employeesPerHour[4];
row3BEl.appendChild(bBhourlyBeanCell4C);

var bBhourlyBeanCell5C = document.createElement('td');
bBhourlyBeanCell5C.textContent = allStores[3].employeesPerHour[5];
row3BEl.appendChild(bBhourlyBeanCell5C);

var bBhourlyBeanCell6C = document.createElement('td');
bBhourlyBeanCell6C.textContent = allStores[3].employeesPerHour[6];
row3BEl.appendChild(bBhourlyBeanCell6C);

var bBhourlyBeanCell7C = document.createElement('td');
bBhourlyBeanCell7C.textContent = allStores[3].employeesPerHour[7];
row3BEl.appendChild(bBhourlyBeanCell7C);

var bBhourlyBeanCell8C = document.createElement('td');
bBhourlyBeanCell8C.textContent = allStores[3].employeesPerHour[8];
row3BEl.appendChild(bBhourlyBeanCell8C);

var bBhourlyBeanCell9C = document.createElement('td');
bBhourlyBeanCell9C.textContent = allStores[3].employeesPerHour[9];
row3BEl.appendChild(bBhourlyBeanCell9C);

var bBhourlyBeanCell10C = document.createElement('td');
bBhourlyBeanCell10C.textContent = allStores[3].employeesPerHour[10];
row3BEl.appendChild(bBhourlyBeanCell10C);

var bBhourlyBeanCell11C = document.createElement('td');
bBhourlyBeanCell11C.textContent = allStores[3].employeesPerHour[11];
row3BEl.appendChild(bBhourlyBeanCell11C);

var bBhourlyBeanCell12C = document.createElement('td');
bBhourlyBeanCell12C.textContent = allStores[3].employeesPerHour[12];
row3BEl.appendChild(bBhourlyBeanCell12C);

var bBhourlyBeanCell13C = document.createElement('td');
bBhourlyBeanCell13C.textContent = allStores[3].employeesPerHour[13];
row3BEl.appendChild(bBhourlyBeanCell13C);

var bBhourlyBeanCell14C = document.createElement('td');
bBhourlyBeanCell14C.textContent = allStores[3].employeesPerHour[14];
row3BEl.appendChild(bBhourlyBeanCell14C);

var bBhourlyBeanCell15C = document.createElement('td');
bBhourlyBeanCell15C.textContent = allStores[3].employeesPerHour[15];
row3BEl.appendChild(bBhourlyBeanCell15C);


//making the fourth row
var bBshopesCellD = document.createElement('td');
bBshopesCellD.textContent = allStores[4].name;//give content to cell
row4BEl.appendChild(bBshopesCellD);//append cell to the row

var bBdailyLocationTotalCellD = document.createElement('td');  //make a cell
bBdailyLocationTotalCellD.textContent = round((allStores[4].employeesPerDay),1);//give content to cell
row4BEl.appendChild(bBdailyLocationTotalCellD);  //append cell to the row

var bBhourlyBeanCell0D = document.createElement('td');
bBhourlyBeanCell0D.textContent = allStores[4].employeesPerHour[0];
row4BEl.appendChild(bBhourlyBeanCell0D);

var bBhourlyBeanCell1D = document.createElement('td');
bBhourlyBeanCell1D.textContent = allStores[4].employeesPerHour[1];
row4BEl.appendChild(bBhourlyBeanCell1D);

var bBhourlyBeanCell2D = document.createElement('td');
bBhourlyBeanCell2D.textContent = allStores[4].employeesPerHour[2];
row4BEl.appendChild(bBhourlyBeanCell2D);

var bBhourlyBeanCell3D = document.createElement('td');
bBhourlyBeanCell3D.textContent = allStores[4].employeesPerHour[3];
row4BEl.appendChild(bBhourlyBeanCell3D);

var bBhourlyBeanCell4D = document.createElement('td');
bBhourlyBeanCell4D.textContent = allStores[4].employeesPerHour[4];
row4BEl.appendChild(bBhourlyBeanCell4D);

var bBhourlyBeanCell5D = document.createElement('td');
bBhourlyBeanCell5D.textContent = allStores[4].employeesPerHour[5];
row4BEl.appendChild(bBhourlyBeanCell5D);

var bBhourlyBeanCell6D = document.createElement('td');
bBhourlyBeanCell6D.textContent = allStores[4].employeesPerHour[6];
row4BEl.appendChild(bBhourlyBeanCell6D);

var bBhourlyBeanCell7D = document.createElement('td');
bBhourlyBeanCell7D.textContent = allStores[4].employeesPerHour[7];
row4BEl.appendChild(bBhourlyBeanCell7D);

var bBhourlyBeanCell8D = document.createElement('td');
bBhourlyBeanCell8D.textContent = allStores[4].employeesPerHour[8];
row4BEl.appendChild(bBhourlyBeanCell8D);

var bBhourlyBeanCell9D = document.createElement('td');
bBhourlyBeanCell9D.textContent = allStores[4].employeesPerHour[9];
row4BEl.appendChild(bBhourlyBeanCell9D);

var bBhourlyBeanCell10D = document.createElement('td');
bBhourlyBeanCell10D.textContent = allStores[4].employeesPerHour[10];
row4BEl.appendChild(bBhourlyBeanCell10D);

var bBhourlyBeanCell11D = document.createElement('td');
bBhourlyBeanCell11D.textContent = allStores[4].employeesPerHour[11];
row4BEl.appendChild(bBhourlyBeanCell11D);

var bBhourlyBeanCell12D = document.createElement('td');
bBhourlyBeanCell12D.textContent = allStores[4].employeesPerHour[12];
row4BEl.appendChild(bBhourlyBeanCell12D);

var bBhourlyBeanCell13D = document.createElement('td');
bBhourlyBeanCell13D.textContent = allStores[4].employeesPerHour[13];
row4BEl.appendChild(bBhourlyBeanCell13D);

var bBhourlyBeanCell14D = document.createElement('td');
bBhourlyBeanCell14D.textContent = allStores[4].employeesPerHour[14];
row4BEl.appendChild(bBhourlyBeanCell14D);

var bBhourlyBeanCell15D = document.createElement('td');
bBhourlyBeanCell15D.textContent = allStores[4].employeesPerHour[15];
row4BEl.appendChild(bBhourlyBeanCell15D);


  // making the fifth row
var bBshopesCellE = document.createElement('td');
bBshopesCellE.textContent = 'Totals';//give content to cell
row5BEl.appendChild(bBshopesCellE);//append cell to the row

var bBdailyLocationTotalCellE = document.createElement('td');  //make a cell
var totalb = 0;
for(i = 0;i < allStores.length;i ++){
  totalb += allStores[i].employeesPerDay;
}
bBdailyLocationTotalCellE.textContent = round(totalb,1);//give content to cell
row5BEl.appendChild(bBdailyLocationTotalCellE);  //append cell to the row

var bBhourlyBeanCell0E = document.createElement('td');
var totalbindexhour0 = 0;
for(i = 0;i < allStores.length;i ++){
  totalbindexhour0 += allStores[i].employeesPerHour[0];
}
bBhourlyBeanCell0E.textContent = round(totalbindexhour0,1);
row5BEl.appendChild(bBhourlyBeanCell0E);
  //
var bBhourlyBeanCell1E = document.createElement('td');
var totalBindexhour1 = 0;
for(i = 0;i < allStores.length;i ++){
  totalBindexhour1 += allStores[i].employeesPerHour[1];
}
bBhourlyBeanCell1E.textContent = round(totalBindexhour1,1);
row5BEl.appendChild(bBhourlyBeanCell1E);

var bBhourlyBeanCell2E = document.createElement('td');
var totalbindexhour2 = 0;
for(i = 0;i < allStores.length;i ++){
  totalbindexhour2 += allStores[i].employeesPerHour[2];
}
bBhourlyBeanCell2E.textContent = round(totalbindexhour2,1);
row5BEl.appendChild(bBhourlyBeanCell2E);
  //
var bBhourlyBeanCell3E = document.createElement('td');
var totalbindexhour3 = 0;
for(i = 0;i < allStores.length;i ++){
  totalbindexhour3 += allStores[i].employeesPerHour[3];
}
bBhourlyBeanCell3E.textContent = round(totalbindexhour3,1);
row5BEl.appendChild(bBhourlyBeanCell3E);
  //
var bBhourlyBeanCell4E = document.createElement('td');
var totalbindexhour4 = 0;
for(i = 0;i < allStores.length;i ++){
  totalbindexhour4 += allStores[i].employeesPerHour[4];
}
bBhourlyBeanCell4E.textContent = round(totalbindexhour4,1);
row5BEl.appendChild(bBhourlyBeanCell4E);
  //
var bBhourlyBeanCell5E = document.createElement('td');
var totalbindexhour5 = 0;
for(i = 0;i < allStores.length;i ++){
  totalbindexhour5 += allStores[i].employeesPerHour[5];
}
bBhourlyBeanCell5E.textContent = round(totalbindexhour5,1);
row5BEl.appendChild(bBhourlyBeanCell5E);

var bBhourlyBeanCell6E = document.createElement('td');
var totalbindexhour6 = 0;
for(i = 0;i < allStores.length;i ++){
  totalbindexhour6 += allStores[i].employeesPerHour[6];
}
bBhourlyBeanCell6E.textContent = round(totalbindexhour6,1);
row5BEl.appendChild(bBhourlyBeanCell6E);

var bBhourlyBeanCell7E = document.createElement('td');
var totalbindexhour7 = 0;
for(i = 0;i < allStores.length;i ++){
  totalbindexhour7 += allStores[i].employeesPerHour[7];
}
bBhourlyBeanCell7E.textContent = round(totalbindexhour7,1);
row5BEl.appendChild(bBhourlyBeanCell7E);

var bBhourlyBeanCell8E = document.createElement('td');
var totalbindexhour8 = 0;
for(i = 0;i < allStores.length;i ++){
  totalbindexhour8 += allStores[i].employeesPerHour[8];
}
bBhourlyBeanCell8E.textContent = round(totalbindexhour8,1);
row5BEl.appendChild(bBhourlyBeanCell8E);

var bBhourlyBeanCell9E = document.createElement('td');
var totaldindexhour9 = 0;
for(i = 0;i < allStores.length;i ++){
  totaldindexhour9 += allStores[i].employeesPerHour[9];
}
bBhourlyBeanCell9E.textContent = round(totaldindexhour9,1);
row5BEl.appendChild(bBhourlyBeanCell9E);

var bBhourlyBeanCell10E = document.createElement('td');
var totalbindexhour10 = 0;
for(i = 0;i < allStores.length;i ++){
  totalbindexhour10 += allStores[i].employeesPerHour[10];
}
bBhourlyBeanCell10E.textContent = round(totalbindexhour10,1);
row5BEl.appendChild(bBhourlyBeanCell10E);

var bBhourlyBeanCell11E = document.createElement('td');
var totalbindexhour11 = 0;
for(i = 0;i < allStores.length;i ++){
  totalbindexhour11 += allStores[i].employeesPerHour[11];
}
bBhourlyBeanCell11E.textContent = round(totalbindexhour11,1);
row5BEl.appendChild(bBhourlyBeanCell11E);

var bBhourlyBeanCell12E = document.createElement('td');
var totalbindexhour12 = 0;
for(i = 0;i < allStores.length;i ++){
  totalbindexhour12 += allStores[i].employeesPerHour[12];
}
bBhourlyBeanCell12E.textContent = round(totalbindexhour12,1);
row5BEl.appendChild(bBhourlyBeanCell12E);

var bBhourlyBeanCell13E = document.createElement('td');
var totalbindexhour13 = 0;
for(i = 0;i < allStores.length;i ++){
  totalbindexhour13 += allStores[i].employeesPerHour[13];
}
bBhourlyBeanCell13E.textContent = round(totalbindexhour13,1);
row5BEl.appendChild(bBhourlyBeanCell13E);

var bBhourlyBeanCell14E = document.createElement('td');
var totalBindexhour14 = 0;
for(i = 0;i < allStores.length;i ++){
  totalBindexhour14 += allStores[i].employeesPerHour[14];
}
bBhourlyBeanCell14E.textContent = round(totalBindexhour14,1);
row5BEl.appendChild(bBhourlyBeanCell14E);

var bBhourlyBeanCell15E = document.createElement('td');
var totalBindexhour15 = 0;
for(i = 0;i < allStores.length;i ++){
  totalBindexhour15 += allStores[i].employeesPerHour[15];
}
bBhourlyBeanCell15E.textContent = round(totalBindexhour15,1);
row5BEl.appendChild(bBhourlyBeanCell15E);



//Table can be automated here.
table2El.appendChild(row0BEl);
table2El.appendChild(row1BEl);
table2El.appendChild(row2BEl);
table2El.appendChild(row3BEl);
table2El.appendChild(row4BEl);
table2El.appendChild(row5BEl);
document.body.appendChild(table2El);
