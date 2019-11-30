window.onload = cambiar;

function cambiar() {
    var urlActual = window.location;
    var links = ['index', 'quienes-somos', "donde-estamos", "enlaces"];
    var i = 0;
    for (i = 0; i < links.length; i++) {
        var temporal = "http://127.0.0.1:5500/" + links[i] + ".html"
        if (urlActual == temporal) {
            var lis = document.getElementById("menu").getElementsByTagName("li");
            lis[i].className += "actual";
            break
        }
    }

}