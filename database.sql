CREATE TABLE toDoList(
    "id" serial PRIMARY KEY,
    "task" varchar(2000),
    "date" Date,
    "is_complete" varchar not null
    
);

INSERT INTO toDoList ( "task", "date", "is_complete" )
VALUES ( 'Review LinkedIn Profile', '11-20-2021', 'N'),
( 'complete Assignment', '11-20-2021', 'N'),
( 'Watch the two Assigned videos about React', '11-20-2021', 'N'),
( 'Treat youself to a bottle of wine', '11-20-2021', 'N');
