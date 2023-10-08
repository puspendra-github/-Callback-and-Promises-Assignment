async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    console.log(data)
}

fetchData();

// Output
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }