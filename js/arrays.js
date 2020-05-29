{
    let grades = [12,3,14,9,45, {}, function() { console.log("Hello");}];
    console.log(grades[0]);    
    grades[5]; // a forma correcta correcta de exibir uma função dentro de array;
}

{
    let ages = [23,34,56,657,565,5,564,545,35,3,3]
    
    ages[0] = 12;
    ages[1] = 24;
    ages[15] = 23;

    ages.length = 3;
    console.log(ages);
    
    for(let i = 0; i < ages.length; i++) {
        console.log(ages[i]);        
    }

    console.log(ages.length);
    
}