(function() {
    //IIFE - immediately invoked function expression

    // usando a palavra reservada var a varável fica apenas neste escopo
    //var age = 5;

    // não usando a palavra reservada var a varável fica no escopo global
    age = 5;

})(); // funcção a ser executada imediatamente.

{
    //block
    let y = 10;
    const x = 23

    console.log(y, x);

    {
        let y = 200;
        console.log(y);
        
    }

    var z = 100;

    // tipos de dados
    {
        let x = 5;      // number
        let b = "10";   // string

        console.log(x+b)
    }
    
}

console.log(z);
