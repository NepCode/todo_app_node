## Command Line app

install dependencies

new task:
node app crear -d "your new task"

list task:
node app gettasks

list task filtering pending or complete tasks
node app gettasks -c true
node app gettasks -c false


update task:
-c optional argument
node app gettasks -d "task name" -c false

delete task:
node app gettasks -d "task name" 