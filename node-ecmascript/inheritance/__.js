function getGreeting(language) {
    try {
        console.log("Code in try block (*)");

        let v = language.greeting();

        console.log("Code in try block (**)");

        return v;

    } catch (e) {

        console.log("Code in catch block. Something Error: " + e);

    } finally {

        console.log("Code in finally block");
    }

    return " !! ";
}

// ----------------------- TEST ---------------------------------

// Test 1:
console.log("----- Call getGreeting(null) -----");

let v1 = getGreeting(null);
console.log("Greeting: " + v1);


// Test 2:
console.log("------ Call getGreeting(language) ------");

let language = new Object();

language.greeting = function() {
    return "Hello Everybody";
}

let v2 = getGreeting(language);

console.log("Greeting: " + v2);
