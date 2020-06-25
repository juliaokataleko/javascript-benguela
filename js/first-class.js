{
    function pow(x, y) {
        let total = 1;
        for(let i = 0; i < y; i++) {
            total *= x;
        }
        return total
    }

    let coolFunctions = [pow];

    let mathFunctions = {
        power: pow
    }
    
    console.log(mathFunctions.power(3,3));

    pow.description = "Will raise number to a power"

    console.log(pow.description);

    function callBackExample(callback) {
        return callback(3,5)
    }
    
    console.log(callBackExample(pow));

    function returnAFunction () {
        return pow;
    }

    console.log(returnAFunction()(4,2));
    
    
}