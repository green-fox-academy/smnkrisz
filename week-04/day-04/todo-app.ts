import { printInfo } from './print-info';
import { listTasks } from './list-tasks';
import { addTask } from './add-task';
import { removeTask } from './remove-task';
import { completeTask } from './complete-task';

const args: string[] = process.argv.slice(2);

if (args[0] === undefined) {
    printInfo();
} else if (args[0] === '-l') {
    listTasks();
} else if (args[0] === '-a') {
    addTask();
} else if (args[0] === '-r') {
    removeTask();
} else if (args[0] === '-c') {
    completeTask();
}

class ToDo {








    
}