function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://www.randomkittengenerator.com/cats/rotator.php" 
    div.appendChild(image);
}