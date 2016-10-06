'use strict';
// var image1El = document.createElement('IMG');
// image1El.textContent = 'Public facing Page';
// image1El.src = 'assets/campfire-coffee.jpg';
// document.body.appendChild(image1El);
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
a.href = 'pages/data.html';
document.body.appendChild(a);

var storeLocations = ['Pike Place Market','Capitol Hill','Seattle Public Library','South Lake Union','SeaTac Airport'];
var storeLocationsEl = document.getElementById('storeLocations');
var ulEl = document.createElement('ul');
ulEl.textContent = 'Store Locations' + ' ---' + '        Working Hour:6am to 9pm';
document.body.appendChild(ulEl);
for (var i = 0;i < storeLocations.length;i++){
  var liEl = document.createElement('li');
  liEl.textContent = storeLocations[i] ;
  ulEl.appendChild(liEl);
}
storeLocationsEl.appendChild(ulEl);
document.body.appendChild(storeLocationsEl);
