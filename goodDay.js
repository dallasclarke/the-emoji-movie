const days = require('./day.js');

let i = days.length -1;
console.log('A Good Day!')

const goodDay = setInterval (() => {
    console.log(days[i-- % days.length]);

    if (i === -1) {
        clearInterval(goodDay);
        console.clear();
    }
}



, 1000)