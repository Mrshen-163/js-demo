window.onload = function () {
    let left = document.querySelector(".left");
    let right = document.querySelector(".right");
    let container = document.querySelector(".container");
    left.addEventListener("mouseenter", hoverLeft);

    function hoverLeft() {
        container.classList.add("hover-left");
    }

    left.addEventListener("mouseleave", leftLeave);

    function leftLeave() {
        container.classList.remove("hover-left");
    }

    right.addEventListener("mouseenter", hoverRight);

    function hoverRight() {
        container.classList.add("hover-right");
    }

    right.addEventListener("mouseleave", rightLeave);

    function rightLeave() {
        container.classList.remove("hover-right");
    }
}