//感谢 https://www.cnblogs.com/dushao/p/6004883.html
var arr=[1,4,3,5,3,4,3,5,5,666,5,4347,8,8,9,7,67,6,77];
/*
 *冒泡排序
 *两两比较，前小后大 
 *时间复杂度O(n^2),空间复杂度O(1) 稳定排序
 */
function bubble(arr) {
        var i=0, 
            temp,
            isSorted=false;
        do{
            for (var j = i; j < arr.length-1-i; j++) {
                if (arr[j]>arr[j+1]) {
                    isSorted=true;
                    temp=arr[j+1];
                    arr[j+1]=arr[j];
                    arr[j]=temp;
                }
             }
        }while(i<arr.length-1&&isSorted)
        return arr;
}

/*
 *选择排序
 *从i次待排序数据中选出第i小或第i大元素
 *时间复杂度O(n^2) 空间复杂度O(1) 不稳定排序
 */
function select(arr){
    var temp;
    for (var i = 0; i < arr.length-1 ; i++) {
        for (var j = i; j <arr.length-1 ; j++) {
            if (arr[i]>arr[j]) {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
/*
 * 插入排序
 * 从待排序组中选出元素插入有序组中 稳定排序
 */
 function insert(arr) {
    var current;
    for(var i=1;i<arr.length;i++){//选出待排序组第i个元素
        current=arr[i];
        for (var j = i-1; j >= 0; j--) {//从后往前插入
            if (current<arr[j]) {
                arr[j+1]=arr[j];
                arr[j]=current;
                current=arr[j];
            }
        }
     }
     return arr;
 }
/*
 *希尔排序
 * 缩小增量排序
 *                      不稳定
 */
 function shell(arr) {
     var gap=Math.ceil(arr.length/2);
     var current;
     while(gap>1){
        for (var i = 0; i < gap; i++) {//每次gap组
            for(var j=i; j < arr.length; j+=gap){//对第i组数据进行插入排序
                current=arr[j+gap];
                for (var k = j;k>=i;k=k-gap) {//从后往前
                if (current<arr[k]) {
                        arr[k+gap]=arr[k];
                        arr[k]=current;
                        current=arr[k];
                    }
                }
            }
      }
        gap=Math.ceil(gap/2);
     }
     return arr;
 }
 /*
  *归并排序
  * 分治法
  */
function mergeSort(arr) {
    if (arr.length===1) {
        return arr;
    }
    var mid=arr.length/2,
        left=arr.slice(0,mid),
        right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left, right){
    var temp = [];
    while (left.length>0 && right.length>0) {
        if (left[0] < right[0]) {
            temp.push(left.shift());
        } else {
            temp.push(right.shift());
        }
    }
    while (left.length)
        temp.push(left.shift());

    while (right.length)
        temp.push(right.shift());
    return temp;
}
/*function merge(left,right){
    var temp=[];
    while(left.length>0 && right.length>0){
        //说length is undefined 一脸蒙蔽
        if (left[0]<right[0]) {
            temp.push(left.shift());
        }else{
            temp.push(right.shift());
        }
    }
    while(left.length){
        temp.push(left.shift());
    }
    while(right.length){
        temp.push(right.shift());
    }
}*/

/*
 *快速排序
 */
 function quick(arr) {
     var key=arr[0];
     for (var i = 0; i < arr.length; i++) {
         
     }
 }