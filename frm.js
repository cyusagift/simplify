let Uname = document.getElementById("Uname");
let pwd = document.getElementById("Pwd");
let btn = document.getElementById("btn");

const inputEl = document.querySelector("input");
inputEl.addEventListener("change",(event)=>{
    console.log(event.target.value)
})

const btnEl = document.querySelector("button");
document.querySelector('form').addEventListener("submit",(event)=>{
    event.preventDefault()
    pEl = document.createElement('p')
    pEl.style.background = "cadetblue"
    pEl.innerText = Uname.value + " " + pwd.value;
    // pEl.write(`Your Username is ${Uname} and your Password is ${pwd}.`)
    document.querySelector('form').appendChild(pEl)
});
