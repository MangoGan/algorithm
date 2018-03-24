//感谢 https://www.cnblogs.com/dushao/p/6004883.html
var arr=[1,4,3,5,3,4,3,5,5,666,5,4347,8,8,9,7,67,6,77];
/*
 *冒泡排序
 *两两比较，前小后大 
 *最差时间复杂度O(n^2),平均时间复杂度O(n^2)  空间复杂度O(1) 稳定排序
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
        }while(i<arr.length-1&&isSorted);
        return arr;
}

/*
 *选择排序
 *从i次待排序数据中选出第i小或第i大元素
 *最差时间复杂度O(n^2),平均时间复杂度O(n^2)  空间复杂度O(1) 稳定排序
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
 * 直接插入排序
 * 从待排序组中选出元素插入有序组中 稳定排序
 * 最差时间复杂度O(n^2),平均时间复杂度O(n^2)  空间复杂度O(1) 稳定排序
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
 * 缩小增量排序,每隔一定步长分组的插入排序
 * 下界是O(n*log2n),与增量序列的选取有关   空间复杂度O(1)   不稳定排序
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

/*
 *快速排序
 *感谢http://blog.csdn.net/morewindows/article/details/6684558，挖坑填数，interesting
 *挖坑填数
 *最差时间复杂度O(n^2),平均时间复杂度O(O(n*log2n)) 空间复杂度O(log2n)~O(n)  不稳定排序
 */
function divide(arr,left,right){
        var i=left,
            j=right,
            key=arr[left];//挖坑
        while(i<j){
            while(i<j&&key<arr[j])
                j--;
            if (i<j){
                arr[i]=arr[j];//填数，挖j坑
                i++;//i开始右移
            }
            while (i<j&&key>arr[i])
                i++;
            if (i<j){
                arr[j]=arr[i];//填j坑，挖i坑
                j--;//j开始左移
            }
        }
        arr[i]=key;//将i=j的坑填上。
     return i;
 }
function quick(arr,l,r) {
    if (l<r){
        var key=divide(arr,l,r);
            quick(arr,l,key-1);
            quick(arr,key+1,r);
    }
};
var arr=[1,4,3,5,3,4,3,5,5,666,5,4347,8,8,9,7,67,6,77];
quick(arr,0,arr.length-1);
console.log(arr);
/*
    第k大的数
public static int partition(int[] array, int left, int right) {
    int k = array[left];
    int i = left;
    int j = right;
    while (j > i) {
        while (array[j] < k && j > i) {
            j--;
        }
        if (j > i) {
            array[i] = array[j];
            i++;
        }
        while (array[i] > k && j > i) {
            i++;
        }
        if (j > i) {
            array[j] = array[i];
            j--;
        }
    }
    array[i] = k;
    return i;
}

public static void quickSort(int[] array, int left, int right) {
    if (left >= right) {
        return;
    }
    int i = partition(array, left, right);
    quickSort(array, left, i - 1);
    quickSort(array, i + 1, right);
}
*/

















