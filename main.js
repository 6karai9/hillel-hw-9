function calculateEnteredNumbers(parameter) {
  const getIncreasedParameter = function (enteredValue) {
    return (parameter += enteredValue);
  };
  return getIncreasedParameter;
}

let sum = calculateEnteredNumbers(0);

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
console.log(sum(100));
