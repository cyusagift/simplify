// let newpromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         time = 15;
//         resolve(time)
//     },1000)
// })

// newpromise.then(result => console.log("====>This is the result"));

// async function PromiseCall(){
//     let result = await newpromise;
//     console.log("Hello Boris", result);
// }

// PromiseCall()


// HTTP Call 
//Fetch api

let name = {
    "First":"Rubayita",
    "Middle":"Kirenga",
    "Last":"Boris"
}

fetch("url",{
    method: "POST",
    headers: {},
    body: JSON.stringify(name)  
}).then(data => {
    console.log("==data==>",data.json())
}).catch(error => {
    console.log("==getting error==>",error,"<==This is the Error==")
});