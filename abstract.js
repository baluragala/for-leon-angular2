var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal1 = (function () {
    function Animal1() {
    }
    Animal1.prototype.move = function () {
        console.log("moving...");
    };
    return Animal1;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log('Bow Bow...');
    };
    return Dog;
}(Animal1));
var d = new Dog();
d.makeSound();
