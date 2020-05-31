function fibNumber(limit, prevArray = [1], next = 1) {
    if (next > limit) {
        return prevArray;
    }
    prevArray.push(next);
    return fibNumber(limit, prevArray, prevArray[prevArray.length - 2] + next);
}

console.log(fibNumber(20))
