const adultM = document.querySelector('.adult .minus');
const adultP = document.querySelector('.adult .plus');
const childM = document.querySelector('.children .minus');
const childP = document.querySelector('.children .plus');
const adultV = document.querySelector('.adult input');
const childV = document.querySelector('.children input');
const search = document.getElementById('search');
const myModal = document.querySelector('.modal-content');
let adult = 2;
let child = 0;

search.addEventListener('click', () => {
    myModal.classList.toggle('modal-show');
});

adultM.addEventListener('click', function () {
    adult--;
    if (adult === -1) {
        adult = 0;
    }
    adultV.value = adult;
});

adultP.addEventListener('click', function () {
     adult++;
     if (adult === 10) {
         adult = 9;
     }
     adultV.value = adult;
});

childM.addEventListener('click', function () {
    child--;
    if (child === -1) {
        child = 0;
    }
    childV.value = child;
});

childP.addEventListener('click', function () {
     child++;
     if (child === 10) {
         child = 9;
     }
     childV.value = child;
});

$('.icon-calendar').click( function() {
    $('#date-in').datepicker();
    $('#date-out').datepicker();
});
