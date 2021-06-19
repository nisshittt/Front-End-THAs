// Question 1
var a = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
console.log(Object.getOwnPropertyNames(a)); // name, sclass, rollno.

// Question 2
var b = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
console.log(b); // name: "David Rayy" , sclass: "VI"
delete b.rollno;

// Question 3
var c = {
  name: "David Ray",
  sclass: "VI",
  rollno: 12,
};
console.log(Object.keys(c).length); // 3

// Question 4
var d = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
for (var i in d) {
  console.log(d[i].author); // Bill Gates, The Road Ahead, true
  console.log(d[i].title); // Steve Jobs, Walter Isaacson, true
  console.log(d[i].readingStatus); // Suzanne Collins, Mockingjay: The Final Book of The Hunger Games, false
}

// Question 5
console.log(ene(3, 4).toFixed(4));
function ene(r, h) {
  return Math.PI * r * r * h; // 113.0973
}

// Question 6
var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
console.log(library.sort(ene1));
function ene1(a, b) {
  if (a.libraryID < b.libraryID) {
    return -1;
  }
  if (a.libraryID > b.libraryID) {
    return 1;
  }
  return 0;
}
