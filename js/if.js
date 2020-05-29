// dont mix AND and OR operators
{
    var name = "122";
    if(name === "Julião") {
        console.log("Seja BemVindo Julião");
    } else if (name === "Yela"){
        console.log("Seja Bemvinda Yela");
    } else {
        console.log("Saia daqui por favor...");
        
    }
}

{
    var age = 18;
    if(age >= age && age <= 35) {
        console.log("Já es Jovem...");
    } else if(age < 35) {
        console.log("O teu tempo foi meu irmão...");        
    }
}

// sigle line if statement
{
    let name = prompt("What is your name?");
    if(name === "Flor") 
        console.log("Olá Flor!!");
        console.log("Essa linha vai rodar sempre!!");
        // sem os parenteses so uma linha  a seguir o if é que vai rodar           
    
}