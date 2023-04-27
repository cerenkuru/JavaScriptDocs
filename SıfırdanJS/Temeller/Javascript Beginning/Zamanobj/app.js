let value;

const now = new Date(); // şu an
// console.log(now);

const date1 = new Date("7-16-2001 10:20:00");
const date2 = new Date("July 16 2001");
const date3 = new Date("7/16/2001");

value = date1;

// value = date1.getMonth();
// value = date1.getDate();
value = date1.getDay();

console.log(value);
