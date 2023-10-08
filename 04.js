let books = [
    {
        title:'Deep Work',
        author:'Cal Newport',
        year:'2016'
    } , 
    {
        title:'Power of SubConscious',
        author:'Joseph Murphy',
        year:'1963'
    } 
    
]

newList(books,callback)

function newList(book,callback){
    const newList= book.map((book)=>{
        return book.title;
    })
    callback(newList);
}

function callback(newList){
    newList.sort()
    console.log(newList.join(', '));
}

// Output

// Deep Work, Power of SubConscious