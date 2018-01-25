// // local file imports
// import add, { greetUser, name } from "./../imports/utils";
// // add here is named right in this file because it is a default

// console.log("log from /server/main.js");
// console.log(greetUser());
// console.log(name);
// console.log(add(1, 1));

import { Players } from "./../imports/api/players";

import { Meteor } from "meteor/meteor";

//.startup is an event listener that "on startup" does something
Meteor.startup(() => {
  console.log("server up");
  class Person {
    constructor(name = "anonymous", age = 0) {
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      return `Hi I am ${this.name}`;
    }
  }

  //subclass called Employee that inherits or extends from Person class
  class Employee extends Person {
    constructor(name, age, title) {
      super(name, age);
      this.title = title;
    }
    hasJob() {
      return !!this.title;
    }
    getGreeting() {
      if (this.title) {
        return `Hi I am ${this.name} and I am ${
          this.age
        } years old who works as ${this.title}`;
      } else {
        return super.getGreeting();
      }
    }
  }

  let me = new Person("shinno");
  console.log(me);
  console.log(me.getGreeting());

  let worker = new Employee("john", 25, "fisherman");
  console.log(worker.hasJob());
  console.log(worker.getGreeting());
});
