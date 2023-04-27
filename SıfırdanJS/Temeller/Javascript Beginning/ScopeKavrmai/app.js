// Scope kavramı

//global kavramı
// function(a){
//     //functin scope
// }

// if(){
//     //block scope
// }

var value1 = 10;
let value2 = 20;
const value3 = 30;

// function func() {
// var value1 = 40;
// let value2 = 50;
// const value3 = 60;
// console.log(value1,value2,value3);    
// }
// func ();

// if (true){
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     // console.log(a,b,c);
// }
// console.log(a); // dışarıda var olur
// console.log(b); // dışarıda var olmazlar
// console.log(c;) // dışarıda var olmazlar
// console.log(value1,value2,value3);   


if (true){
    var value1 = 40; // globaldeki var değişir
    let value2 = 50; // block scopea özgü, globaldeki geçerli olur
    const value3 = 60; // "
    console.log(value1,value2,value3);
}
console.log(value1,value2,value3); 

