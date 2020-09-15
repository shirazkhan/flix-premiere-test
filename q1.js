const nums = [2, 3, 4, null, 6, 'a', 3]

const sumEvens = arr =>
    arr.reduce((acc,num) => { // Use reduce method to reduce the array to a single integer value.
        if((typeof num === "number") && (num % 2 === 0)){
            return acc += num
        } else {
            return acc
        }
    },0);

console.log(sumEvens(nums));