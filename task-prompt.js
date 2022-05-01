let taskPrompt = function(){
    let promptBtn = document.getElementById('task-prompt-btn');
    promptBtn.addEventListener('click', () => {
        let prompt = document.getElementById('task-add-container');
        prompt.style.display = 'flex';
    })
}

taskPrompt();

// export default taskPrompt;