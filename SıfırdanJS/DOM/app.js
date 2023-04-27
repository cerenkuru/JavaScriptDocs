// Window Object
// let value;

// value = document;
// value = document.all;
// value = document.all.length;
// value = document.all[0];
// value = document.all[document.all.length-1];

// const elements = document.all; //html collection
// for(let i = 0; i < elements.length;i++) {
//     console.log(elements[i]);
// }

// elements.forEach(function(element){
//     console.log(element);
    
// });
// const collections = Array.from(document.all);
// // console.log(typeof collections);
// collections.forEach(function(collection){
// console.log(collection);

// })

// 

// value = document.all[8]; //value = document.body;
// value = document.location;
// value = document.location.hostname;
// value = document.location.portal;
// value = document.URL;
// value = document.characterSet;

// SCRIPTSsSSSs

// value = document.scripts;
// value = document.scripts.length;
// value = document.scripts[0];

// //LINKS

// value = document.links;
// value = document.links[document.links.length-1].getAttribute("class");
// value = document.links[document.links.length-1].getAttribute("href");
// value = document.links[document.links.length-1].className;
// value = document.links[document.links.length-1].classList;

// // Forms

// value = document.forms;
// value = document.forms.length;
// value = document.forms[0];
// // value = document.forms["formismi"] Forma name atandıysa parantez içine namei yazılır
// value = document.forms[0].id;
// // value = document.forms[0].getAttribute("id"); aynısı
// value = document.forms[0].method;


// ELEMENTLERİ IDYE GÖRE SEÇME

// let element;

// element = document.getElementById("todo-form");

// ELEMENTLERİ CLASSA GÖRE SEÇME

// element = document.getElementsByClassName("list-group-item")[0];

// yani taglere göre  için getelementsbytagname ile

// QUERY SELECTOR - CSS SELECTOR - TEK BİR ELEMENT SEÇİYOR

// element = document.querySelector("#todo-form"); // #zaten ek ondan okey
// element = document.querySelector("#tasks-title");

// element = document.querySelector(".list-group-item"); // # bir sürü var sadece 1 tane seçer

// element = document.querySelector("li");
// element = document.querySelector("div");

// element = document.querySelectorAll(".list-group-item") // hepsini seçmek için

// element.forEach(function(el){
//     console.log(el);
// })

// console.log(element);

//

// const element = document.querySelector("#clear-todos");

// Element özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);

// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

// STYLE VE ELEMENT ÖZELLİKLERİNİ DEİŞTİRME

// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginLeft = "20px";
// element.href = "https://www.google.com.tr"; //link atama
// element.target ="_blank"; // başka syf geçme


// element.textContent="silin";
// element.innerHTML = "<span style = 'color:green'>Silin</span>"; // renk değiştirme 
// element.textContent = "<span>Silin </span>"; //olmaz

// console.log(element.textContent);

// const elements = document.querySelectorAll(".list-group-item"); // node list
// // console.log(elements);
// elements.forEach(function(el){

//     el.style.color = "red";
//     el.style.background = "#eee";
// })

// CSS SELECTORS w3 schoolstan bakabilirsin

// let element2 = document.querySelector("li:last-child");
// // element2 = document.querySelector("li:nth-child(3)");
// element2 = document.querySelectorAll("li:nth-child(odd)");

// element2.forEach(function(el){
//     el.style.background = "#ccc";
//     el.style.color = "red";

// })


// console.log(element2);
// console.log(element)

//Yeni element oluşturma//
//   <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>    //
// const newLink = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body")[1];

// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href = "https://www.google.com.tr";
// newLink.target = "blank";

// text content

// newLink.textContent = "Farklı sayfaya git";

// cardbody.textContent = "asdasda"; kötü

// const text = document.createTextNode("Nbr");
// cardbody.appendChild(text);

// newLink.appendChild(document.createTextNode("Farklı sayfaya git"));
// cardbody.appendChild(newLink);



// console.log(cardbody);

// Dinamik Element Silme

// const todoList = document.querySelector("ul.list-group");
// const todos = document.querySelectorAll("li.list-group-item");

// // Remove Metodu

// // todos[0].remove();
// // todoList.removeChild(todolist.lastElementChild);
// todoList.removeChild(todos[3]);


// console.log(todos);
// console.log(todoList);
