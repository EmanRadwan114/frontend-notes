//———————————————————————————————— counter ————————————————————————————————
function updateCounter(step) {
  let counter = 0;

  return {
    increment: () => (counter += step),
    decrement: () => (counter -= step),
    resetCounter: () => (counter = 0),
  };
}

const counter = updateCounter(3);

console.log(counter.increment()); //3
console.log(counter.increment()); //6
console.log(counter.resetCounter()); //0
console.log(counter.decrement()); //-3

//———————————————————————————————— fn that works only one time ————————————————————————————————
function runOnce(fn) {
  let called = false;

  return function (...args) {
    if (!called) {
      fn(...args);
      called = true;
    }
  };
}

const fnToRunOnce = runOnce(() => console.log("fn called"));

console.log(fnToRunOnce()); //"fn called"
console.log(fnToRunOnce()); // nothing typed in console

//———————————————————————————————— memoize ————————————————————————————————
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = fn(...args);
    }

    return cache[key];
  };
}

const computeVal = memoize((a, b) => a * b * 100);
console.log(computeVal(1, 2)); //200
console.log(computeVal(1, 2)); //200 from cache
console.log(computeVal(1, 2)); //200 from cache
