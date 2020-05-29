{
    var favFood = "tacos";
    console.log(favFood.charAt(2)); // pega o carácter da posição definida.

    console.log(favFood + " são muito gostosos."); // concatenação
    console.log(favFood.concat("Oi", "test", " "));
    
    let content = "Hoje vamos falar acerca dos metodos de string";

    let search1 = "string";
    let search2 = "number";

    //a função include verifica se uma frase possui uma string e retorna true ou false.
    console.log(content.includes(search1));
    console.log(content.includes(search2));

    // verifica a posição de uma string
    console.log(content.indexOf(search1));
    console.log(content.indexOf(search2));

    // verifica a ultima posição de uma string
    console.log(content.lastIndexOf(search1));
    
}

//more string methods
{

    let content = "Hoje vamos falar acerca dos metdos de string";
    console.log(content.substring(5, 11));  //da posição 5 até a 11
    console.log(content.substr(5, 12));     //avança 12 casas apartir da posição 5

    //letras maiúsculas
    console.log(content.toUpperCase());

    //letras maiúsculas
    console.log(content.toLowerCase());
    
    //elimina os espaços em branco
    console.log(content.trim());   
    
    //elimina os espaços em branco a direita
    console.log(content.trimRight()); //ou trimEnd() 

    //elimina os espaços em branco a esquerda
    console.log(content.trimLeft()); //ou trimStart() 

    //repete uma string
    let waiting ="Aguarde...";
    // console.log(waiting.repeat(4000));
    
    //string com array usando split()
    console.log(content.split(" "));

    console.log(content.replace());
    
}