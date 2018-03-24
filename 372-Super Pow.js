/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 *//*
var superPow = function(a, b) {
    var exp=(typeof b ==='Array')?Number(b.join('')):b;
    if (exp===0) return 1;
    if (exp % 2 == 1 ) {
        return superPow(a,exp/2)*superPow(a,exp/2)*a;
    }else{
        return superPow(a,exp/2)*superPow(a,exp/2);
    }
};
var a=2,b=[8];
console.log(superPow(a,b))*/
var n = readLine();
var arr = [];
for(var i = 0; i < n; i++){
    var inner = read_line().split()
    inner[1] = inner[2] / inner[1]
    if(inner[1] > 0.6) inner[2] = 3;
    else if( inner[1] <=0.6 && inner[1] > 0.3) inner[2] = 4;
    else inner[2] = 5;
    arr.push(inner)
}
arr = arr.sort(arr)
for(var i = 0; i < n; i++){
    print(arr[i][0] + " " + "arr[i][2])
}