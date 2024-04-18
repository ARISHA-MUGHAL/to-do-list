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
  ]);
  if (tasks.addTask !== "") {
    let Tasks = await inquirer.prompt([
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
    if (Tasks.confirmation) {
      myTodos.push(tasks.addTask);

      console.log(myTodos);
    } else {
      console.log("Task not added to the to-do list.");
    }
    addMore = Tasks.addMore;
    if (Tasks.confirmation) {
      let description = await inquirer.prompt({
        name: "seeDescrip",
        type: "confirm",
        message: " do you want to see description ",
        default: "false",
      });

      if (description.seeDescrip) {
        let taskDescription = `${tasks.addTask} - Priority: ${Tasks.priority}, Deadline: ${Tasks.duedate}`;
        console.log("Task added to the to-do list:", taskDescription);
      } else {
        console.log("Okay, I know you can complete all the tasks. Good luck!");
      }
    } else {
      console.log("i am here whenever you need , BYE !!");
    }
  } else {
    console.log("you haven't add any tasks");
  }
}
let updQues = await inquirer.prompt({
  name: "updtodos",
  type: "confirm",
  message: "Do you want to update your to-do list ?",
});
if (updQues.updtodos) {
  let taskToUpd = await inquirer.prompt({
    name: "taskupdt",
    type: "list",
    message: "select an item you want to update . ",
    choices: myTodos,
  });
  let updateTask = await inquirer.prompt([
    {
      name: "newTask",
      type: "input",
      message: "Enter the new task",
    },
    {
      name: "newPriority",
      type: "list",
      message: "What is your priority for this task ?",
      choices: ["low", "medium", "high"],
    },
    {
      name: "newduedate",
      type: "input",
      message: "what is the deadline for completing this work ?",
    },
  ]);
  const index = myTodos.indexOf(taskToUpd.taskupdt);
  myTodos[index] = updateTask.newTask;
  console.log("Task updated succesfully!");
  console.log(myTodos.join("\n"));
}
let delQues = await inquirer.prompt({
  name: "delTodos",
  type: "confirm",
  message: "Do you want to delete a task from your to-do list ?",
  default: false,
});
if (delQues.delTodos) {
  let taskToDel = await inquirer.prompt({
    name: "tasktodel",
    type: "list",
    message: "Select a task you want to delete .",
    choices: myTodos,
  });
  const index = myTodos.indexOf(taskToDel.tasktodel);
  myTodos.splice(index, 1);
  console.log("Task deleted successfully ! ");
  console.log(myTodos.join("\n"));
}
