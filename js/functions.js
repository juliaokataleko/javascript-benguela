{
    let myFunc = function (x, y) {
        let total = 1;
        for(let i = 0; i < y; i++) {
            total *= x;
        }
        return total
    }
    // console.log(myFunc(2,3));
    
    // memorization
    pow.calculated = {}
    function pow(x, y) {
        let stringVersion = x + "^" + y;
        console.log("string version: " + stringVersion);
        
        if(stringVersion in pow.calculated) {
            console.log("found!");
            return pow.calculated[stringVersion];
        }

        console.log(
            "CALCULATING...!"
        );
        

        let total = 1;
        for(let i = 0; i < y; i++) {
            total *= x;
        }
        // pow.calculated.push(total);
        pow.calculated[stringVersion] = total;
        console.log(pow.calculated);        
        return total
    }

    pow(3,3)
    pow(4,9)
    pow(4,9)
    pow(4,5)
    pow(8,7)
    pow(4,7)
    pow(4,7)
}
