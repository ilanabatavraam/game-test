import _ from 'lodash';
import "./index.scss";

const changeColorBnt = document.querySelector('.projects__btn');
const body = document.querySelector('.page');

changeColorBnt.addEventListener('click', function() {
    
    body.style.backgroudnd = 'rgb(' + Math.round(Math.random() + Math.random() * Math.random()) + Math.round(Math.random()) + ',' +  Math.round(Math.random())  +Math.round(Math.random()) + ',' + Math.round(Math.random()) +  Math.round(Math.random()) + ');';
    console.log(body.style.backgroudnd);
});