document.getElementById('task-completed').style.display='none';
document.getElementById('completed').addEventListener('click', 
    function (event) {
        event.preventDefault();
        
            document.getElementById('task-completed').style.display='block';
            alert('first task completed ')
    
})