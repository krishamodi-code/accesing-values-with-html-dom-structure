function myfunction() {
    document.getElementById("demo").innerHTML = document.getElementById("result").firstChild.nodeValue;
    document.getElementById("demo1").innerHTML = document.getElementById("result").childNodes[0].nodeValue;
}
