const Calculate = {
  factorial(inputNumber) {
    // handles 0 edge case
    if(inputNumber === 0) {
      return 1;
    }
    // everyother number
    for(let i = inputNumber - 1; i >= 1; i--) {
      inputNumber *= i;
    }
    return inputNumber;
  }
}

module.exports = Calculate;