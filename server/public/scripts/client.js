$(document).ready(onReady);

function onReady() {
        console.log("Let's Go!! 🕺");
    $('#submitButton').on('click', createNewTask);
};

// Create function for Submit Button
function createNewTask() {
    console.log('in Submit Button 💫');
    let newTask = {
        task: $('#taskIn').val(),
        date: $('#datein').val(),
        is_complete: $('#taskStatus').val()
    };
    $.ajax({
        type:'POST',
        url: '/toDoList',
        data: newTask
    }).then((response) => {
        console.log('POST /toDoList succeeded');
        clearInputs();
    }).catch((err) => {
        console.error(err);
        alert('🛑 unable to add new tasks at this time, Please try again later')
    });
} // end createNewTask

function clearInputs(){
    console.log('In Clear Inputs 🌅');
  $('#taskIn').val('');
  $('#datein').val('');
  $('#taskStatus').val('');
};