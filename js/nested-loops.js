{
    
    let value = prompt("Digite o número...");

    let d = document.getElementById("destination");
    for (let i = 0; i < value; i++) {
        for (let k = i; k >= 0; k--) {
            console.log(i, k);
            d.append(k, " ");
        }
        var br = document.createElement('br');
        d.appendChild(br);
    }
}