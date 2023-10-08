function manipulatedString(str, callback){
        const manipulatedString = str.toUpperCase()

        callback(manipulatedString)

}   

function logString(manipulatedString){
    console.log(`The manipulated String : ${manipulatedString}`)
}

manipulatedString("hello , world", logString)

// Output
// The manipulated String : HELLO , WORLD