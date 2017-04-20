class Person{
    
    constructor(private _name:string, private _age:number){
        this.name=_name;
        this.age=_age;
    }

    get name(){
        return this._name;
    }

    set name(value:string){
        console.log('setter is called', value)
        this._name=value
    }

     get age(){
        return this._age;
    }

    set age(value:number){
        if(value > 125 || value < 0)
            throw new Error('Invalid age');
        this._age=value
    }

    
    print(){
        console.log(`Name: ${this._name} and Age:${this._age}`)
    }
}

let p1:Person= new Person("Zeo",222);
console.log(p1.print())