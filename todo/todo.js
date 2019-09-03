console.log("connected!");
"use strict";
var response;
const arr = [];
var toDoItem;
var delindex;

do{
    response = prompt("What would u like to do?");

switch (response){
    case "new":
        addToDo();
        break;
    case "list":
        //console.log(arr);
       listToDo();
        break;
    case "delete":
        deleteToDo();
    case "quit":
        break;
    }
}while(response !== "quit");

function addToDo(){
    toDoItem = prompt("Enter your item");
    arr.push(toDoItem);
    console.log("added todo");
}

function listToDo(){

    var n = 0;
    console.log("*******");
    arr.forEach(function(ele){
        console.log(n+": "+ ele);
        n++;
    });
    console.log("*******");
}

function deleteToDo(){

    delindex = prompt("Enter the index to be delete a todo.");
    arr.splice(delindex,1);
    console.log("Deleted todo");
}