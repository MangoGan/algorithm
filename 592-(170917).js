/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if(k<0) return 0;
    nums.sort(function(a,b){
        return a-b;
    });
    var count=0;
    for(var i=0;i<nums.length-1;i++){
      for(var j=i+1;j<nums.length;j++){
          if (nums[i]+k===nums[j]){
              count++;
              break;
          }
      }
      while (i<nums.length-1&&nums[i]===nums[i+1])
          i++;
    }
    return count;
};
var nums=[3, 1, 4, 1, 5], k = 2;
console.log(findPairs(nums,k));