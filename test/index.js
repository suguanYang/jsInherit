'use strict';

const extend = function(C, P) {
  C.prototype = new P();
};

const inheritContext = function(context, P, ...args) {
  if (context.prototype !== undefined) {
    console.error("Uncaught TypeError: not a instance");
    return;
  }
  P.apply(this, ...args);
};

function Parent(name, age) {
    this.name = name;
    this.age = age;
}
Parent.prototype.say = function () {
    console.log("my name is: ", this.name);
};
function Child(name, age, lessons) {
    inheritContext(this, Parent, name, age);
}
extend(Child, Parent);
var kid = new Child('tom', 12, ["python"]);
kid.say();
