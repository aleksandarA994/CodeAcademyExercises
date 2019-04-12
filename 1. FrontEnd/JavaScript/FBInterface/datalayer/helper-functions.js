window.getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.calculatePercent = function(percent) {
    return (100 - percent) <= getRandomNumber(0, 100);
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

randomDate(new Date(2012, 0, 1), new Date())
