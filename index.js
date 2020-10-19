//Up here we put all our require functions. We need node, inquirer and our other javascript page, generateMarkdown. 
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

//Now we make a const for all our questions. It's important to ask questions in a relationship, probs not the questions listed below, that would be a weird thing to say to someone in real life who doesn't really know much about computers. Actually would be weird even if they did know about computers. Good questions to ask someone in real life would be "How are you?" (thats a personal favourite of mine), and "Whats your favourite animal?" Mines a mountain goat, thanks for asking!
const questions = [
    // { type: "checkbox", message: "add a badge:", choices: "https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>" }, still working on this bastard
    { type: "input", message: "Provide the title for your project:", name: "Title" },
    { type: "input", message: "Give a description of your project:", name: "Description" },
    { type: "input", message: "What installations are needed:", name: "Installations" },
    { type: "input", message: "What is your project used for:", name: "Usage" },
    { type: "checkbox", message: "What license is neeeded:", name: "License", choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"] },
    { type: "input", message: "What command should be run for tests:", name: "Test" },
    { type: "input", message: "How can others contribute:", name: "Contributing" },
    { type: "input", message: "Any other questions?", name: "Questions" },
];

//Here we (and by we I mean the computer, and I guess me, so yes we) call on the inquirer (thats a weird word to me now)) and put in our questions const 
//Then make a README file and write all our data on that
inquirer.prompt(questions).then(data => {
    writeToFile("README.md", data)
})

//defining write to file function and catching any errors because everyone makes mistakes, everyone has those days, everyone knows what, what im talking bout everybody gets that way NOBODY'S PERFECT WE LIVE AND WE LEARN IT ok ill stop now. Honestly shocked if you're still reading this. I guess it's your job. Soz. 
function writeToFile(filename, data) {
    try {
        const response = JSON.stringify(data)
        const markdown = generateMarkdown(response)
        fs.writeFileSync(filename, markdown, function () {
            console.log('success!')
        });
    } catch (err) {
        console.error(err)
    }
}