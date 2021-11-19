# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

# Specific components of this challenge:!

* Create a front end experience that allows a user to create a Task.

* When the Task is created, it should be stored inside of a database (SQL)

* Whenever a Task is created the front end should refresh to show all tasks that need to be completed.

* Each Task should have an option to 'Complete' or 'Delete'.

* When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. 

* The complete option should be 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.

* Whether or not a Task is complete should also be stored in the database.

* Deleting a Task should remove it both from the front end as well as the Database.


# INITIALIZING:

  * Think through table structure.
    -- Actually make some CREATE TABLE statements.
  * Make a new git branch for "initializing" stuff.

  * Add files and folders to project directory.
    * Don't forget .gitignore!

  ##### Front-End:
    * Create a front expereince that allows users to create a Task
    * Mock up the basic HTML
    * Source CSS and JS files

  ##### Back-End:
    * run npm init
    * make sure "start" script exists in our package.json
    * npm install the stuff we need
      * express
      * pg
    * use Postico to make a database
    * use Postico to create "todos" table
    * implement minimum code for working Express server in server.js
    * wire up database connection in pool.js file

---

# FEATURES

  * create a task
    * store in db
    * re-render DOM

  * delete a task
    * delete task in db
    * re-render DOM

  * complete a task
    * update task in db
    * should be "checked off"
    * CSS to differentiate
    * re-render DOM

  * CSS! make it look good!

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
