window.onload = cambiar;

function cambiar() {

    var urlActual = window.location;
    var links = ['index', 'quienes-somos', "donde-estamos", "enlaces"];
    var comp = "http://127.0.0.1:5500/";
    var temp = comp + "quienes-somos.html",
        temp2 = comp + "filosofias.html";
    if (urlActual == temp || urlActual == temp2) {
        nosotros = document.getElementById("nosotros")
        nosotros.className += "actual";
    } else {
        var i = 0;
        for (i = 0; i < links.length; i++) {
            var urlTemp = comp + links[i] + ".html";
            var lista = document.getElementById("menu").children;
            if (urlActual == urlTemp) {
                lista[i].className += "actual";
                console.log("la opcion es: " + urlTemp);
            }
        }
    }

}

/*+           var lis = document.getElementById("menu").getElementsByTagName("li");
+            lis[i].className += "actual";
+            break */