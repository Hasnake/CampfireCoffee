'use strict';
// var image1El = document.createElement('IMG');
// image1El.textContent = 'Public facing Page';
// image1El.src = 'assets/campfire-coffee.jpg';
// document.body.appendChild(image1El);
var h1El = document.createElement('h1');
h1El.textContent = 'Public Facing Page';
document.body.appendChild(h1El);
var pEl = document.createElement('p');
pEl.textContent = 'This is the public page for the camfire coffee project.';
document.body.appendChild(pEl);



var storeLocations = ['Pike Place Market','Capitol Hill','Seattle Public Library','South Lake Union','SeaTac Airport'];
// var storeLocationsEl = document.getElementById('storeLocations');
var olEl = document.createElement('ol');
olEl.textContent = ('Store Locations' );
document.body.appendChild(olEl);
for (var i = 0;i < storeLocations.length;i++){
  var liEl = document.createElement('li');
  liEl.textContent = storeLocations[i] ;
  olEl.appendChild(liEl);
}
var tEl = document.createElement('p');
tEl.textContent = 'Store working hours are from 6am to 9pm';
document.body.appendChild(tEl);

var t2El = document.createElement('p');
t2El.textContent = 'The pictures shows where and how the campfire coffee is coming';
document.body.appendChild(t2El);

var ImgEl = document.createElement('Img');
ImgEl.setAttribute('src', 'assets/campfire.jpg');
ImgEl.setAttribute('width', '400');
document.body.appendChild(ImgEl);
var Img1El = document.createElement('Img');
Img1El.setAttribute('src', 'assets/campfire-coffee.jpg');
ImgEl.setAttribute('width', '400');
document.body.appendChild(Img1El);
var h2El = document.createElement('h1');
h2El.textContent = 'Internal page';
document.body.appendChild(h2El);

var a = document.createElement('a');
var linkText = document.createTextNode('Internal page');
a.appendChild(linkText);
a.title = 'Internal page' ;
a.href = 'pages/data.html';
document.body.appendChild(a);
