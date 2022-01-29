
var ch = document.getElementById('content-area').clientHeight;
var sh = document.getElementById('sidebar').clientHeight;
if (ch > sh) {
    document.getElementById('sidebar').style.height=(ch-3)+"px";
}





