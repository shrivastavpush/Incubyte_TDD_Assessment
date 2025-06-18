function add(numbers) {
    if (numbers === '') return 0;

    // Split by either comma or newline
    const numberArray = numbers.split(/[\n,]/).map(Number);
    return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;