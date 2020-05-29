console.log("Iterate arrays: Filter and Search");

{
    let grades = [3,443,32,5,34,34, 3444.4, 34,35,53,242]
    grades[34] = 23;

    let found = false;
    let search = 32;
    let largest = grades[0];
    let pos;

    for(let i = 0; i < grades.length; i++) {
        if (grades[i] === search) {
            // found
            found = true;
            // console.log(grades[i] + " Na posição ",i);
            break;
        }                
    }

    // largest number
    for(let i = 0; i < grades.length; i++) {
        if (grades[i] > largest) {
            // replave the largest
            largest = grades[i]
            pos = i;
        }                
    }

    // console.log(largest, " Na posição ",pos);
    

    if(found) {
        // do something
    }
}

{
    // fill an array using user input...
    let ages = [3,443,32,5,34,34, 3444.4, 34,35,53,242]
    // ages[34] = 0;

    let count = 0;
    let total = 0;

    for(let j = 0; j < ages.length; j++) {
        if(ages[j] !== undefined) {
            // legit value
            count++
            total += ages[j]
        }
    }

    let avg = total/count // calculate the average
    console.log("Média: ",avg);    

    // ordena um array
    ages.sort();

    console.log(ages);

    ages.splice(2,3);
    ages.push(23, 34,2,565,12,07,43,343,53);
    console.log(ages);

    ages.sort(function(){})

    console.log(ages);

    // ordena o array de forma crescente
    ages.sort(function(a,b){ return a - b });

    console.log(ages);

    ages.reverse()

    console.log(ages);

    // substituindo os dados do array
    ages.fill(15, 0 , ages.length); 
    
    console.log(ages);

    agesB = [23,12,55,44,123];

    let agesC = ages.concat(agesB);

    console.log(agesC);   
    
    // includes
    agesC.includes(23);

    ages.indexOf(23);

    ages.join();

    console.log(ages.join());

    console.log(ages.join(" "));

    console.log(ages.slice(2));
    
    
    
}