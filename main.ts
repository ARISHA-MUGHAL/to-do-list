#! usr/bin/env node
import inquirer from "inquirer";
let myTodos = [];
let addMore = true;
while (addMore) {
  let tasks = await inquirer.prompt([
    {
      name: "addTask",
      type: "input",
      message: "what task do you want to add in to-do list ?",
    },
    {
      name: "priority",
      type: "list",
      message: "whats your priorty for this task ?",
      choices: ["low", "medium", "high"],
    },
    {
      name: "duedate",
      type: "input",
      message: "what is the deadline for completing this work ?",
    },
    {
      name: "confirmation",
      type: "confirm",
      message: " should i add this to your to-do list",
      default: "false",
    },
    {
      name: "addMore",
      type: "confirm",
      message: "do you want to add more ",
      default: "true",
    },
  ]);
  if (tasks.confirmation) {
    myTodos.push(tasks.addTask);

    console.log(myTodos);
  } else {
    console.log("Task not added to the to-do list.");
  }
  addMore = tasks.addMore;
  if(tasks.confirmation){
  let description = await inquirer.prompt({
    name: "seeDescrip",
    type: "confirm",
    message: " do you want to see description ",
    default: "false",
  });

    if (description.seeDescrip) {let taskDescription = `${tasks.addTask} - Priority: ${tasks.priority}, Deadline: ${tasks.duedate}`;
    console.log("Task added to the to-do list:", taskDescription);
    
  } else {
    console.log("Okay, I know you can complete all the tasks. Good luck!");
    } }else {
        console.log("i am here whenever you need , BYE !!");
        
    }
}
