window.onload = function () {
    //表单搜索
    var myInput = document.getElementById("myInput");
    myInput.addEventListener("keyup", filterData);

    function filterData() {

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

    //表格（按名称搜索）
    var tableInput = document.getElementById("tableInput");
    tableInput.addEventListener("keyup", filterTableData);

    function filterTableData() {
        var filter = tableInput.value.toUpperCase();
        var tr = document.getElementById("myTable").getElementsByTagName("tr");
        for (var i = 0; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

}