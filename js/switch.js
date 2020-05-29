{
    let name = prompt("What is your name?");

    switch(name) {
        case "Kataleko":
            console.log("Welcome");
            break; // senão colocar break vai pegar a proxima condição...
        case "Teresa":
            console.log("Hey Berry");
            break;
        default:
            console.log("I guess you are welcome here...");
            break;            
    }
}