const nums = [-2,1]
// const nums = [-1]
// const nums = [-2,1,-3,4,-1,2,1,-5,4]
// const nums = [-2,-1]

// solved by kadane's algorithm
// time complexity o(n)
// can be reduce time complexity by divide and conquer method

var maxSubArray = function (nums) {
  let max_so_far = nums[0];
  let curr_max = nums[0];
 
  // loop starts from 1, because if we start from zero, negative case ( all negative value in array) won't be handle
  for (let i = 1; i < nums.length; i++)
  {
      curr_max = Math.max(nums[i], curr_max+nums[i]);
      max_so_far = Math.max(max_so_far, curr_max);
  }
 
return max_so_far;
};

console.log(maxSubArray(nums));
