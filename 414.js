/**
 * Created by MangoGan on 2017/9/28.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if(nums.length<3){
        nums.sort(function(a,b){return b-a;});
        return nums[0];
    }
    if(nums.length==3){
        nums.sort(function(a,b){return b-a;});
        return nums[2];
    }
    var temp;
    for(var i=0;i<3;i++){
        for(j=i+1;j<nums.length;j++){
            if (nums[i]==nums[j]) nums[j]=-1;
            if(nums[i]<nums[j]){
                temp=nums[j];
                nums[j]=nums[i];
                nums[i]=temp;
            }
        }
    }
    return nums[2];
};
var nums=[1,1,2];
console.log(thirdMax(nums));
