document.addEventListener('DOMContentLoaded', function () {
    let sky = document.getElementById('sky');
    let mainComputer = document.getElementById('mainComputer');
    let cloud = document.getElementById('cloud');
    let headText = document.getElementById('headText');
    let forest = document.getElementById('forest');

    window.addEventListener('scroll', function () {
        let value = window.scrollY;
        cloud.style.left = value * 0.35 + 'px';
        sky.style.top =  value * 0.85 + 'px';
        mainComputer.style.top = value * 0.85 + 'px';
        headText.style.marginTop = value * 0.85 + 'px';

    });
});
