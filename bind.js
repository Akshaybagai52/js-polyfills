Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(this + "is not callable");
  context.fn = this;
  return function(...newArgs) {
    context.fn(...args, ...newArgs)
  }
};

function purchaseCar(curr, price) {
  console.log(`I have purchased ${this.car} for ${price}${curr}`);
}

const obj = {
  car: "lambo",
};

const fn = purchaseCar.myBind(obj, "$", "20000");
fn();
