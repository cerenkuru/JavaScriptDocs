// Local Storage

// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", "50");

// get item

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);


// clear local storage

// localStorage.clear();



// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", "50");

// console.log(localStorage.getItem("sport"));

// if (localStorage.getItem("sport") === null){
//     console.log("Sorguladığın veri bulunuyor...")
// }

// else {
//     console.log("Bulunamıyor...");
// }

// Local array

// const todos = ["todo 1", "todo 2","todo 3"];
// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);

// localStorage.setItem("todos", JSON.stringify(todos));
// localStorage.setItem("todos", todos);
// console.log(localStorage.getItem("todos"));

// const form = document.getElementById("todo-form");
// const todoInput = document.getElementById("todo");

// form.addEventListener("submit", addTodo);

// function addTodo(e){

//     const value = todoInput.value;
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.push(value);
//     localStorage.setItem("todos", JSON.stringify(todos));
//     e.preventDefault(); // sayfaya atmasın diye
// }