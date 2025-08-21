Array.prototype.myReduce = function (cb, initalValue) {
  let accumulator = initalValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const arr = [1, 2, 3, 4];
const sumArr = arr.myReduce((acc, curr) => {
  return acc + curr;
});
console.log(sumArr);
