 let person ={
    first_name:'Vikash',
    last_name: "Prajapati",
    Age: '21'
}

ageInDays(person,callback);


function ageInDays(obj,callback){
    let fullName= obj.first_name + ' '+obj.last_name;
    let ageInDays= obj.Age * 365;
    callback(fullName, ageInDays)
}

function callback(fullName,ageInDays){
    console.log(`The Person fullName:${fullName} and Age: ${ageInDays}`)

}

// Output
// The Person fullName:Vikash Prajapati and Age: 7665


