const fs = require('fs');

export function listTasks(): void {
    let myFile: string = fs.readFileSync('list.txt', 'utf-8');
    if (myFile !== '') {{
            console.log(myFile);
        }
    } else {
        console.log('No todos for today! :)');
    }
}
listTasks();