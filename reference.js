// Uncomment the following lines one at a time, debug, and test your fixes.

/* ========================
    This file is called syntax.js
    run your code with 
    node reference.js
========================= */

// Reference Errors



const lesson = "U1L9";
console.log(lesson)


const activity = "practice";
console.log(activity)






function greet(name) {
    console.log("Hello " + name);
}
greet("Cesar")





function car() {
    let model = "Tesla";
    let year = "" 
    if (model === "Tesla") {
         year = 2021;
    } else {
         year = 2024;
    }

    return year
}

console.log(car());
