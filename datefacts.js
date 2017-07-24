const moment = require('moment');
moment().format();
const chalk = require('chalk');

let facts = {day : moment().format('dddd'), dateAndTime : moment().format('MMMM Do YYYY, h:mm:ss a'), dayOfYear : moment().format('DDD'),    };

var startDay = moment().startOf('day');
var currentTime = moment();

var secondsInDay = currentTime.diff(startDay, 'seconds');


if (moment().isDST() === true){
  daylightSavings = "It " + chalk.yellow("is") + " during daylight savings"
}else{
  daylightSavings = "It " + chalk.red("is not") + " daylight savings"
};

if (moment().isLeapYear() === true){
  leapYear = "It "+ chalk.blue("is")+ " a leap year"
}else{
  leapYear = "It "+ chalk.red("is not") +" a leap year"
};

function factsAboutToday(){
  console.log("Today is "+ chalk.cyan(`${facts.day}, ${facts.dateAndTime}`));
  console.log("Today is the "+ chalk.white(`${facts.dayOfYear}`) +" day of the year");
  console.log("It is " + chalk.magenta(`${secondsInDay}`)+" seconds into the day");
  console.log(`${daylightSavings}`);
  console.log(`${leapYear}`);

}
return factsAboutToday();
