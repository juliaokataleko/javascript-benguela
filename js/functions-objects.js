{
    let position = {
        x: 10,
        y: 20,
        print: function() {
            console.log(`X: ${this.x}, Y: ${this.y}`);
        },
        myObject: {
            sweetPrpoperty: "Olá amigos"
        }
    }

    let myPosition = position;
    console.log(position);
    console.log(myPosition);

    myPosition.x = 15

    console.log(myPosition);

    function print() {
        'use strict';
        console.log(this);
    }

    print()
    position.print();
    console.log(position.myObject.sweetPrpoperty)
    
}