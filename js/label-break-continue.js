{
    // iterate multidimensional array
    let grades = [
        [12, 23,545, 34,23,545],
        [12, 23,545, 34,23,545],
        [12, 23,545, 34,23, 343,43, 4,34,2,34,33,44,23,45],
        [12, 23,545, 34,23,545]
    ]

    outerLoop: for(let i = 0; i < grades.length; i++) {
        //console.log(grades[i]);
        for (let index = 0; index < grades[i].length; index++) {
            if(grades[i][index] == 34) {
                console.log("I found the value...");
                continue outerLoop;
                // o continue com label vai saltar noutro loop; é parecido com break;
                // se fosse break outerLoop, saltaria o for do label e iria para a linha 23...
            }  
            console.log(grades[i][index]); 
        }
        console.log("~~~~~~~~");        
    }

    // forEach
    /*
    grades.forEach(function(el){
        el.forEach((col) => {
            console.log(col);            
        });  
        console.log("~~~~~~");            
    });
    */
}