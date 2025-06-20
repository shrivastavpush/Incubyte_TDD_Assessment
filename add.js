function add(numbers) {
    // check for empty string
    if (numbers === '') return 0;

    let delimiters = [',', '\n'];
    let numbersToProcess = numbers;

    // Check for custom delimiter
    if (numbers.startsWith('//')) {
        const delimiterEnd = numbers.indexOf('\n');
        if (delimiterEnd !== -1) {
            const delimiterPart = numbers.substring(2, delimiterEnd);
            if (delimiterPart) {
                delimiters = [delimiterPart];
            }
            numbersToProcess = numbers.substring(delimiterEnd + 1);
        }
    }

    // Creating a regex pattern that matches any of the delimiters
    const delimiterPattern = new RegExp(`[${delimiters.join('')}]`);

    // split the string into an array of numbers
    const numberArray = numbersToProcess
        .split(delimiterPattern)
        .filter(num => num !== '')
        .map(Number);

    // Check for negative numbers
    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }

    // Ignore numbers greater than 1000 and sum the rest
    return numberArray
        .filter(num => num <= 1000)
        .reduce((sum, num) => sum + num, 0);
}

module.exports = add;