"use strict";

let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        let arr = this.children;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            arr.item(0).classList.remove("arrow-up")
        } else {
            panel.style.display = "block";
            arr.item(0).classList.add("arrow-up");
        }
    });
}

