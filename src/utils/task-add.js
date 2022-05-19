import groupSort from './group-sort.js';
import taskDelete from './task-delete.js';
import datesSort from './dates-sort.js';
import menuActive from './menu-active.js';
import {tasksStorage} from './tasks-storage-local.js'

let taskAdd = function(){
    let addBtn = document.getElementById('task-add-btn');
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // GETTING ADD ELEMENTS
        // Task
        const addInput = document.getElementById('task-add-input');
        const inputValue = addInput.value;
        // Group
        const groupInput = document.getElementById('task-add-group');
        const groupValue = groupInput.value;
        // Date
        const dateInput = document.getElementById('task-add-date');
        const dateValue = dateInput.value;
        // ADDING TO THE DOM
        // Task
        let tasksDiv = document.getElementById('tasks');
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.classList.add(groupValue);
        // Adding upcoming od today to task class*** functionality coming
        taskDiv.classList.add('Upcoming');
        // task
        let taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.value = inputValue;
        taskInput.readOnly = 'true';
        taskInput.maxLength = '40';
        // group
        let groupFormInput = document.createElement('input');
        groupFormInput.type = 'text';
        groupFormInput.value = groupValue;
        groupFormInput.readOnly = 'true';
        groupFormInput.maxLength = '40';
        // date
        let dateFormInput = document.createElement('input');
        dateFormInput.type = 'date';
        dateFormInput.value = dateValue;
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
        // reseting back to original
        let addContainer = document.getElementById('task-add-container')
        addContainer.style.display = 'none';
        addInput.value = '';
        // Refreshing page to upcomong
        let tasks = document.querySelectorAll('.task');
        tasks.forEach(task=>{
            if(task.classList.contains('Upcoming')){
                task.style.display = 'flex';
            }else{
                task.style.display = 'none';
            }
        });
        let groupItems = document.querySelectorAll('.group-menu-item');
        groupItems.forEach(item => {
            item.style.backgroundColor = '';
            item.style.color = 'var(--onyx)';
        });
        const upcomingMenu = document.getElementById('upcoming-menu');
        upcomingMenu.style.backgroundColor = 'var(--olive)';
        upcomingMenu.style.color = 'var(--white)';
        // Groups adding to menu
        let groupsUl = document.getElementById('group-menu');
        let groupLi = document.createElement('li');
        groupLi.classList.add('group-menu-item');
        groupLi.dataset.group = groupValue;
        groupLi.innerText = groupValue;
        groupsUl.appendChild(groupLi);
        // Imported modules
        groupSort();
        datesSort();
        taskDelete();
        menuActive();
        tasksStorage();
    })
}

export default taskAdd;