const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
let menu = document.getElementById("menu");
menu.addEventListener("mouseover", function( event ) {
    event.target.style.color = "pink";
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);