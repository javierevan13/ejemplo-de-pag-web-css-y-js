window.onload = cambiar;

function cambiar() {
    /*var urlActual = window.location;
    var links = ['index', 'quienes-somos', "donde-estamos", "enlaces"];
    var i = 0;
    for (i = 0; i < links.length; i++) {
        var urlTemp = "http://127.0.0.1:5500/" + links[i] + ".html";
        var lista = document.getElementById("menu").children;
        if (urlActual == urlTemp) {
            lista[i].className += "actual";
        }
    }*/
    var lis = document.getElementById("menu").getElementsByTagName("li");
    lis[0].className += "actual";
    console.log("bla bla " + lis.length);
}

/*+           var lis = document.getElementById("menu").getElementsByTagName("li");
+            lis[i].className += "actual";
+            break */