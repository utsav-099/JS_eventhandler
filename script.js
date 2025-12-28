var item1 = document.getElementById("item1");
item1.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "antiquewhite";
    event.target.style.transition = "0.5s";
    event.target.textContent = "😒";
});
item1.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "white";
    event.target.textContent = "";
});

var item2 = document.getElementById("item2");
item2.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "rgb(153, 149, 149)";
    event.target.style.transition = "0.5s";
    event.target.textContent = "🤨";
});
item2.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "white";
    event.target.textContent = "";
});

var item3 = document.getElementById("item3");
item3.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "rgb(62, 60, 60)";
    event.target.style.transition = "0.5s";
    event.target.textContent = "😉";
});
item3.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "white";
    event.target.textContent = "";
});

var item4 = document.getElementById("item4");
item4.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "black";
    event.target.style.transition = "0.5s";
    event.target.textContent = "😁";
});
item4.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "white";
    event.target.textContent = "";
});