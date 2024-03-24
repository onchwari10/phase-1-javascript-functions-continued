// code your solution here
// Function to define Saturday activities
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function to define Monday work
function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}

// Function to create a wrapper function for adjectives
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

// Exporting functions
module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
};
