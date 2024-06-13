const fs = require('node:fs');
const filename = 'todos.json'

let todos = []

if(fs.existsSync(filename)){
    const data = fs.readFileSync(filename, 'utf8');
    if (data){
        todos = JSON.parse(data);
    }
}


function saveTodos() {
    fs.writeFileSync(filename, JSON.stringify(todos, null, 2));    
}

function addTodo (content){
    const newTodo = {
        id: todos.length + 1,
        content : content,
        completed: false,
        tags: [],
        createdAt: new Date().getTime(),
    }
    todos.push(newTodo)
    saveTodos();
    console.log(`"${content}" telah ditambahkan.`)
}

function completeTodo (id){
    const todo = todos.find(todo => todo.id == id)
    if(todo){
        todo.completed = true;
        saveTodos()
        console.log(`"${todo.content}" telah selesai`)
    }
}

function uncompleteTodo (id){
    const todo = todo.find(todo => todo.id ==id)
    if(todo){
        todo.completed = false
        saveTodos()
        console.log(`"${todo.content}" status selesai dibatalkan.`)
    }
}

function listTodos (filter, order){
    let filteredTodos = todos

    if(filter === 'completed'){
        filteredTodos = todos.filter(todo => todo.completed)
    } else if (filter === "outstanding"){
        filteredTodos = todos.filter(todo =>!todo.completed)
    }

    if (order === "asc"){
        filteredTodos.sort((a, b) => a.cretedAt - b.createdAt)
    } else if (order === 'desc'){
        filteredTodos.sort((a, b) => b.createdAt - a.cretedAt)
    }

    console.log('Daftar Pekerjaan')
    filteredTodos.forEach((todo, index) => {
        console.log(`${index + 1}. [${todo.completed ? 'X' : ' '}] ${todo.content}`);
    })
}

function deleteTodo (id){
    const index = todos.findIndex(todo => todo.id == id)
    if (index !== -1){
        const removed = todos.splice(index,1);
        saveTodos()
        console.log(`"${removed[0].content}" telah dihapus dari daftar.`)
    }
}

function tagTodo  (id, tags){
    const todo = todos.findIndex(todo => todo.id == id)
    if(todo){
        todo.tags.push(...tags);
        saveTodos();
        console.log(`Tag ${tags.join(', ')} telah ditambahkan ke daftar '${todo.content}'`)
    }
}

function filterTodos (tag){
    const filteredTodos = todos.filter(todo => todo.tags.includes(tag))
    console.log('Daftar Pekerjaan')
    filteredTodos.forEach((todo, index) => {
        console.log(`${index +1}. [${todo.completed ? 'X': ' '}] ${todo.content}`)
    })
}
 

const args = process.argv.slice(2)
const command = args[0]

switch (command) {
    case 'list':
        //TODO
        const filter = args[1]
        const order = args[2]
        listTodos(filter, order)
        break
    case 'add':
        const content = args.slice(1).join(' ');
        addTodo(content)
        break;
    case 'delete':
        const deleteId = args[1];
        deleteTodo(deleteId);
        break;
    case 'complete':
        const completeId = args[1];
        completeTodo(completeId);
        break;
    case 'uncomplete':
        const uncompletId = args[1]
        uncompleteTodo(uncompletId)
        break;
    case 'tag':
        const tagId = args[1];
        const tags = args.slice(2);
        tagTodo(tagId, tags);
        break;
    case 'filter':
        const tagName = args[1]
        filterTodos(tagName)
        break;
    case 'help':
        console.log('>>> JS TODO <<<');
        console.log('$ node todo.js <command>');
        console.log('$ node todo.js list');
        console.log('$ node todo.js task <task_id>');
        console.log('$ node todo.js add <task_content>');
        console.log('$ node todo.js delete <task_id>');
        console.log('$ node todo.js complete <task_id>');
        console.log('$ node todo.js uncomplete <task_id>');
        console.log('$ node todo.js list:outstanding asc|desc');
        console.log('$ node todo.js list:completed asc|desc');
        console.log('$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>');
        console.log('$ node todo.js filter:<tag_name>');
        break;
    default:
        console.log(">>> JS TODO <<<")
        console.log("> node c13.js list <task_id>")
        console.log("> node c13.js add <task_content>")
        console.log("> node c13.js delete <task_id>")
        console.log("> node c13.js complete <task_id>")
        console.log("> node c13.js uncomplete <task_id>")
        console.log("> node c13.js list:outstanding asc|desc")
        console.log("> node c13.js list:completed asc|desc")
        console.log("> node c13.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>")
        console.log("> node c13.js filter:<tag_name>")
        break;    
}

