let nums = [10, 20, 15, 30];

let add = nums.reduce(function (acc, curr, index, array) {
  // acc -> first element
  // curr -> element next to acc
  // index -> the index of the curr
  console.log(`acc -> ${acc}`);
  console.log(`curr -> ${curr}`);
  console.log(`index -> ${index}`);
  console.log("###");
  return acc + curr;
}, 5); // 5 is the initial value (defalut -> 0)

console.log(add);
