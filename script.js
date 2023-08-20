let start1 = document.querySelector(".start");
let info = document.querySelector(".info");
let body = document.querySelector("main");
let exit = document.querySelector(".exit");

start1.addEventListener("click", () => {
    info.classList.add("active");
    body.classList.add("blur");
});
exit.addEventListener("click", () => {
    info.classList.remove("active");
    body.classList.remove("blur");
});

// start1.onclick = () => {
//     info.classList.add('active');
// }