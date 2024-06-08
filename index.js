// function fibonacci(n) {
//   const fib = [0, 1];
//   for (let i = 2; i <= n - 1; i++) {
//     fib.push(fib[i - 2] + fib[i - 1]);
//   }
//   return fib;
// }

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(7));
// console.log(fibonacci(10));

// Big-O = O(n)

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(0));

// Big-O = O(n)

// function isPrime(n) {
//   let result = [];

//   if (n <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(4));

// Big-O = O(sqrt(n))

// function isPowerOfTwo(n) {
//   for (let i = 0; i <= n; i++) {
//     if (n == Math.pow(2, i)) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(5));

// Big-O = O(log(n))

// Very Important Binary example
// function isPowerOfTwoBitWise(n) {
//   if (n < 1) {
//     return false;
//   }
//   return (n & (n - 1)) === 0;
// }

// console.log(isPowerOfTwoBitWise(2));
// console.log(isPowerOfTwoBitWise(1));
// console.log(isPowerOfTwoBitWise(5));

// Big-O = O(1)

// function recursiveFibonacci(n) {
//   if (n < 2) {
//     return n;
//   }
//   return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }

// console.log(recursiveFibonacci(0));
// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(6));

// function recursiveFactorial(n) {
//   if (n == 0) {
//     return 1;
//   }
//   // for (let i = n; i > 2; i--) {
//   return n * recursiveFactorial(n - 1);
//   // }
// }

// console.log(recursiveFactorial(0));
// console.log(recursiveFactorial(1));
// console.log(recursiveFactorial(6));
// console.log(recursiveFactorial(10));

// Big-o = O(n)

// function LinearSearch(array, target) {
//   // let index = array.indexOf(target);
//   // return index;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == target) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(LinearSearch([1, 2, 3], 3));
// console.log(LinearSearch([1, 2, 3], 0));
// console.log(LinearSearch([1, 2, 3], 2));

// Big-O = O(n)

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target == arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

// console.log(binarySearch([1, 2, 3], 3));
// console.log(binarySearch([1, 2, 3, 4], 9));

// Big-O = O(log(n))

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target > arr[middleIndex]) {
    return search(arr, target, middleIndex + 1, rightIndex);
  } else {
    return search(arr, target, leftIndex, middleIndex - 1);
  }
}

// console.log(recursiveBinarySearch([1, 2, 3], 3));
// console.log(recursiveBinarySearch([1, 2, 3, 4], 9));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));

// Big-O = O(log(n))

function bubbleSort(arr) {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap == true);

  return arr;
}

console.log(bubbleSort([1, 2, 3]));
console.log(bubbleSort([1, 2, 4, 3]));
console.log(bubbleSort([-6, 20, 8, -2, 4]));

// Big-O = O(n^2)
