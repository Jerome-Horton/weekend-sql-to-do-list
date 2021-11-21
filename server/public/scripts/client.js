$(document).ready(onReady);

function onReady() {
        console.log("Let's Go!! 🕺");
        getNewTasks();
    $('#submitButton').on('click', clickListener);
    $(document).on('click', '.completeBtn', taskIsComplete);
    $(document).on('click', '.deleteBtn', deleteTask);
    addTimeDate();
};

function clearInputs(){
    console.log('In Clear Inputs 🌅');
        $('#taskIn').val('');
        $('#datein').val('');
        $('#taskStatus').val('');
}; // end clearInputs


// Create function for Submit Button
function clickListener() {
// get user input and put in an object
    console.log('in Submit Button 💫');
    let taskToDo = {
        task: $('#taskIn').val(),
        date: $('#dateIn').val(),
        is_complete: $('#taskStatus').val()
    };
// call displayTask with the new object
    displayTasks(taskToDo);
    clearInputs();
};

function getNewTasks() {
        console.log('in getNewTasks', getNewTasks);
// call to server to get newTask
    $.ajax({
        type:'GET',
        url: '/toDoList',
    }).then((response) => {
        const toDoList = response;
        console.log('GET /toDoList succeeded', toDoList);
        $('#viewTable').empty();
        console.log('GET /toDoList succeeded', toDoList);
    for (let tasks of response) {
        if(tasks.is_complete === 'N'){
            $('#viewTable').append(`
              <tr>
                <td>${tasks.task}</td>
                <td>${tasks.date}</td>
                <td>${tasks.is_complete}</td>
                <td><button class="completeBtn" data-id="${tasks.id}">complete</button></td>
                <td><button class="deleteBtn" data-id="${tasks.id}">Delete</button></td>
              </tr>
            `)
        }else{
            $('#viewTable').append(`
            <tr>
            <td>${tasks.task}</td>
            <td>${tasks.date}</td>
            <td>${tasks.is_complete}</td>
            <td></td>
            <td><button class="deleteBtn" data-id="${tasks.id}">Delete</button></td>
            
          </tr>
        `)
          }
        }   
    });
} // end createNewTask


function displayTasks(newTask) {
    console.log('In Display Task 🌍', newTask);
// ajax call to server GET Tasks
    $.ajax({
        type:'POST',
        url: '/toDoList',
        data: newTask
    }).then((response) => {
        console.log(('POST /toDoList is working', response));
        getNewTasks();
    }).catch(function(error) {
        console.log('Error in POST', error)
        alert('Unable to add new Task at this time. Please try again later.');
        });
    }
 // end displayTasks

function taskIsComplete(){
    console.log('In taskisComplete');
    const taskToComplete = $(this).data('id');
    $.ajax({
        method: 'PUT',
        url: `/toDoList/${taskToComplete}` 
    }).then((res) =>{
        console.log('PUT /toDoList is working', res);
        getNewTasks();
      }).catch((error) =>{
        console.log('taskIsComplete error:', error);
      });
};

function deleteTask(){
    console.log('In deleteTask');
    const taskToDelete = $(this).data('id');
    $.ajax({
        method: 'DELETE',
        url: `/toDoList/${taskToDelete}` 
    }).then((res) =>{
        getNewTasks();
      }).catch((error) =>{
        console.log('deleteTask error:', error);
      });
}

function addTimeDate() {
    console.log('in addTimeDate ⏰');
    let currentTime = $('#currentTime')
    currentTime.empty();
    const current = new Date().toDateString();
    getNewTasks();
    currentTime.append(current)
    console.log(current);
}