function searchDigit(search, digits) {
    let result = 'Not found';
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === search) {
            result = i+1;
            break;
        }
    }
   
    return result;
}

const search = 10;
const digits = [1, 2, 3, 4, 5, 6];
const result = searchDigit(search, digits);

console.log('Search complete:', result);