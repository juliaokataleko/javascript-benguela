{
    // while
    // do while
    // for

    // initialization
    // condition
    // update

    let i = 0; // initialization

    // while
    /*
    while(i < 10) { // condition
        // code
        i++ // todate
        console.log(i);
    }*/

    // do while
    do {
        console.log(i);
        i++;
    } while(i < 10);

    for(j = 100; j > 10; j--) {
       // console.log(j);        
    }

}

{
    let password;
    do {
        //password = prompt("What is the password?")
        password = "let me in"
    } while(password.toLowerCase() !== "let me in")
}

// array with for
{
    let list = [23,4,234,1000, 3, 45];
    for(let a = 0; a < list.length; a++) {
        console.log(list[a]);
    }
}

{
    let myString = "Search this c c c string c body c";
    let charToSAearch = "z";

    for(let b = 0; b < myString.length; b++) {
        if(myString[b] == charToSAearch) {
            console.log(myString[b], " Foi encontrado na posição ", b);
            break;
        } else {
            continue;
        }
    }
}