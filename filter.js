Array.prototype.myFilter = function(cb) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) result.push(this[i])
    }
    return result;
}

const arr = [1, 2, 3, 4]
const moreThanTwo = arr.myFilter((i) => {
    return i > 2
})
console.log(moreThanTwo)