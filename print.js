function $(id) { return document.getElementById(id); }

if($("cssstefanprint")){
	var elem = document.getElementById("cssstefanprint");
	elem.parentElement.removeChild(elem);
}

var table = document.getElementsByTagName('table')[0];
table.style.width = "500px";

window.print();