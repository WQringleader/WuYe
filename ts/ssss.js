function Father () {
    this.name = 'venciki',
    this.age = 25;
}

function Child () {
    
}

Child.prototype = new Father();

var instance = new Child();


