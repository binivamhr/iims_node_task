let student = ['Biniva', 'Maharjan'];

function promiseReadArray(student){
    return new Promise((resolve, reject)=>{
        if (student.length > 0){
            resolve('student is Ok')
        }
        else{
            reject('please enter data')
        }
    })
}

promiseReadArray(student).then(result => {
    console.log(`The students is: `);

    }).catch(error=>{
    console.log(error);
})
 
let async_await_read_array = async (student) => {
    try {
        let readArray = await promiseReadArray(student);
        console.log(`The answer is`)  
    } catch (error) {
        console.log("Error is: ");
        console.log(error);
    }
    
}

async_await_read_array(student);


let myName = {
    'first name': 'biniva',
    'last name' : 'maharjan',
    'age': 21,
    'address': 'Kirtipur',
    'college' : 'IIMS'
}

function promiseReadObject(myName){
    return new Promise((resolve, reject)=>{
        if(myName){
            resolve(myName)
        }
        else{
            reject("Empty");
        }
    })
}

promiseReadObject(myName)
    .then(result=>console.log(result))
    .catch(error=>console.log(error));


