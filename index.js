const inquirer = require("inquirer");
const fs = require("fs");
const svg = require("./lib/svg")
const Circle = require("./lib/circle")
const Triangle = require("./lib/triangle")
const Square = require("./lib/square")

function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What text would you like for your logo?",
        name: "text",
      },
      {
        type: "input",
        message: "What color would you like for your text(Color name or hex#)?.",
        name: "textColor",
      },
      {
        type: "list",
        message: "Choose a shape for your logo.",
        name: "shape",
        choices: ["Square", "Circle", "Triangle"]
      },
      {
        type: 'input',
        message: "What color would you like for your shape(Color name or hex#)?",
        name: "shapeColor",
      },

    ])
    .then((data) => {
      const fileName = "logo.svg";
      writeToFile(fileName, data);
    }
    );
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, svg(data), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Generated logo.svg!');
  });
}




init();