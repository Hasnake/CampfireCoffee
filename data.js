'use strict';
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

function makeRow() {
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
  hourlyBeanCell1E.textContent = round(totalindexhour0,1);
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
    totalindexhour9 += allStores[i].beansPerHour[8];
  }
  hourlyBeanCell9E.textContent = round(totalindexhour9,1);
  row5El.appendChild(hourlyBeanCell9E);

  var hourlyBeanCell10E = document.createElement('td');
  var totalindexhour10 = 0;
  for(i = 0;i < allStores.length;i ++){
    totalindexhour10 += allStores[i].beansPerHour[8];
  }
  hourlyBeanCell10E.textContent = round(totalindexhour10,1);
  row5El.appendChild(hourlyBeanCell10E);

  var hourlyBeanCell11E = document.createElement('td');
  var totalindexhour11 = 0;
  for(i = 0;i < allStores.length;i ++){
    totalindexhour11 += allStores[i].beansPerHour[8];
  }
  hourlyBeanCell11E.textContent = round(totalindexhour11,1);
  row5El.appendChild(hourlyBeanCell11E);

  var hourlyBeanCell12E = document.createElement('td');
  var totalindexhour12 = 0;
  for(i = 0;i < allStores.length;i ++){
    totalindexhour12 += allStores[i].beansPerHour[8];
  }
  hourlyBeanCell12E.textContent = round(totalindexhour12,1);
  row5El.appendChild(hourlyBeanCell12E);

  var hourlyBeanCell13E = document.createElement('td');
  var totalindexhour13 = 0;
  for(i = 0;i < allStores.length;i ++){
    totalindexhour13 += allStores[i].beansPerHour[8];
  }
  hourlyBeanCell13E.textContent = round(totalindexhour13,1);
  row5El.appendChild(hourlyBeanCell13E);

  var hourlyBeanCell14E = document.createElement('td');
  var totalindexhour14 = 0;
  for(i = 0;i < allStores.length;i ++){
    totalindexhour14 += allStores[i].beansPerHour[15];
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

}

function makeTable() {
  for (var index in allStores) {

    makeRow(allStores[index]);
  }
}

makeTable();
