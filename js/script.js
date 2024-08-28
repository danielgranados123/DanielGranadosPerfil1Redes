//Esta función hace que ningun div (ningun empresario) aparezca al cargar la página
window.onload = function() {
    ocultarDivs();
}

function ocultarDivs() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
    document.getElementById("div9").style.display = "none";
    document.getElementById("div10").style.display = "none";
}

/*Estas funciones hacen que cuando se presione el boton correspondiente,
aparezca el empresario respectivo.*/
function elon() {
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
    document.getElementById("div9").style.display = "none";
    document.getElementById("div10").style.display = "none";
}

function bill() {
    document.getElementById("div2").style.display = "block";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
    document.getElementById("div9").style.display = "none";
    document.getElementById("div10").style.display = "none";
}

function steve() {
    document.getElementById("div3").style.display = "block";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
    document.getElementById("div9").style.display = "none";
    document.getElementById("div10").style.display = "none";
}

function mark() {
    document.getElementById("div4").style.display = "block";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
    document.getElementById("div9").style.display = "none";
    document.getElementById("div10").style.display = "none";
}

function daniel() {
    document.getElementById("div5").style.display = "block";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
    document.getElementById("div9").style.display = "none";
    document.getElementById("div10").style.display = "none";
}

function jeff() {
    document.getElementById("div6").style.display = "block";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
    document.getElementById("div9").style.display = "none";
    document.getElementById("div10").style.display = "none";
}

function google() {
    document.getElementById("div7").style.display = "block";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div8").style.display = "none";
    document.getElementById("div9").style.display = "none";
    document.getElementById("div10").style.display = "none";
}

function narayana() {
    document.getElementById("div8").style.display = "block";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div9").style.display = "none";
    document.getElementById("div10").style.display = "none";
}

function jack() {
    document.getElementById("div9").style.display = "block";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
    document.getElementById("div10").style.display = "none";
}

function kevin() {
    document.getElementById("div10").style.display = "block";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
    document.getElementById("div9").style.display = "none";
}