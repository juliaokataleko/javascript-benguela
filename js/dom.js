// document.getElementById("button").onclick = function () {

// }

document.getElementById("button").onclick = () => {
    document.getElementById("confirm").innerHTML = "Compra efectuada!! Por favor verifique o seu email."
    document.getElementById("button").style.display = "none";
}