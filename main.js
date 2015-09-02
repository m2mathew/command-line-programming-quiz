var prompt = require('prompt-sync').prompt;

var numCorrectAnswers = 0;
var htmlCorrect = 0;
var cssCorrect = 0;
var jsCorrect = 0;

console.log("What is your name?");
var name = prompt();
console.time("Time of Quiz");

console.log("-----------------------------------");
console.log("Hey, " + name + "... here is your first question...");
console.log("-----------------------------------");

// question 1
console.log("Which one of these is a JS type: boolean, integer, float");
var answer1 = prompt().toLowerCase();

answer1 === "boolean" ? (
    numCorrectAnswers++,
    jsCorrect++,
    console.log('YES!')
) : (
    console.log("Hmmm, should be " + "boolean" + ", " + name)
);
console.log("-----------------------------------");

// question 2
console.log("Which command contains the unseen info in an HTML page: header, head, body");
var answer2 = prompt().toLowerCase();

answer2 === "head" ? (
    numCorrectAnswers++,
    htmlCorrect++,
    console. log('YES!')
) : (
    console.log("Hmmm, should be " + "head" + ", " + name)
);
console.log("-----------------------------------");


// question 3
console.log("Which selector begins which a dot in front of the name: id, tag, class");
var answer3 = prompt().toLowerCase();

answer3 === "class" ? (
    numCorrectAnswers++,
    cssCorrect++,
    console.log('YES!')
) : (
    console.log("Hmmm, should be " + "class" + ", " + name)
);
console.log("-----------------------------------");


// question 4
console.log("What is the name of the ! [exclamation point] in JavaScript: dude, bang, bam");
var answer4 = prompt().toLowerCase();

answer4 === "bang" ? (
    numCorrectAnswers++,
    jsCorrect++,
    console.log('YES!')
) : (
    console.log("Hmmm, should be " + "bang" + ", " + name)
);
console.log("-----------------------------------");


// question 5
console.log("What is an examle of a display type in HTML: inline-block, clear, element");
var answer5 = prompt().toLowerCase();

answer5 === "inline-block" ? (
    numCorrectAnswers++,
    htmlCorrect++,
    console.log('YES!')
) : (
    console.log("Hmmm, should be " + "inline-block" + ", " + name)
);
console.log("-----------------------------------");


// question 6
console.log("What kind of format is the color #bada55: rgb, hexadecimal, invisible");
var answer6 = prompt().toLowerCase();

answer6 === "hexadecimal" ? (
    numCorrectAnswers++,
    cssCorrect++,
    console.log('YES!')
) : (
    console.log("Hmmm, should be " + "hexadecimal" + ", " + name)
);
console.log("-----------------------------------");


// question 7
console.log("What is an example of a conditional statement in JavaScript: if-then, if-else, if-until");
var answer7 = prompt().toLowerCase();

answer7 === "if-else" ? (
    numCorrectAnswers++,
    jsCorrect++,
    console.log('YES!')
) : (
    console.log("Hmmm, should be " + "if-else" + ", " + name)
);
console.log("-----------------------------------");


// question 8
console.log("What is an HTML tag you might see in a table: td, tx, t1");
var answer8 = prompt().toLowerCase();

answer8 === "td" ? (
    numCorrectAnswers++,
    htmlCorrect++,
    console.log('YES!')
) : (
    console.log("Hmmm, should be " + "td" + ", " + name)
);
console.log("-----------------------------------");


// question 9
console.log("What is name of the fancy precompiler that eventually turns into CSS: sess, sass, sassy");
var answer9 = prompt().toLowerCase();

answer9 === "sass" ? (
    numCorrectAnswers++,
    cssCorrect++,
    console.log('YES!')
) : (
    console.log("Hmmm, should be " + "sass" + ", " + name)
);
console.log("-----------------------------------");


// question 10
console.log("Why is it called a variable in JavaScript: varies, value, verdant");
var answer10 = prompt().toLowerCase();

answer10 === "varies" ? (
    numCorrectAnswers++,
    jsCorrect++,
    console.log('YES!')
) : (
    console.log("Hmmm, should be " + "varies" + ", " + name)
);
console.log("-----------------------------------");


// question 11
console.log("What is an HTML tag used for accepting input from a user: body, div, input");
var answer11 = prompt().toLowerCase();

answer11 === "input" ? (
    numCorrectAnswers++,
    htmlCorrect++,
    console.log('YES!')
) : (
    console.log("Hmmm, should be " + "input" + ", " + name)
);
console.log("-----------------------------------");


// question 12
console.log("How can a developer select all children that are not the first one in CSS: :first-child, :not:first-child, nth-child");
var answer12 = prompt().toLowerCase();

answer12 === ":not:first-child" ? (
    numCorrectAnswers++,
    cssCorrect++,
    console.log('YES!')
) : (
    console.log("Hmmm, should be " + ":not:first-child" + ", " + name)
);
console.log("-----------------------------------");


// question 13
console.log("Which of these notations is a way to define an object in JavaScript: literal, practical, unique");
var answer13 = prompt().toLowerCase();

answer13 === "literal" ? (
    numCorrectAnswers++,
    jsCorrect++,
    console.log('YES!')
) : (
    console.log("Hmmm, should be " + "literal" + ", " + name)
);
console.log("-----------------------------------");


// question 14
console.log("Why should a developer use <section> tags in HTML: brevity, semantics, utility");
var answer14 = prompt().toLowerCase();

answer14 === "semantics" ? (
    numCorrectAnswers++,
    htmlCorrect++,
    console.log('YES!')
) : (
    console.log("Hmmm, should be " + "semantics" + ", " + name)
);
console.log("-----------------------------------");


// question 15
console.log("What is the keyword to insert different data at breakpoints in CSS: @require, @import, @media");
var answer15 = prompt().toLowerCase();

answer15 === "@media" ? (
    numCorrectAnswers++,
    cssCorrect++,
    console.log('YES!')
) : (
    console.log("Hmmm, should be " + "media" + ", " + name)
);
console.log("-----------------------------------");


var percentOverall = numCorrectAnswers * 100 / 15;

console.log("-----------------------------------");
console.log("You answered " + numCorrectAnswers + "/15 correctly.");
console.log("Your overall score is " + percentOverall.toFixed(2) + "%.");

if (percentOverall === 100.00){
    console.log(" _  ___   ___");
    console.log("/ |/ _ \\ / _ \\ ");
    console.log("| | | | | | | |");
    console.log("| | |_| | |_| |");
    console.log("|_|\\___/ \\___/ ");
}

console.log("-----------------------------------");
console.log("HTML - " + htmlCorrect + " out of 5");
console.log("CSS - " + cssCorrect + " out of 5");
console.log("JavaScript - " + jsCorrect + " out of 5");
console.timeEnd("Time of Quiz");
console.log("-----------------------------------");
