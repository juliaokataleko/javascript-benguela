{
    let grades = [12,344,343,3,43];

    while(true) {
        let input = prompt("Add a grade");
        if(input == "q" || input === null) break;
        grades.push(Number(input));
        console.log(grades);        
    }
}