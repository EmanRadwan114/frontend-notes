const memoize = (fn) => {
  const cache = {};

  return function (...args) {
    const hashedKey = args.join("#");

    if (cache[hashedKey] !== undefined) {
      // return cached value
      console.log("from cache---", hashedKey);
      return cache[hashedKey];
    }
    // calculate new value
    console.log("from new calculate---", hashedKey);
    const result = fn(...args);
    cache[hashedKey] = result;
    return result;
  };
};

const memoSum = memoize((x, y) => x + y);
console.log(memoSum(3, 4));
console.log(memoSum(3, 4));
