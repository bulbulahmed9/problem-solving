// leet code : problem no 20
// solution with stack

var isValid = function (s) {
  let stack = [];
  let set = {
    ")" : "(",
    "}" : "{",
    "]" : "["
  }

  for (let i = 0; i < s.length; i++) {


    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {

      if (set[s[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }

    }

  }
  if (stack.length > 0) return false;
  return true;
};

// let str = "{()}})";
let str = "(({}[]))";
// let str = "([)]";
// let str = "(())"
// let str = "({})";
// let str = "({[})" 

console.log(isValid(str));
