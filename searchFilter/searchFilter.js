window.onload = function () {
    myInput.addEventListener("keyup", filterData);

    function filterData() {
        var myInput = document.getElementById("myInput");
        var filter = myInput.value.toLowerCase();
        var ul = document.getElementById("myUl")
        var li = document.querySelectorAll("li");
        for (var i = 0; i < li.length; i++) {
            var data = li[i].getElementsByTagName("a")[0].innerHTML;
            if (data.toLowerCase().indexOf(filter) > -1) {
                li[i].style.display = "block";
             li[i].parentNode.firstElementChild.style.display = "block";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}