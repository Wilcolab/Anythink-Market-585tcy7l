/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with words separated by spaces, hyphens, or underscores
 * and converts it to camelCase where the first word is lowercase and subsequent words
 * are capitalized with no separators.
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The camelCase version of the input string
 * 
 * @example
 * toCamelCase("hello world") // returns "helloWorld"
 * @example
 * toCamelCase("hello-world-foo") // returns "helloWorldFoo"
 * @example
 * toCamelCase("hello_world_bar") // returns "helloWorldBar"
 */
function toCamelCase(str) {
    return str
        .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
        .replace(/^(.)/, c => c.toLowerCase());
}

module.exports = toCamelCase;