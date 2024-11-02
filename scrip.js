$(document).ready(function() {
    $('#taskForm').submit(function(event) {
        event.preventDefault();

        const taskText = $('#taskinput').val().trim();

        if (taskText) {
            const newTask = $('<li></li>').text(taskText);
            $('#taskList').append(newTask);
            $('#taskInput').val('');
        }
    });

    $('#taskList').on('click', 'li', function(){
        $(this).toggleClass('completed');
    });
});