function cartesianProduct(arrA, arrB) {
  let answer = [];
  let temp = [];

  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      temp = [arrA[i], arrB[j]];
      answer.push(temp);
    }
  }
  return answer;
}

// console.log(cartesianProduct([1, 2], [3, 4, 5]));

// Because the length of the arrays may be different
// Its time complixity is : Big-O = (mn)

function climbingStaircase(n) {
  const noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
}

// console.log(climbingStaircase(1));
// console.log(climbingStaircase(5));

// Big-O = O(n)

function towerOfHanoi(n, source, destination, auxiliary) {
  if (n == 1) {
    console.log(`Move Disk 1 from ${source} to ${destination}`);
    return;
  }

  towerOfHanoi(n - 1, source, auxiliary, destination);

  console.log(`Move Disk ${n} from ${source} to ${destination}`);

  towerOfHanoi(n - 1, auxiliary, destination, source);
}

towerOfHanoi(3, "A", "C", "B");

// A [1,2,3,4]
// B [2]
// C [1]

// Because When we run n = 1 , two statements are resulted , and when n = 2 , 3 statements are resulted
// Then Big-O = O(2^n - 1) approximately ==> O(2^n)
