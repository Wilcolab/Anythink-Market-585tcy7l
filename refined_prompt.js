/**
 * Converts a given string to camelCase format.
 *
 * @param {string} input - The input string to be converted.
 * @returns {string|Object} - Returns the camelCased string or an error object if the input is invalid.
 * @throws {Error} - Throws an error if the input is null, undefined, or not a string.
 * 
 * @example
 * // returns 'helloWorld'
 * camelCase("Hello World");
 *
 * @example
 * // returns 'theQuickBrownFox'
 * camelCase("the-quick-brown-fox");
 *
 * @example
 * // returns { error: 'Input cannot be an empty or whitespace-only string' }
 * camelCase("");
 *
 * @example
 * // returns { error: 'Input cannot be null or undefined' }
 * camelCase(null);
 *
 * @example
 * // returns { error: 'Invalid input type: expected string, received number' }
 * camelCase(123);
 */

/**
 * Converts a given string to dot.case format.
 *
 * @param {string} input - The input string to be converted.
 * @returns {string|Object} - Returns the dotCased string or an error object if the input is invalid.
 * @throws {Error} - Throws an error if the input is null, undefined, or not a string.
 * 
 * @example
 * // returns 'hello.world'
 * dotCase("Hello World");
 *
 * @example
 * // returns 'the.quick.brown.fox'
 * dotCase("the-quick-brown-fox");
 *
 * @example
 * // returns { error: 'Input cannot be an empty or whitespace-only string' }
 * dotCase("");
 *
 * @example
 * // returns { error: 'Input cannot be null or undefined' }
 * dotCase(null);
 *
 * @example
 * // returns { error: 'Invalid input type: expected string, received number' }
 * dotCase(123);
 */
function camelCase(input) {
    // Input validation
    if (input === null || input === undefined) {
        return { error: "Input cannot be null or undefined" };
    }

    if (typeof input !== "string") {
        return { error: `Invalid input type: expected string, received ${typeof input}` };
    }

    // Handle empty string
    if (input.trim().length === 0) {
        return { error: "Input cannot be an empty or whitespace-only string" };
    }

    // Split by non-alphabetic characters and filter out empty strings
    const words = input
        .split(/[^a-zA-Z0-9]+/)
        .filter((word) => word.length > 0);

    if (words.length === 0) {
        return { error: "Input must contain at least one alphabetic character" };
    }

    // Convert to camelCase
    const camelCased = words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");

    return camelCased;
}

// Example usage
console.log(camelCase("Hello World")); // 'helloWorld'
console.log(camelCase("the-quick-brown-fox")); // 'theQuickBrownFox'
console.log(camelCase("")); // { error: 'Input cannot be an empty or whitespace-only string' }
console.log(camelCase(null)); // { error: 'Input cannot be null or undefined' }
console.log(camelCase(123)); // { error: 'Invalid input type: expected string, received number' }

function dotCase(input) {
    // Input validation
    if (input === null || input === undefined) {
        return { error: "Input cannot be null or undefined" };
    }

    if (typeof input !== "string") {
        return { error: `Invalid input type: expected string, received ${typeof input}` };
    }

    // Handle empty string
    if (input.trim().length === 0) {
        return { error: "Input cannot be an empty or whitespace-only string" };
    }

    // Split by non-alphabetic characters and filter out empty strings
    const words = input
        .split(/[^a-zA-Z0-9]+/)
        .filter((word) => word.length > 0);

    if (words.length === 0) {
        return { error: "Input must contain at least one alphabetic character" };
    }

    // Convert to dot.case
    const dotCased = words
        .map(word => word.toLowerCase())
        .join(".");

    return dotCased;
}

// Example usage
console.log(dotCase("Hello World")); // 'hello.world'
console.log(dotCase("the-quick-brown-fox")); // 'the.quick.brown.fox'
console.log(dotCase("")); // { error: 'Input cannot be an empty or whitespace-only string' }
console.log(dotCase(null)); // { error: 'Input cannot be null or undefined' }
console.log(dotCase(123)); // { error: 'Invalid input type: expected string, received number' }

