function hasTargetSum(array, target) {
  // Write your algorithm here

for (i=0; i < array.length; i++) {
  //let j = i+1 //this is only increasing by 1 not looping through the rest of the array
  for(j = i+1; j < array.length; j++ ) {
  if(array[i] + array[j]=== target) return true
 
}
}
return false
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  if the sum of a pair of any numbers in an array =  target , return true
  otherwise return false
  I want to loop through the array using a for loop 
   - start with and i and j variable
   - i = index 0
   - let j start at the end of the array
   - if i + j = target return true


/*
  Add written explanation of your solution here
  the outer loop iterates through each array element and for each element, the inner loop(j) iterates
  through the remaining elements until the sum equals the target number
*/ 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
