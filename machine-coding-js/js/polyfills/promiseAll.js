Promise.allPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    if (!promises.length) return resolve(results);

    let pending = promises.length;
    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then((res) => {
        results[idx] = res;
        pending--;
        if (pending === 0) resolve(results);
      }, reject);
    });
  });
};

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 resolved"), 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2 resolved"), 500);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 3 rejected"), 1500);
});

Promise.allPolyfill([p1, p2])
  .then((res) => console.log("All resolved:", res))
  .catch((err) => console.log("Error:", err));

Promise.allPolyfill([p1, p2, p3])
  .then((res) => console.log("All resolved:", res))
  .catch((err) => console.log("Error:", err));
