function secondBiggestNumber(numbers) {
    let biggest_number;
    let second_biggest_number;

    for(let item_index = 0; item_index < numbers.length; item_index++) {
        if(biggest_number == undefined || biggest_number < numbers[item_index]) {
            second_biggest_number = biggest_number;
            biggest_number = numbers[item_index];
        } else if(biggest_number == numbers[item_index]) {
            //Duplicates are not allowed!!
        } else if(second_biggest_number == undefined || second_biggest_number < numbers[item_index]) {
            second_biggest_number = numbers[item_index];
        }
    }
    if(second_biggest_number == undefined)
        return -1; //Should ideally throw error instead of returning -1. As -1 can also be a number in the array
    else
        return second_biggest_number;
}

const input = [10, 5, 5, 1];
const result = secondBiggestNumber(input);
console.log("second biggest number is: " + result);