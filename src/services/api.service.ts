const baseUrl = 'https://jsonplaceholder.typicode.com/todos'

const getTodos = async () => {
    return await fetch(baseUrl)
    .then(response => response.json())
}
export {getTodos}