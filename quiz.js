import inquirer from "inquirer";
async function AskQuestion() {
    const answers = await inquirer.prompt([{
            type: "list",
            name: "Questionno1",
            choices: ["Amazon", "Microsoft", "Oracle", "Typescript"],
            message: "Which of the following companies has developed Typescript",
        },
        {
            type: "list",
            name: "Questionno2",
            choices: ["Gradual", "Duck", "Dynamic", "All of the above"],
            message: "What is the typing principle of Typescript",
        },
        {
            type: "list",
            name: "Questionno3",
            choices: [".tit", ".tsc", ".nod", ".ts"],
            message: "Which of the following filename is the extension for Typescript",
        },
        {
            type: "list",
            name: "Questionno4",
            choices: ["JavaScript", "c+", "Java", "All of the Above"],
            message: "Which of the computer programing language below has influenced the creation of TypeScript",
        },
    ]);
    const marks = 10;
    const fail = 0;
    if (answers.Questionno1 === "Mircrosoft") {
        console.log("Answer is correct");
    }
    else
        () => {
            console.log("Answer is not correct");
        };
    if (answers.Questionno2 === "Dynamic") {
        console.log("Answer is correct");
    }
    else {
        console.log("answer is not correct");
    }
    if (answers.Questionno3 === ".ts") {
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is not correct");
    }
    if (answers.Questionno4 === "JavaScript") {
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is not correct");
    }
}
AskQuestion();
