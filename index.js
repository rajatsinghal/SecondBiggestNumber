function secondBiggestNumber(numbers) {
    let biggest_number;
    let second_biggest_number;

    for(let item_index = 0; item_index < numbers.length; item_index++) {
        const item = numbers[item_index];
        if(biggest_number == undefined || biggest_number < item) {
            second_biggest_number = biggest_number;
            biggest_number = item;
        } else if(second_biggest_number == undefined || second_biggest_number < item) {
            second_biggest_number = item;
        }

        if(second_biggest_number == undefined)
            return -1; //Should ideally throw error instead of returning -1. As -1 can also be a number in the array
        else
            return second_biggest_number;
    }
}