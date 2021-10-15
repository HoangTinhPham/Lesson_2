
//Trả về 1 mảng chưa các giá trị nằm giữa a và b


function  filterRange(arr, a, b) {
    arr.forEach(function(j, i) {
        if (j === a) {
            x = i;
        } else if (j === b) {
            y = i;
        }
    })
    return  arr.filter(function(e, f) {
            return f > x && f < y
        })
}
 
let myArray = [0, 1, 2, 3, 4, 5, 6];
 
console.log(filterRange(myArray, 0, 2));