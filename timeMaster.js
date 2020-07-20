const days = require ('./day.js');

const userInput = process.argv[2];
let i = 0;


const timeMaster = setInterval(() => {
    console.log(days[i++ % days.length]);

    if (i === days.length) {
        clearInterval(timeMaster);
        
    }
}


, userInput);




