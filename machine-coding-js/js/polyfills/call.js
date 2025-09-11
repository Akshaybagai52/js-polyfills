Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(this + "is not callable");
  context.fn = this;
  context.fn(...args);
};

function purchaseCar(curr, price) {
  console.log(`I have purchased ${this.car} for ${price}${curr}`);
}

const obj = {
  car: "lambo",
};

purchaseCar.myCall(obj, "$", "20000");
