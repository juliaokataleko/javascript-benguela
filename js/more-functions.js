{
    function pow(x, y = 2, ...extra) {
        // if(y == undefined) { y = 2 }
        // y = typeof y === "undefined" ? 2 : y;
        console.log(extra);
        
        if(x == undefined) { x = 4 }
        let total = 1;
        for(let i = 0; i < y; i++) {
            total *= x;
        }
        return total
    }

    function largest(x, ...extra) {
        let largest = x;
        for (let index = 0; index < extra.length; index++) {
            if (extra[index] > largest) {
                largest = extra[index];
            }
        }

        return largest;
    }

    console.log(largest(2, 26, 3, 4,4,45,4,4,54,4,4,4,4));
    
}