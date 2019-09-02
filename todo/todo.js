console.log("connected!");
"use strict";
var response;
const arr = [];
var toDoItem;

//response = prompt("What would u like to do?");
do{
    response = prompt("What would u like to do?");

switch (response){
    case "new":
        toDoItem = prompt("Enter your item");
        arr.push(toDoItem);
        break;
    case "list":
        console.log(arr);
        break;
    case "quit":
        break;
    }
}while(response !== "quit");
