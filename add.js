function add(numbers) {
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

    const numberArray = numbersToProcess
        .split(delimiterPattern)
        .filter(num => num !== '')
        .map(Number);

    return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;