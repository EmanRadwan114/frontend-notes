"use strict";
//———————————————————————————————— implicit binding ————————————————————————————————
const obj = {
  _username: "Ahmed",
  _age: 22,
  role: "user",

  get username() {
    return this._username;
  },

  set username(val) {
    this._username = val;
  },

  get age() {
    return this._age;
  },

  set age(val) {
    if (val < 18) throw new Error("Age should be at least 18 or more");
    this._age = val;
  },

  isAdmin() {
    if (this.role === "admin") return true;
    return false;
  },
};

console.log(obj.username);
console.log(obj.age);
console.log(obj.isAdmin());

//———————————————————————— method borrowing & explicit binding ——————————————————————————

// we can use call, apply or bind(used for hard binding)

/* 
both call and apply is used to call the borrowed method immediately, while bind return a function that we can call it later at any time

also every time we call that returned fn in any context, it references that same object.

in addition to that, we can also use bind to bind/fix the function arguments, so we will not need to pass them any time we call the returned fn
*/

const admin = {
  username: "ali",
  sayHi(keyword, msg) {
    return `${keyword} ${this.username}, ${msg}`;
  },
};

const user = {
  username: "omar",
};

console.log(admin.sayHi.call(user, "Hi", "What's up"));
console.log(admin.sayHi.apply(user, ["Hello", "Good Morning"]));
console.log(admin.sayHi.bind(user, "Welcome")("Nice to meet you")); // return a function, so here I called that fn in one step

//———————————————————————————————— working with new kw ————————————————————————————————
// construtor fn
function User(username, role) {
  this.username = username;
  this.role = role;
}

/* 
new kw does the following:
    1- creating a new obj and assigning it to this => this = {}
    2- modifing this by adding properties and methods during fn execution
    3- returning the value of this 
    4- assigning the prototype property of the constructor fn to [[prototype]] of the newly created object 
    
    ==> by default the prototype property is an object that contains the constructor property which referencing the same constructor fn

    that's why it is preferred to add properties and methods to the prototype object, not replacing the object as a whole in order not to lose the value of the constructor property 

    Prototype = {constructor: User}
*/

const newUser = new User("mona", "admin");
console.log(newUser); // {username:"mona", role:"admin"} + [[prototype]]
console.log(User.prototype); // { constructor: User}
console.log(newUser.__proto__); // { constructor: User}

//———————————————————————————————— lose this binding ————————————————————————————————
/*
it means we lose the value of this that is refering to specific object

this happens, for example when we pass an object method as callback to setTimeOut, in this case the fn is called inside setTimeOut implementation, so that in this case this will refer to the global object

we have 2 solutions for this problem:
    1. create a wrapper fn => arrow / fn expression and call the obj method inside it
    2. use bind fn method to create hard binding for this
*/

const student = {
  username: "omar",
  _grades: 150,

  get grades() {
    return this._grades;
  },

  set grades(val) {
    this._grades = val;
  },

  isPassed() {
    console.log(this);

    if (this.grades > 120)
      alert(`Congratulations ${this.username} you are passed! 🎉`);
    else alert(`Unfortunately ${this.username} you did not pass 😞`);
  },
};

// setTimeout(student.isPassed); // will not work correctlt as this will refer to window obj

// setTimeout(function () {
//   student.isPassed();
// }); // will work correctly

// setTimeout(() => {
//   student.isPassed();
// }); // will work correctly

// setTimeout(student.isPassed.bind(student)); // will work correctly => hard binding

//—————————————————————————— inheritance with class syntax ——————————————————————————
class Animal {
  canEat() {
    // defined inside prototype property of the constructor fn
    return true;
  }
}

class Bird extends Animal {
  canFly() {
    return true;
  }
}

const bird_1 = new Bird();

console.log(bird_1.canEat()); // true ==> looks in the prototype chain
