function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    isFullfilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }
  this.then = function (callback) {
    onResolve = callback;

    if (isFullfilled && !isCalled) {
      called = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      called = true;
      onReject(value);
    }
    return this;
  };
  executor(resolve, reject);
}

const examplePromise = new PromisePolyFill((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  }, 1000);
});

examplePromise.then((res) => console.log(res)).catch((err) => console.error(err));
