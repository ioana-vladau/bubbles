"use strict";

const app = document.createElement("div");
app.setAttribute("id", "app");

for(let i=0; i<300; i++){
    const myDiv = document.createElement("div");
    app.appendChild(myDiv);
}

document.body.appendChild(app);

const divs = document.querySelectorAll("#app div");

divs.forEach(function(div){
    // div.style.transform = `translate(50vw, 50vh)`;
    div.addEventListener("mouseenter", ()=>{
        div.style.transform = `translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
        div.style.backgroundColor = `hsl(${Math.random()*360}, 50%, 50%)`; 
    });
});