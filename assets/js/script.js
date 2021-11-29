// variable with an array filled with objects for the questions 
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        values: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        values: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        values: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        values: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        values: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
];

// variables
var questionIndex = 0;
var initialScore = 0;
var penalty = 10;
var quizTime = 75;
var intervalGap =0;
var timerLimit = document.querySelector(".timer-limit");
var initiate = document.querySelector("#start-btn");
var q = document.querySelector(".q");

// start function 
