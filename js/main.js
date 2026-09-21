document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML("beforeend", `<button id = "homeButton">Home</button>`);
    document.getElementById("homeButton").addEventListener("click", () => {
        if(window.location.href.includes("index.html")){
            window.location.href = "index.html";
        }
        else{
            window.location.href = "../index.html";
        }
    });
});
