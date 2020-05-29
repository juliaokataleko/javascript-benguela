{
    //números são 32 bits
    let x = 9007199254740995;
    //x = 5.5;
    //console.log(Number.isSafeInteger(x));

    // 64 bits infinity, negative infinitys

    let babies = 9007199254740991;

    console.log(Math.pow(-babies, 201) * 2);
    console.log(console.log() + 2);
    console.log(1/0);

}

//operadores
{
    var slicesOfPizza = 10;
    /**
     * +
     * -
     * *
     * /
     * %
     */

    //soma
    console.log(slicesOfPizza + 10);
    //módulo, in Js we can use decimal numbers in module
    console.log(slicesOfPizza % 4.25);

    //precedencia
    var precedence1 = 5+3*12-20/10; // multiplicacao, divisao, soma, subtração
    var precedence2 = 5+(3*12)-(20/10); 
    var precedence3 = (5+3)*(12-20)/10; 
    console.log(precedence1, precedence2, precedence3);

    //incremento e decremento
    slicesOfPizza = slicesOfPizza + 1;
    slicesOfPizza++;
    ++slicesOfPizza
    slicesOfPizza *= 2;
    console.log(slicesOfPizza);

    //incremento antes e depois
    // let newPizza = slicesOfPizza++; // aqui não acrescentou 1 porque  incremento ocorre depois.
    let newPizza = ++slicesOfPizza; // aqui acrescentou 1 porque  incremento ocorre antes.
    console.log(newPizza);
    
}