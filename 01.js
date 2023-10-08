let arr=[10,20,30,40,50]

function a(arr, callback){
    const doubledArray=[];

    for(let i=0;i<arr.length;i++){
            const doubledValue =callback(arr[i])
            doubledArray.push(doubledValue)
    }
    return doubledArray;
}

function doubledNumber(num){
    return num *2
}

const doubledResult=a(arr,doubledNumber);

console.log(doubledResult)