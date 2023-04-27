let value;


value = String(123);
value = String(true);
value = String(false);
value = String(function() {console.log()});
value = String([1,2,3,4])

value = (10).toString();

// Sayıya çevirme


value = Number("123");
value = Number(null);
value = Number(undefined);
value = Number("Hello World");
value = Number(function(){console.log()});
value = Number([1,2,3,4,5]);
value = parseFloat("3.14");


// const a = "Hello" + 34;
const a = Number("54") + 34;
console.log(a);
console.log(typeof a);



console.log(value);
console.log(typeof value);