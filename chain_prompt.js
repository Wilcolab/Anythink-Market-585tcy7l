// Step 1: Initialize the function
function toKebabCase(input) {
    // This function should return a kebab-case string
    // Step 2: Convert to lowercase and replace spaces/underscores with hyphens
    let transformed = input.toLowerCase().replace(/[_\s]+/g, '-');

    // Step 3: Collapse multiple hyphens and trim leading/trailing hyphens
    transformed = transformed.replace(/-+/g, '-').replace(/^-|-$/g, '');

    // Step 4: Return the cleaned kebab-case string
    return transformed;
}

// Test cases
console.log(toKebabCase("Hello World")); // Expected output: "hello-world"
console.log(toKebabCase("Mixed_Casing Test")); // Expected output: "mixed-casing-test"
console.log(toKebabCase("123 Numbers 456")); // Expected output: "123-numbers-456"
console.log(toKebabCase("  Leading and Trailing  ")); // Expected output: "leading-and-trailing"
console.log(toKebabCase("Multiple---Hyphens___Here")); // Expected output: "multiple-hyphens-here"