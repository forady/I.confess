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
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photos[currentPhotoIndex].style.display = 'block';

    var button = document.getElementById("noButton");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var maxX = windowWidth - button.offsetWidth;
    var maxY = windowHeight - button.offsetHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function closeOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
}

window.onload = function() {
    var overlay = document.getElementById('overlay');
    overlay.classList.add('active');
};
