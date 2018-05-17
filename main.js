"use strict";

const app = document.createElement("div");
app.setAttribute("id", "app");

for(let i=0; i<300; i++){
    const myDiv = document.createElement("div");
    app.appendChild(myDiv);
}

document.body.appendChild(app);

const divs = document.querySelectorAll("#app div");

app.addEventListener("mouseout", clicked)

// divs.forEach(function(div){
//     // div.style.transform = `translate(50vw, 50vh)`;
//     div.addEventListener("click", clickDiv);
// });

function clicked(event){
    console.log(event);
    const target = event.target;

    if(target.id === "app"){
        //We leave the parent
        const ourDiv = event.relatedTarget;
        if(ourDiv != null && ourDiv.parentElement != null && ourDiv.parentElement.id === "app"){
            randomMove(ourDiv);
        }
    }
}

function randomMove(ourDiv){
    ourDiv.style.transform = `translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
    ourDiv.style.backgroundColor = `hsl(${Math.random()*360}, 50%, 50%)`; 
}

function createNewBubble(){
    const div = document.createElement("div");
    app.appendChild(div);
    randomMove(div);
}

setInterval(createNewBubble, 1000);


// to remember:
// delegate all events to a parent and parents know what happens to the child