let obj1 = {
  prop1: 1,
  method1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  method1: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);
console.log(finalObject); // prop 1 -> 1 because it takes the first property

finalObject["prop4"] = 210; // assign without any issue

let newObject = Object.assign({}, obj1, { prop7: "7" });
console.log(newObject); // {"prop1": 1,"prop7": "7"}
