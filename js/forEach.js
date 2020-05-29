{
    let ages = [19, 19, 16, 0, 23, 25, 23, 19, 54];
    ages.length = 30;

    for(let i = 0; i < ages.length; i++) {
        // if(ages[i] !== undefined) console.log(ages[i]);        
    }

    total = 0;

    // o el representa o elemento, o i é opcional e representa o index
    ages.forEach(function(el, i, array){
        total += el;
        // console.log(el);  
        // console.log(array);              
    });

    // console.log("_____________", total);

    // iterate multidimensional array
    let grades = [
        [12, 23,545, 34,23,545],
        [12, 23,545, 34,23,545],
        [12, 23,545, 34,23, 343,43, 4,34,2,34,33,44,23,45],
        [12, 23,545, 34,23,545]
    ]

    for(let i = 0; i < grades.length; i++) {
        //console.log(grades[i]);
        for (let index = 0; index < grades[i].length; index++) {
            // console.log(grades[i][index]);                         
        }
        //console.log("~~~~~~~~");        
    }

    // forEach
    grades.forEach(function(el){
        el.forEach((col) => {
            console.log(col);            
        })  
        console.log("~~~~~~");
            
    })
    
}