var Person = (function () {
    function Person(_name, _age) {
        this._name = _name;
        this._age = _age;
        this.name = _name;
        this.age = _age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            console.log('setter is called', value);
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value > 125 || value < 0)
                throw new Error('Invalid age');
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.print = function () {
        console.log("Name: " + this._name + " and Age:" + this._age);
    };
    return Person;
}());
var p1 = new Person("Zeo", 222);
console.log(p1.print());
