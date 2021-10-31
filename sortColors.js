let arr = [1, 2, 0, 2, 1];

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let low = 0; // first index
  let mid = 0; // 0 , because we don't know mid ,
  let high = nums.length - 1; // last index
  let temp = 0;

  while (mid <= high) {
    if (nums[mid] === 2) {
      // move it to last index , and move last index data to first index
      temp = nums[mid];
      nums[mid] = nums[high];
      nums[high] = temp;
      high--;
    } else if (nums[mid] === 1) {
      // do not move mid, just increment loop count
      mid++;
    } else if (nums[mid] === 0) {
      // swap low and mid  , and increment low and mid
      temp = nums[mid];
      nums[mid] = nums[low];
      nums[low] = temp;
      low++;
      mid++;
    }
  }
};


sortColors(arr)
console.log(arr)