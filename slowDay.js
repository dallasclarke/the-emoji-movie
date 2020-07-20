
const days = require('./day.js');

let i = 0;
console.log('A slooow day!');

const slowDay = setInterval(() => {

    console.log(days[i++ % days.length]);

    if (i === days.length) {
        clearInterval(slowDay);
        console.clear();
    }
}



, 3000)