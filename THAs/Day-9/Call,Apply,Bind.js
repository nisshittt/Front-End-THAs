//call
const abc = {
  name: "xyz",
  invite: function (a, b) {
    console.log(this);
    console.log(a + b);
  },
};
const abc1 = {
  name: "abc",
};
abc.invite.call(abc1, 1, 2);
//apply
const abc = {
  name: "xyz",
  invite: function (a, b) {
    console.log(this);
    console.log(a + b);
  },
};
const abc1 = {
  name: "abc",
};
abc.invite.apply(abc1, [1, 2]);
//bind
const abc = {
  name: "xyz",
  invite: function (a, b) {
    console.log(this);
    console.log(a + b);
  },
};
const abc1 = {
  name: "abc",
};
const ab = abc.invite.bind(abc1, 1, 2);
console.log(ab);