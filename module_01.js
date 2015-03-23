function Person(name){
    this._name = name;
}
Person.prototype.getName = function () {
    return this._name;
}

Person.prototype.setName = function (name) {
    this._name = name;
};

Person.prototype.name = '';
console.log(module.exports == exports);
exports = Person;
module.exports = Person;
