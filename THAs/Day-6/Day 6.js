// Question 1
function is_array(arr) {
  return Array.isArray(arr);
}
console.log(is_array("w3resource")); //false
console.log(is_array([1, 2, 4, 0])); //true

// Question 2
num = ["1", "2", "3", "4", "5"];
num2 = Array.from(num);
console.log(num2); //0: "1", 1: "2", 2: "3", 3: "4", 4: "5"

//Question 3
function func3(a, n) {
  if (n == null) {
    return a[0];
  } else {
    return a.slice(0, n);
  }
}
console.log(func3([7, 9, 0, -2])); //7
console.log(func3([], 3)); //[]
console.log(func3([7, 9, 0, -2], 3)); // [7, 9, 0]
console.log(func3([7, 9, 0, -2], 6)); // [7, 9, 0, -2]
console.log(func3([7, 9, 0, -2], -3)); //[7]

//Question 4
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(",")); //"Red,Green,White,Black"
console.log(myColor.join(",")); //"Red,Green,White,Black"
console.log(myColor.join("+")); //"Red+Green+White+Black"

//Question 5
var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var maxCount = 0;
var maxValue = 0;
var map = {};
for (var item in arr1) {
  if (map[arr1[item]] == null) {
    map[arr1[item]] = 1;
  } else {
    map[arr1[item]] = map[arr1[item]] + 1;
  }
  if (map[arr1[item]] > maxValue) {
    maxValue = arr1[item];
    maxCount = map[arr1[item]];
  }
}
console.log(maxValue, "(", map[maxValue], " times )"); // a ( 5 times )
