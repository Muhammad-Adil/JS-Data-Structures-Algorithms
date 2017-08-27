export class InitTodos {
    load() {
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
            console.log('no todos found ')

            var todos = [
                {
                    text: 'todo 1'
                }, {
                    text: 'todo 2'
                }, {
                    text: 'todo 3'
                }
            ];

            localStorage.setItem('todos' , JSON.stringify(todos));
            return todos;
        } else {
            console.log('found todos');
        }
    }
}