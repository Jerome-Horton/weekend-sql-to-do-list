$(document).ready(onReady);

function onReady() {
        console.log("Let's Go!! 🕺");
    $('#submitButton').on('click', createNewTask);
    displayTasks();
};

// Create function for Submit Button
function createNewTask(newTask) {
// ajax call to server POST Tasks
    console.log('in Submit Button 💫', newTask);
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
}; // end clearInputs

function displayTasks() {
    console.log('In Display Task 🌍');
// ajax call to server GET Tasks
    $.ajax({
        type:'POST',
        url: '/toDoList',
        data: newTask
    }).then((response) => {
        const toDoList = response;
        $('#viewTable').empty();
        console.log('GET /toDoList succeeded', toDoList);
    for (let task of response) {
        if(toDoList.is_complete === 'N'){
            $('#viewTable').append(`
              <tr>
                <td>${task.task}</td>
                <td>${task.date}</td>
                <td>${task.is_complete}</td>
              </tr>
            `)
          }else{
            $('#viewTable').append(`
            <tr>
              <td>${task.task}</td>
              <td>${task.date}</td>
              <td>${task.is_complete}</td>
              <td></td>
            </tr>
            `)
          } 
        }   
    });
}// end displayTasks