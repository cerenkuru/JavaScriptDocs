// 

// function square(x) {

//     // console.log(x*x);
//     return x*x;
// }

// function cube(x) {
//     // console.log(x*x*x);
//     return x*x*x;
// }

// let a = square(12);

// a = cube(a);

// let a = cube(square(12));

// console.log(a);

// function expression

// const merhaba = function(){
//     console.log("Merhaba");
// }

// Immediately Invoked Function Expression (IIFE)

// (function(name){
//     console.log("Merhaba " + name)
// })("Murat");

// const database = {
//     host: "localhost",
//     add : function(){
//         console.log("Eklendi");
//     },
//     get: function(){
//         console.log("Elde edildi");
//     },
//     update: function(id){
//         console.log(`ID: ${id} Güncellendi`);
//     },
//     delete: function(id){
//         console.log(`ID: ${id} Silindi`);
//     }
// }

// console.log(database.host);

// DÖNGüLER 
//  let i = 0;
// do {
//     console.log(i);
//     i++;

    
// }while(i<10);



// const langs = ["java","css","python"];

// let index = 0;

// while(index < langs.length){
//     console.log(langs[index]);
//     index++;
// }

// for(let index = 0; index<langs.length; index++){
//     console.log(langs[index]);
// }

// DEĞİŞİKKKKKKKKKKKKKK 
// langs.forEach(function(lang, index){
//     console.log(lang,index);
// });

// const users = [
//     {name: "crn", age: 21},
//     {name: "kry", age: 20},
//     {name: "ego", age: 20},
// ];

// const names = users.map(function(user) {

//     return user.name;
// });



// const ages = users.map(function(user){
//     return user.age;

// });
// console.log(names);
// console.log(ages);

// const user = {
//     name: "Ceren",
//     age: 21,
// }

// for(let key in user){
//     console.log(key,user[key]);
// }

//  WINDOW

// console.log(this.alert("merhaba"));
// console.log(window); // Sorgulama,

// alert("merhaba");

// const cevap = confirm("Emin misiniz");
// console.log(cevap);

// if (cevap) {
//     console.log("Silin gitsin");
// }
// else {
//     console.log("Silmeyin")
// }

// CONFIRMMMM

// if(confirm("Emin misiniz?")) {
//     console.log("silin gitsin");
// }
// else {
//     console.log("silmeyin")
// }

// const cevap = prompt("2+2 = ?");
// if(cevap == "4"){
//     console.log("doğru")
// }
// else{
//     console.log("Yanlış")
// }
// console.log(cevap);
// console.log(typeof cevap);

// let value;
// value = window.location;
// value = window.location.host;
// value = window.location.hostname;
// value = window.location.port;
// value = window.location.href;

// value.window.outerHeight;
// value.window.innerHeight;
// value.window.outerWidth;

// value = window.scrollX;

// console.log(value);
// // window.location.reload()
// if (confirm("sayfa yenilensin mi?")) {

//     window.location.reload();
//     console.log("ssayfa yenilendi");
// }
// else {
//     console.lof("Sayfa yenilenmedi");
// }
