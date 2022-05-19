import groupSort from './group-sort.js';
import taskDelete from './task-delete.js';
import datesSort from './dates-sort.js';
import menuActive from './menu-active.js';

let tasksStorage = function(){
    let tasks = document.getElementById('tasks').children;
    let tasksValue = Array.from(tasks).map(task => {return task.children[0].value});
    let groupsValue = Array.from(tasks).map(task => {return task.children[1].value});
    let datesValue = Array.from(tasks).map(task => {return task.children[2].value});
    let numTask = 0
    let tasksStored = {};
    Array.from(tasks).forEach(task => {
        let taskArray = [tasksValue[numTask],groupsValue[numTask],datesValue[numTask]]
        tasksStored['task'+numTask] = taskArray
        numTask++
    });
    localStorage.setItem('tasks', JSON.stringify(tasksStored));
}

let tasksStorageReload = function(){
    window.onload = function(){
        let tasksStorage = JSON.parse(localStorage.getItem('tasks'));
        let tasks = document.getElementById('tasks').children;
        Array.from(tasks).forEach(task => {
            task.remove();
        });
        // Rebuilding tasks section with local stored data 
        for(let task in tasksStorage){
            let tasksDiv = document.getElementById('tasks')
            const taskValue = tasksStorage[task][0];
            const groupValue = tasksStorage[task][1];
            const dateValue = tasksStorage[task][2];
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.classList.add('Upcoming')
            taskDiv.classList.add(groupValue);
            // task
            let taskInput = document.createElement('input');
            taskInput.type = 'text';
            taskInput.value = taskValue;
            taskInput.setAttribute('value', taskValue);
            taskInput.readOnly = 'true';
            taskInput.maxLength = '40';
            // group
            let groupFormInput = document.createElement('input');
            groupFormInput.type = 'text';
            groupFormInput.value = groupValue;
            groupFormInput.setAttribute('value', groupValue);
            groupFormInput.readOnly = 'true';
            groupFormInput.maxLength = '40';
            // date
            let dateFormInput = document.createElement('input');
            dateFormInput.type = 'date';
            dateFormInput.value = dateValue;
            dateFormInput.setAttribute('value', dateValue);
            dateFormInput.readOnly = 'true';
            // button
            let taskBtn = document.createElement('button');
            let taskDeleteIcon = document.createElement('i');
            taskDeleteIcon.classList.add('fa-solid');
            taskDeleteIcon.classList.add('fa-trash-can');
            // Appending to the dom
            taskBtn.appendChild(taskDeleteIcon);
            taskDiv.appendChild(taskInput);
            taskDiv.appendChild(groupFormInput);
            taskDiv.appendChild(dateFormInput);
            taskDiv.appendChild(taskBtn);
            tasksDiv.appendChild(taskDiv);
            // Groups adding to menu
            let groupsUl = document.getElementById('group-menu');
            let groupLi = document.createElement('li');
            groupLi.classList.add('group-menu-item');
            groupLi.dataset.group = groupValue;
            groupLi.innerText = groupValue;
            groupsUl.appendChild(groupLi);
            // importing modules
            groupSort();
            datesSort();
            taskDelete();
            menuActive();
        };
    };
}

export {tasksStorage, tasksStorageReload};