// example.ts

// 1. Unused variable (eslint: no-unused-vars)
const unusedVar = 42;

// 2. Missing return type on function (eslint: @typescript-eslint/explicit-function-return-type)
function add(a: number, b: number) {
    return a + b;
}

// 3. Using 'any' type (eslint: @typescript-eslint/no-explicit-any)
function processData(data: any) {
    console.log(data);
}

// 4. Missing type annotation for parameter (eslint: @typescript-eslint/no-unused-vars)
function greet(name) {
    console.log(`Hello, ${name}`);
}

// 5. Using 'var' instead of 'let' or 'const' (eslint: no-var)
var oldSchool = "This is old school";

// 6. Missing semicolon (eslint: semi)
const noSemicolon = "This is missing a semicolon"

// 7. Unnecessary escape character (eslint: no-useless-escape)
const escapedString = "This is an unnecessary escape: \.";

// 8. Using '==' instead of '===' (eslint: eqeqeq)
const intVar = 42;
if (intVar == "42") {
    console.log("This is not type-safe!");
}

// 9. Unreachable code (eslint: no-unreachable)
function unreachableCode() {
    return "This is reachable";
    console.log("This is unreachable");
}

// 10. Using 'console.log' (eslint: no-console)
console.log("This is a console.log statement");

// 11. Missing accessibility modifier (eslint: @typescript-eslint/explicit-member-accessibility)
class ExampleClass {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// 12. Using 'null' without strict null checks (eslint: @typescript-eslint/strict-boolean-expressions)
function checkNull(value: string | null) {
    if (value) {
        console.log("Value is not null");
    }
}

// 13. Missing type annotation for array (eslint: @typescript-eslint/array-type)
const numbers = [1, 2, 3];

// 14. Using 'eval' (eslint: no-eval)
eval("console.log('This is dangerous!')");

// 15. Missing type annotation for object (eslint: @typescript-eslint/consistent-type-definitions)
const user = {
    name: "Eric",
    age: 27,
};

// 16. Using 'async' function without 'await' (eslint: @typescript-eslint/require-await)
async function fetchData() {
    console.log("Fetching data...");
}

// 17. Using 'undefined' as a variable name (eslint: no-undefined)
const undefined = "This is not allowed";

// 18. Using 'this' in an arrow function (eslint: @typescript-eslint/no-this-alias)
const exampleArrowFunction = () => {
    console.log(this);
};

// 19. Using 'new' without assigning to a variable (eslint: no-new)
new ExampleClass("Test");

// 20. Using 'void' operator (eslint: no-void)
void console.log("This is a void operation");