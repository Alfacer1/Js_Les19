function createSum() {
    let total = 0;
  
    function sum(num) {
      total += num;
      return total;
    }
  
    return sum;
  }
  
  const sumFunction = createSum();
  
  console.log(sumFunction(3));
  console.log(sumFunction(5));
  console.log(sumFunction(20));