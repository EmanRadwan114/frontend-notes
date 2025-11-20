let str_1: string = "some string"; // type annotation
let str_2 = "some string"; // type inference

type TDirection = "left" | "right"; // literal type with union
let direction: TDirection = "left";

// function with type annotation
function sum(x: number, y: number): number {
  return x + y;
}

// function with type inference for the return value => noImplicitAny = true
function sumTwoNum(x: number, y: number) {
  return x + y;
}

//interface
interface IUser {
  name: string;
  age: number;
}

interface IRole extends IUser {
  role: "admin" | "user";
}

//intersection
type TID = { id: string };
type TStudent = { name: string; age: number };
type TMix = TID & TStudent;
const user: TMix = { id: "1", name: "ali", age: 25 };

//type narrowing
function narrowType(x: string | number) {
  if (typeof x === "string") return x.slice(0, 2);
  return x.toFixed(2);
}

//enum
const enum Courses {
  option_1 = "js",
  option_2 = "html",
}

const chosenCourse = Courses.option_1;
