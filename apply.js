Function.prototype.myApply = function (context = {}, args) {
  if (typeof this !== "function") throw new Error(this + "is not callable");
  if (!Array.isArray(args)) throw new Error(args + "is not in array");
  context.fn = this;
  context.fn(...args);
};

function purchaseCar(curr, price) {
  console.log(`I have purchased ${this.car} for ${price}${curr}`);
}

const obj = {
  car: "lambo",
};

purchaseCar.myApply(obj, ["$", "20000"]);
