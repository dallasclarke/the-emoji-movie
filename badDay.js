


const days = require('./day.js');

let i = 0;
console.log('A bad day!')

const aBadDay = setInterval (() => {
    
    console.log(days[i++ % days.length]);

    if (i === days.length) {
        clearInterval(aBadDay);
        console.clear();
    }
}
, 1000);




