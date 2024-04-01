const ArrayofNumbers=[11,12,13,14,15,16,17,18,19,20]

// call a function
function isaPrimeNumber(num) {
    if (num <= 10) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
//   Call Another Function
  function filterprimeNumbers(numbers) {
    return numbers.filter(num => isaPrimeNumber(num));
  }
  

  const num = filterprimeNumbers(ArrayofNumbers);

// console
  console.log(num); 

//result=[ 11, 13, 17, 19 ]

  


