'use strict';
var h1El = document.createElement('h1');
h1El.textContent = 'Public facing Page';
document.body.appendChild(h1El);
var t = document.createTextNode('This is the public page for the camfire coffee project.');
document.body.appendChild(t);
var storeLocations = ['Pike Place Market','Capitol Hill','Seattle Public Library','South Lake Union','SeaTac Airport'];
var storeLocationsEl = document.getElementById('storeLocations');
var ulEl = document.createElement('ul');
for (var i = 0;i < storeLocations.length;i++){
  var liEl = document.createElement('li');
  liEl.textContent = storeLocations[i];
  ulEl.appendChild(liEl);
}
storeLocationsEl.appendChild(ulEl);
