window.onload = function () {
    var btnOpen = document.getElementById("mybtn");
    var pop = document.getElementById("myModal");
    var close = document.getElementsByClassName("close")[0];
    btnOpen.addEventListener("click", function () {
        popWindow("block")
    })
    close.addEventListener("click", function () {
        popWindow("none")
    });
    window.addEventListener("click", function (e) {
        if (e.target == pop) {
            popWindow("none")
        }
    })

    function popWindow(display) {
        if (display == "block") {
            pop.style.display = "block";
        } else {
            pop.style.display = "none";
        }
    }
}