let exitTaskPrompt = function(){
    let exitBtn = document.getElementById('exit-task-prompt');
    exitBtn.addEventListener('click', () => {
        let prompt = document.getElementById('task-add-container');
        prompt.style.display = 'none';
    })
}

export default exitTaskPrompt