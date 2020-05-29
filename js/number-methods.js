{

    let slicesOfPizza = 10;
    let x = 5;
    let y = "10";

    let yInt = Number.parseInt(y);
    // let z = Number.parseInt("12.0566");
    // console.log(x+z);

    //binary, octal, hexadecimal numbers

    //conversão de números para diferentes bases
    var input = Number(23);
    // console.log("Decimal        :", input);
    // console.log("Binary         :", Number.parseInt(input, 2));
    // console.log("Octal          :", Number.parseInt(input, 8));
    // console.log("Hexadecimal    :", Number.parseInt(input, 16));

    console.log(input, " Decimal to decimal        :", input);
    console.log(input, " to Binary         :", input.toString(2));
    console.log(input, " to Octal         :", input.toString(8));
    console.log(input, " to Hexadecimal         :", input.toString(16));

    // Number é um construtot
    // let x = new Number();
    let z = 12;
    z.toString(2);
    console.log(z)

    let c = 9945454534534545;
    let d = 9.343432;
    let money = 9999;

    console.log(c.toExponential(10));
    console.log(d.toFixed(2));
    console.log("$" + money.toLocaleString());
    console.log("$" + money.toPrecision(2));

    let a = new Number(970000);
    console.log(typeof(a.valueOf()));
    
    

}