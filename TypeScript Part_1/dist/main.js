let str_1 = "some string"; // type annotation
let str_2 = "some string"; // type inference
let direction = "left";
// function with type annotation
function sum(x, y) {
    return x + y;
}
// function with type inference for the return value => noImplicitAny = true
function sumTwoNum(x, y) {
    return x + y;
}
const user = { id: "1", name: "ali", age: 25 };
//type narrowing
function narrowType(x) {
    if (typeof x === "string")
        return x.slice(0, 2);
    return x.toFixed(2);
}
const chosenCourse = "js" /* Courses.option_1 */;
