'use strict';

const extend = (function() {
  const ProxyF = function() {};
  return function(C, P) {
    ProxyF.prototype = P.prototype;
    C.prototype = new ProxyF();
    C.prototype.constructor = C;
  };
}());

const inheritContext = function(context, P, ...args) {
  if (context.prototype !== undefined) {
    console.error("Uncaught TypeError: not a instance");
    return;
  }
  P.apply(context, ...args);
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
    this.lessons = lessons;
}
extend(Child, Parent);
var kid = new Child('tom', 12, ["python"]);
kid.say();
