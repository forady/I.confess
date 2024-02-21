// script.js

document.getElementById('yesButton').addEventListener('click', function() {
    var newDesign = document.getElementById('newDesign');
    newDesign.style.display = 'block';
});

document.getElementById('open-overlay1').addEventListener('click', function() {
    document.getElementById('overlay1').style.display = 'flex';
});

document.getElementById('overlay1-button').addEventListener('click', function() {
    document.getElementById('overlay1').style.display = 'none';
});

var currentPhotoIndex = 0;
var photos = document.getElementsByClassName('photo');

function moveButton() {
    photos[currentPhotoIndex].style.display = 'none';
    currentPhotoIndex = (
