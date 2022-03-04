class person{
    constructor(name){
        this.name = name;
    }
    //method to return the string
    toString(){
        return (`Name of person: ${this.name}`);
    }
}
class student extends person{
    constructor(name,id){
        //super keyword to for calling above class constructor
        super(name);
        this.id = id;
    }
    toString(){
        return (`\n${super.toString()},Student ID: ${this.id}\n`);
    }
}
let student1 = new student('Mukul',22);
console.log(student1.toString());

class Suhas{
    constructor(name){
        this.name=name;
    }
    toString(){
        return(`Name of Person: ${this.name}`);
    }
}
class Suhas1 extends Suhas{
    constructor(name,id){
        super(name);
        this.id=id;
    }
    toString(){
        return(`$Name of Person: ${this.name}, ID: ${this.id}`);
    }
}
let s = new Suhas1('Suhas',1)
console.log(s.toString());