CREATE TABLE toDoList(
    "id" serial PRIMARY KEY,
    "task" varchar(2000),
    "date" Date,
    "is_complete" boolean not null
    
);

