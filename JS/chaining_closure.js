function calculate(initial) {
  let total = initial;

  function add(num) {
    total += num;
    return this;
  }

  function substract(num) {
    total -= num;
    return this;
  }

  function getValue() {
    console.log(total)
    return total;
  }

  return {
    add,
    substract,
    getValue
  };
}

calculate(10).add(5).substract(3).getValue();