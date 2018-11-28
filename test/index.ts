import * as Inherit from "../Inherit"

function Parent(name: string, age: number) {
  this.name = name
  this.age = age
}

Parent.prototype.say = function() {
  console.log("my name is: ", this.name)
}

function Child(name: string, age: number, lessons: string[]) {
  Inherit.inheritContext(this, Parent, name, age)

  this.lessons = lessons
}
Inherit.extend(Child, Parent)

const kid = new Child('tom', 12, ["python"])

kid.say()