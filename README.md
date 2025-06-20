# String Calculator

A JavaScript implementation of the String Calculator kata, developed using Test-Driven Development (TDD) principles. This project demonstrates clean code practices and comprehensive test coverage.

## Features

- Handles empty strings by returning 0
- Parses and adds a single number
- Adds multiple numbers separated by commas
- Supports newline characters as delimiters
- Custom delimiter support with `//` syntax
- Validates and reports negative numbers
- Ignores numbers greater than 1000

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shrivastavpush/Incubyte_TDD_Assessment.git
   cd Incubyte_TDD_Assessment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Basic Usage

```javascript
const add = require("./add");

console.log(add("")); // 0
console.log(add("1")); // 1
console.log(add("1,2")); // 3
console.log(add("1\n2,3")); // 6
```

### Custom Delimiters

```javascript
// Using custom delimiter
console.log(add("//;\n1;2")); // 3

// Using default delimiters (comma and newline)
console.log(add("1,2\n3")); // 6
```

### Error Handling

```javascript
try {
  console.log(add("-1,2,-3"));
} catch (e) {
  console.error(e.message); // negatives not allowed: -1, -3
}
```

## Running Tests

To run the test suite:

```bash
npm test
```

This will execute all test cases using Jest and display the test results.

## Test Coverage

The project includes comprehensive test coverage for:

- Basic number addition
- Different delimiter handling
- Edge cases (empty string, single number)
- Negative number validation
- Custom delimiter support
- Number filtering (ignoring numbers > 1000)

## Implementation Details

The implementation follows TDD practices with the following key components:

- `add.js`: Main implementation file containing the string calculator logic
- `add.test.js`: Test suite with comprehensive test cases

## Acknowledgments

- This project was created as part of the Incubyte assessment process
- Inspired by Roy Osherove's String Calculator kata
