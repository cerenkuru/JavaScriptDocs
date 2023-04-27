// Event Bubbling

// document.querySelector(".container").addEventListener("click", function(){
//     console.log("Div Container");
// })
// document.querySelector(".card.row").addEventListener("click", function(){
//     console.log("card row");
// })
// document.querySelectorAll(".card-body")[1].addEventListener("click", function(){
//     console.log("Card body");
// })


// Event Capturing

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click", run);

function run(e){
    if(e.target.className === "fa fa-remove"){
        console.log("Silme işlemi");
    }

    else if(e.target.id === "filter"){
        console.log("Filtreleme işlemi");
    }

    if(e.target.id === "clear-todos"){
        console.log("Tüm tasklar silme");
    }
    console.log(e.target);
}
