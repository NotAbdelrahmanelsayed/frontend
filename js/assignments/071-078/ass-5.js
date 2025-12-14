let nums = [2, 12, 11, 5, 10, 1, 99];

// res = nums.reduce(function (prev, cur) {
//   return cur % 2 === 0 ? cur * prev : cur + prev;
// }, 1);
// console.log(res);

res = nums.reduce((p, c) => (c % 2 === 0 ? c * p : c + p), 1);
console.log(res);
