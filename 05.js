function greetingMessage(name){
    return new Promise((resolve, reject) => {
        if(typeof name==='string'){
            resolve(`Hello: ${name}`)
        }
        else{
            reject(`name is not string`)
        }
})
}

let name = 'Vikash'

greetingMessage(name).then((Message)=>{
    console.log(Message);
})
.catch((error) => {
    console.error(Message)
}
)



